#!/usr/bin/python
# -*- coding: utf-8 -*-
from __future__ import (absolute_import, division, print_function,unicode_literals)

import os
import json
from libZotero import zotero # https://github.com/fcheslack/libZotero
import xml.etree.ElementTree as ET #read only operations on private lib, no security concerns

#from citeproc.py2compat import *
from citeproc import CitationStylesStyle, CitationStylesBibliography
from citeproc import Citation, CitationItem
from citeproc import formatter
from citeproc.source.json import CiteProcJSON

publications_path = os.path.join(os.sep, os.path.dirname(os.getcwd()), '_data', 'publications')

# credential
with open('.credential.json') as credential:
  c = json.loads(credential.read())
  # libZotero/zotero config
  library = zotero.Library(c['libraryType'], c['libraryID'], c['librarySlug'], c['apiKey'])
  items = library.fetchItems({  #'include':'data',
                              'collectionKey':c['collectionID'],
                              'content':'json',
                              #'style':'apa',
                              'sort':'date'
                              })

for item in items:
  filename = os.path.join(os.sep, publications_path, item.get('date').replace('-', '')+'.json')

  itemFetched = library.fetchItem(item.itemKey,{'content':'csljson' })
  xmle = ET.fromstring(itemFetched.content.encode('utf-8'))
  csljson = xmle.find('{http://www.w3.org/2005/Atom}content').text.replace('ç','&ccedil;')
  json_dict = json.loads(csljson)

  y, m, d = json_dict['issued']['raw'].split('-')

  json_dict['issued']['date-parts'] = [[y, m, d]]

  with open(filename, 'w+') as f:
    json.dump(json_dict, f, indent=4, sort_keys=True, ensure_ascii=False)

  print('#######')
  print(json_dict)
  print('#######')
  print(json_dict['id'])
  # CiteProcJSON receives a [] not a {}
  bib_source = CiteProcJSON([json_dict])

  apaPTBR = CitationStylesStyle('apa', locale='pt-BR', validate=False)
  
  # it defaults to en-US
  bibStyle_enUS = CitationStylesStyle('apa', validate=False)

  bibliography = CitationStylesBibliography(apaPTBR, bib_source, formatter.html)
  bibliography.register(Citation([CitationItem(json_dict['id'])]))
  print(bibliography.bibliography()[0])
  # bibUS = CitationStylesBibliography(bibStyle_ptBr, bib_source, formatter.html)


  
  break
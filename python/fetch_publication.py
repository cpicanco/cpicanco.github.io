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

latin_chars = [('&iexcl;','¡'),('&cent;','¢'),('&pound;','£'),('&curren;','¤'),
  ('&yen;','¥'),('&brvbar;','¦'),('&sect;','§'),('&uml;','¨'),('&copy;','©'),
  ('&ordf;','ª'),('&laquo;','«'),('&not;','¬'),('&reg;','®'),('&macr;','¯'),
  ('&deg;','°'),('&plusmn;','±'),('&sup2;','²'),('&sup3;','³'),('&acute;','´'),
  ('&micro;','µ'),('&para;','¶'),('&middot;','·'),('&cedil;','¸'),('&sup1;','¹'),
  ('&ordm;','º'),('&raquo;','»'),('&frac14;','¼'),('&frac12;','½'),('&frac34;','¾'),
  ('&iquest;','¿'),('&Agrave;','À'),('&Aacute;','Á'),('&Acirc;','Â'),('&Atilde;','Ã'),
  ('&Auml;','Ä'),('&Aring;','Å'),('&AElig;','Æ'),('&Ccedil;','Ç'),('&Egrave;','È'),
  ('&Eacute;','É'),('&Ecirc;','Ê'),('&Euml;','Ë'),('&Igrave;','Ì'),('&Iacute;','Í'),
  ('&Icirc;','Î'),('&Iuml;','Ï'),('&ETH;','Ð'),('&Ntilde;','Ñ'),('&Ograve;','Ò'),
  ('&Oacute;','Ó'),('&Ocirc;','Ô'),('&Otilde;','Õ'),('&Ouml;','Ö'),('&times;','×'),
  ('&Oslash;','Ø'),('&Ugrave;','Ù'),('&Uacute;','Ú'),('&Ucirc;','Û'),('&Uuml;','Ü'),
  ('&Yacute;','Ý'),('&THORN;','Þ'),('&szlig;','ß'),('&agrave;','à'),('&aacute;','á'),
  ('&acirc;','â'),('&atilde;','ã'),('&auml;','ä'),('&aring;','å'),('&aelig;','æ'),
  ('&ccedil;','ç'),('&egrave;','è'),('&eacute;','é'),('&ecirc;','ê'),('&euml;','ë'),
  ('&igrave;','ì'),('&iacute;','í'),('&icirc;','î'),('&iuml;','ï'),('&eth;','ð'),
  ('&ntilde;','ñ'),('&ograve;','ò'),('&oacute;','ó'),('&ocirc;','ô'),('&otilde;','õ'),
  ('&ouml;','ö'),('&oslash;','ø'),('&ugrave;','ù'),('&uacute;','ú'),('&ucirc;','û'),
  ('&uuml;','ü'),('&yacute;','ý'),('&thorn;','þ'),('&yuml;','ÿ')]

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

  csljson = xmle.find('{http://www.w3.org/2005/Atom}content').text
  for cs in latin_chars:
    csljson = csljson.replace(cs[1],cs[0])

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
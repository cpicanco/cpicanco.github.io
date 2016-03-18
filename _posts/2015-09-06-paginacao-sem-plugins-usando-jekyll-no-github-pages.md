---
title: Paginação sem plugins usando Jekyll no GitHub Pages
tags: ['web design']
excerpt: com o mínimo de esforço manual
language: pt-BR
en: /2015/09/06/jekyll-pagination-on-github-pages-without-plugins.html
copyright: <!--Copyright (c) 2015-2016 Carlos Rafael Fernandes Picanço-->
---
Estou escrevendo em um momento no qual não é possível paginar para múltiplos destinos com o Jekyll ligado no GitHub Pages. O GitHub Pages não permite usar plugins de terceiros nem customizados no Jekyll, pois o Jekyll é executado com a bandeira `--safe`. Uma alternativa é utilizar Templates com algum trabalho manual extra. Isso realmente permite a paginação para múltiplos destinos sem qualquer plugins. Estou usando a solução para gerar páginas "on demand" afim de alimentar [Waypoints - Infinite scroll](http://imakewebthings.com/waypoints/shortcuts/infinite-scroll/) da página inicial.

Este blog é um exemplo vivo dessa solução, o código fonte está aqui: [cpicanco.github.io](https://github.com/cpicanco/cpicanco.github.io).


### Desvantagens

- requer algum trabalho manual (as páginas devem ser criadas manualmente nos destinos).

### Vantagens

 - Suporta postagens e coleções (Posts & Collections)
 - Suporta customização dos arquivos de entrada
 - Suporta customização dos locais de destino
 - O trabalho manual pode ser automatizado


### Árvore de arquivos

<pre><code class="nohighlight">
    - root
    .   /_posts
    .      /2052-01-01-all-posts.md
    .
    .   /_layouts
    .      /InitialPage.html
    .      /Page.html
    .
    .   /man
    .      /page
    .         /1
    .            /index.html
    .         /2
    .            /index.html
    .         /(...)
    .            /index.html
    .
    .      /frontpage
    .         /index.html
    . 
    .   /en
    .      /page
    .         /1
    .            /index.html
    .         /2
    .            /index.html
    .         /(...)
    .            /index.html
    .
    .      /frontpage
    .         /index.html
    . 
    .  index.html
</code></pre>

O arquivo "page/x/index.html" deve ter no mínimo a seguinte variável:
    ---
    index: x // onde x corresponde ao número da respectiva página
    ---


### Configuração

É necessário adicionar algumas variáveis no arquivo de configuração `_config.yml`. Esta variável controla o número de posts por página:
    mpaginate: 3


Padrões do tipo Scope/Values foram usandos para determinar o caminho de destinho. Também seria possível usar o front matter do arquivos `/page/x/index.html`, como você preferir:
    defaults:
      -
        scope:
          path: "en/page"
        values:
          layout: Page
          language: en

      -
        scope:
          path: "man/page"
        values:
          layout: Page
          language: man

### Templates

Como apresentado na árvore de arquivos do site, estou usando dois templates no caminho `_layout/`, um para a página inicial e outro para as páginas subsequentes. Para percorrer os post na página inicial você pode fazer:
    {{ "{% assign filtered_posts = site.posts | where: 'language',page.language " }}%}

    {{ "{% for post in filtered_posts limit:site.mpaginate " }}%}
       post.dowhatyouwantbutdontdoitaroundme
    {{ "{% endfor " }}%}

Para percorrer as páginas subsequentes:
    /* Quantas postagens atendem ao critério de filtragem por idioma? */
    {{ '{% assign posts_count = site.posts | where: "language",page.language | size ' }}%}

    /* Quantas páginas são necessárias para apresentar todas as postagens? */
    {{ "{% assign mod_pag = posts_count | modulo:site.mpaginate " }}%}
    {{ "{% assign pages_count = posts_count | divided_by:site.mpaginate | plus:mod_pag " }}%}

    /* Qual deve ser a página seguinte? */
    {{ "{% assign next_pag = page.index | plus:1 " }}%}

    /* É necessário calcular um deslocamento/desvio em relação às postagens de páginas anteriores. */
    {{ "{% assign OFFSET = site.mpaginate | times:page.index " }}%}

    /* Qual deve ser a última página? */
    {{ "{% if site.mpaginate < pages_count " }}%}
       {{ "{% assign last_pag = pages_count | minus:1 " }}%}
    {{ "{% else " }}%}
       {{ "{% assign last_pag = pages_count " }}%}
    {{ "{% endif " }}%}

    {{ "{% if OFFSET >= posts_count then " }}%}
       {{ "{% assign last_pag = page.index " }}%}
    {{ "{% endif " }}%}

    {{ "{% if page.index == last_pag then " }}%}
          {{ "{% assign next_pag = 'none' " }}%}
    {{ "{% endif " }}%}

    /* Mostrar os valores das variáveis
    Language={{ "{{ page.language " }}}}
    PostsCount={{ "{{ posts_count " }}}}
    OFFSET={{ "{{ OFFSET " }}}}
    PagesCount={{ "{{ pages_count " }}}}
    NextPage={{ "{{ next_pag " }}}}
    LastPage={{ "{{ last_pag " }}}}
    */

    /* Quais posts atendem ao critério de filtragem por idioma? */
    {{ "{% assign filtered_posts = site.posts | where: 'language',page.language " }}%}

    /* Percorrendo os posts */
    {{ "{% for post in filtered_posts limit:site.mpaginate offset:OFFSET " }}%}
       post.dowhatyouwantbutdontdoitaroundme
    {{ "{% endfor " }}%}

    /* Você pode, se preferir, diferenciar a última página */
    {{ "{% if page.index == last_pag then " }}%}
       /* I am the last page */
    {{ "{% else " }}%}
    <a class="next-page" href="{{ "{{ page.language | downcase " }}}}/page/{{ "{{ next_pag " }}}}/"></a>
    {{ "{% endif " }}%}

O critério `"language",page.language` no filtro `where:` popula o vetor de postagens `filtered_posts`. Você pode entender esse critério como aquilo que define quais postagens devem ser incluidas nos destinos configurados. Altere esse critério como preferir. 
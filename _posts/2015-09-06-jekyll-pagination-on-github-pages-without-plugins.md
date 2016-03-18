---
title: Jekyll pagination on GitHub Pages without plugins
tags: ['web design']
excerpt: with minor manual work
language: en
pt: /2015/09/06/paginacao-sem-plugins-usando-jekyll-no-github-pages.html
copyright: <!--Copyright (c) 2015-2016 Carlos Rafael Fernandes Picanço-->
---

By the time of this wrinting, paginate to multiple paths is not possible if you want to use GitHub Pages with Jekyll turned on. GitHub Pages does not allow custom Jekyll plugins, because Jekyll is executed with the `--safe` flag. An alternative is to use Templates and do some manual work. It does allow you to paginate to multiple paths and did not requires any plugin. I am using it to generate pages "on demand" to feed a [Waypoints - Infinite scroll shortcut](http://imakewebthings.com/waypoints/shortcuts/infinite-scroll/).

The present blog is a live example, source is here: [cpicanco.github.io](https://github.com/cpicanco/cpicanco.github.io).


### Drawbacks

- requires some manual work (currently, simple front matter pages must be created manually).

### Advantages

 - Supports posts & collections
 - Supports customization of input file
 - Supports customization of output location
 - The manual work can be automated locally. 

### Structure/File Tree

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

The page/x/index.html should have at least the following frontmatter variable:


    ---
    index: x // where x is equal to the corresponding page
    ---


### Configuration

Some variables are required in the `_config.yml` configuration file. This one controls how many post per page.
    mpaginate: 3


Scope/Values defaults were used to determine the destination path. Of course, you could use the `/page/x/index.html`  front matter as well:
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

As noted in the file tree, I am using two `_layout/` templates, one for the initial page, and other for the subsequent pages.

To walk through the posts in the initial page:

    {{ "{% assign filtered_posts = site.posts | where: 'language',page.language " }}%}

    {{ "{% for post in filtered_posts limit:site.mpaginate " }}%}
       post.dowhatyouwantbutdontdoitaroundme
    {{ "{% endfor " }}%}


To walk through the subsequent pages:


    /* How many post fits the language? */
    {{ '{% assign posts_count = site.posts | where: "language",page.language | size ' }}%}

    /* How many pages we need? */
    {{ "{% assign mod_pag = posts_count | modulo:site.mpaginate " }}%}
    {{ "{% assign pages_count = posts_count | divided_by:site.mpaginate | plus:mod_pag " }}%}

    /* What should be the next page? */
    {{ "{% assign next_pag = page.index | plus:1 " }}%}

    /* Lets calculate an offset to the posts of the current page. */
    {{ "{% assign OFFSET = site.mpaginate | times:page.index " }}%}

    /* Now, what should be the last page? */
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

    /* Feedback
    Language={{ "{{ page.language " }}}}
    PostsCount={{ "{{ posts_count " }}}}
    OFFSET={{ "{{ OFFSET " }}}}
    PagesCount={{ "{{ pages_count " }}}}
    NextPage={{ "{{ next_pag " }}}}
    LastPage={{ "{{ last_pag " }}}}
    */

    /* Assign the posts to walk through */
    {{ "{% assign filtered_posts = site.posts | where: 'language',page.language " }}%}

    /* The walk through */
    {{ "{% for post in filtered_posts limit:site.mpaginate offset:OFFSET " }}%}
       post.dowhatyouwantbutdontdoitaroundme
    {{ "{% endfor " }}%}

    /* You might want to differentiate the last page */
    {{ "{% if page.index == last_pag then " }}%}
       /* I am the last page */
    {{ "{% else " }}%}
        <a class="next-page" href="{{ "{{ page.language | downcase " }}}}/page/{{ "{{ next_pag " }}}}/"></a>
    {{ "{% endif " }}%}

The `"language",page.language` in the `where:` filter is what populate the array of posts. You can think of it as what controls the type of the page in each path. You can change it to fit your requirements.
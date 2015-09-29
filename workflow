# install

  # ruby
  # https://github.com/postmodern/ruby-install#readme
  # https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.3.tar.gz
  ruby-install ruby 2.2.3

  # npm
  sudo apt-get install npm

  # grunt
  sudo npm install -g grunt-cli
  
  # libZotero
  sudo pip install libZotero

  # the repository
  git clone https://github.com/cpicanco/cpicanco.github.io.git

  # grunt dependencies
  cd cpicanco.github.io
  npm install

# tasks
  # minify when necessary
    # changes in js/src were made
    grunt uglify:dynamic

    # changes in css/src were made
    grunt cssmin:dynamic

  # concat when necessary
    # covers
    grunt concat:csscover

    # portfolio
    grunt concat:cssport

    # portfolio/achievements
    grunt concat:cssac

    # blog
    grunt concat:cssblog

# misc
  # new task
  npm install <task-name> --save-dev

  # serve github page
  bundle exec jekyll serve
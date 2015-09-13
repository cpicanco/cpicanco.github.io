// minify when necessary

// changes in js/src were made
grunt uglify:dynamic

// changes in css/src were made
grunt cssmin:dynamic

// css concatenate
grunt concat

// all
grunt

// new task
cd <package.json folder>
npm install <task-name> --save-dev

// serve github page
bundle exec jekyll serve
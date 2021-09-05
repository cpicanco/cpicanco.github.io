# install

  # ruby
  # https://github.com/postmodern/ruby-install#readmes
  ruby-install ruby

  # ~/.bashrc
  # export PATH="/home/rafael/.rubies/ruby-x.x.x/bin:$PATH"

  # install ruby gems
  cd ~
  cd Downloads/
  wget https://rubygems.org/rubygems/rubygems-x.x.x.tgz
  tar xvf rubygems-x.x.x.tgz
  cd rubygems-x.x.x
  sudo ruby setup.rb

  # install bundler gem
  gem install bundler

  cd ~
  cd code/git/
  git clone git@github.com:cpicanco/cpicanco.github.io.git
  cd cpicanco.github.io
  bundle install

  # the repository
  git clone https://github.com/cpicanco/cpicanco.github.io.git

  # grunt dependencies
  cd cpicanco.github.io

# misc

  # update github-pages dependencies
  bundle update

  # serve github page
  bundle exec jekyll serve
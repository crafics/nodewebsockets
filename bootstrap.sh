#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y vim
sudo apt-get install -y curl
sudo apt-get install -y git-core

sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org

sudo npm update -g npm

sudo npm install -g bower
sudo npm install -g grunt-cli
sudo npm install -g yo
sudo npm install -g generator-meanjs

cd /var/www
git clone https://github.com/crafics/nodewebsockets.git



#grunt
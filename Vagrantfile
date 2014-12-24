# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "debian-wheezy72-x64-vbox43"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "./", "/var/www", :mount_options => ["dmode=777","fmode=666"]
end

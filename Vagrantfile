Vagrant.configure("2") do |config|
  config.vm.box = "precise32"
  # config.vm.provision :shell, :path => "bootstrap.sh"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.network :forwarded_port, guest: 80,   host: 8080
  config.vm.network :forwarded_port, guest: 3306, host: 8889
  config.vm.network :forwarded_port, guest: 5432, host: 5433
  config.vm.synced_folder "./", "/var/www", :mount_options => ["dmode=777","fmode=777"]
  config.vm.host_name = "vagrant"
end
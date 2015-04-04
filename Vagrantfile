VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty32"
  config.vm.provision "shell", privileged: false,  path: "Vagrantprovision.sh"
  config.vm.network "forwarded_port", guest: 80, host: 8080
end


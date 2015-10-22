angular.module('logintrest', [])
    .controller('FormController', function(){

      var vm = this;

      //vm.username = "John Harvard";

      vm.logins = [];

      vm.login = function(){
        console.log("loggin in");

        // Push into username array
        vm.logins.push({username: vm.username, password: vm.password, time: new Date()});
        console.log(vm.logins);

        // Empty values
        vm.username = "";
        vm.password = "";
      };

      vm.logout = function(key){
        console.log(key);
        vm.logins.splice(key, 1);
        console.log(vm.logins);
      };

    });



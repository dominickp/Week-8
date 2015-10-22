describe('FormController', function(){



  //angular.mock.module
  beforeEach(module('logintrest'));


  var formController;

  //angular.mock.inject
  beforeEach(angular.mock.inject(function($controller){
    formController = $controller('FormController');
  }));

  it('should clear the values of username and password', function(){
    formController.username = 'something';
    formController.password = 'something';

    formController.login();

    expect(formController.username).toBe('');
    expect(formController.password).toBe('');
  });

  it('should add the username and time to the logins array', function(){
    var originalLoginCount = formController.logins.length;

    formController.username = 'hello';
    formController.password = 'dolly';

    formController.login();

    expect(formController.logins.length).toBe(originalLoginCount+1);

  });

});

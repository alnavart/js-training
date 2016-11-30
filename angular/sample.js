var rumbo = angular.module('rumbo', []).run(function ($rootScope, $rootElement) {

    $rootScope.names = ['jose', 'pepe', 'pepe', 'francisco'];

    $rootScope.person = {
        name: 'Pedro',
        surname: 'Picapiedra',
        age: 50
    };

    setTimeout(() => {
        $rootScope.person.name = 'Paco';
        console.log('Pacoooo')
    }, 5000);
});

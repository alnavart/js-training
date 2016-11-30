var rumbo = angular.module('clickapp', []).run(function ($rootScope, $rootElement) {

    $rootScope.clicks = [];

    $rootScope.addClick = (event) => {
        $rootScope.clicks.push({x: event.clientX, y:event.clientY, date:new Date(event.timeStamp * 1000)});
        console.log('click ', event);
    };
});

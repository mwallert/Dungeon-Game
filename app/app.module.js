(function () {
  'use strict';

  angular.module('dungeonApp', ['ui.router'])

    .config(config);

    function config($stateProvider, $urlRouterProvider){
      /**
       * Default state
       */
      $urlRouterProvider.otherwise('/home');

      /**
       * State provider
       */

      // TODO: Use ui-router resolve function to initialize dungeon. Will change states when the user navigates certain areas in the dungeon.
      // TODO: Make a child state for individual dungeon maps.
      $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: 'app/states/home.html',
          controller: 'homeController',
          controllerAs: 'homeCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'app/states/login.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/states/signup.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
        })
        .state('map', {
           url: '/:mapId',
           templateUrl: 'app/states/map.html',
           controller: 'mapController',
           controllerAs: 'mapCtrl'
        });
    }
}());

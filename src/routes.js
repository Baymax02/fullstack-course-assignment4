(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/categories.template.html',
      controller: 'CategoriesController as menuList',
      resolve: {
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menu/templates/items.template.html',
      controller: 'ItemsController as menuList',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }
        ]
      }
    });

  }
})();

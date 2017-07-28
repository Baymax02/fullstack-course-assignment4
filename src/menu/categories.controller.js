(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories)
  {
    var menuList = this;
    menuList.categories = categories;
  }
})();

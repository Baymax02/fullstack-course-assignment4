(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController',ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items)
  {
    var menuList = this;
    menuList.items = items.menu_items;
  }
})();

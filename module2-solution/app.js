(function(){

'use strict';

angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

    var toBuy = this;

      toBuy.items = ShoppingListCheckOffService.getItemsList();

      toBuy.markAsBrought = function(itemIndex){
        ShoppingListCheckOffService.moveToBroughtList(itemIndex);
      };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){

  var alrdyBrought = this;

    alrdyBrought.items = ShoppingListCheckOffService.ShowBroughtList();
};

function ShoppingListCheckOffService(){

  var service = this;

  var toBuyList = [];
  var toBroughtList = [];

  var item1 = {
    name: 'Sugar',
    quantity : '1 kg'
  };

  var item2 = {
    name: 'salt',
    quantity : '500 grms'
  };

  var item3 = {
    name: 'Rice',
    quantity : '5 kg'
  };

  var item4 = {
    name: 'Coffee',
    quantity : '250 grms'
  };

  var item5 = {
    name: 'Jam',
    quantity : '1 bottle'
  };

toBuyList.push(item1);
toBuyList.push(item2);
toBuyList.push(item3);
toBuyList.push(item4);
toBuyList.push(item5);

  service.getItemsList = function() {
      return toBuyList;
  };


  service.moveToBroughtList = function(itemIndex){

      // add to bough Array from toBuy Array
      toBroughtList.push(toBuyList[itemIndex]);

      // remove from buy Array
      toBuyList.splice(itemIndex, 1);

  };

  service.ShowBroughtList = function(){
    return toBroughtList;
  };
}


})();

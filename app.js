(function(){

  'use strict';
  angular.module('ShopingListCheckoff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  function ShoppingListCheckOffService(){

    var service=this;
    //list of shopping items

    var tobuy=[{
      name:'cookies',
      quantity:10
    },
    {
      name:'chips',
      quantity:20
    },
    {
      name:'peptol',
      quantity:30
    },
    {
      name:'drinks',
      quantity:10
    },
    {
      name:'burger',
      quantity:5
    }];

    var bought=[];

    service.addToBought=function(itemindex){




      bought.push(tobuy[itemindex]);
      tobuy.splice(itemindex,1);

    }

    service.getAlBtItems=function(){

      return bought;

    }


    service.getToBuyItems=function(){

      return tobuy;

    }



  }


  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController( ShoppingListCheckOffService){
    var albought=this;
    albought.items=ShoppingListCheckOffService.getAlBtItems();
    albought.isEmpty=function(){
      if(ShoppingListCheckOffService.getAlBtItems().length==0){
        return true
      }
    }


  }


  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController( ShoppingListCheckOffService){
    var tobuy=this;

    tobuy.isEmpty=function(){
      if(ShoppingListCheckOffService.getToBuyItems().length==0){
        return true;
      }else{
        return false;
      }
    };

    tobuy.addToBought=function(itemindex){

      ShoppingListCheckOffService.addToBought(itemindex);


    };
    tobuy.items=ShoppingListCheckOffService.getToBuyItems();





  }



})();

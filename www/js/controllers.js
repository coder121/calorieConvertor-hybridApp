angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('CalorieCtrl', function($scope) {
    
    $scope.foodCalories=[
  {
    "food": "Pizza (Cheese-Slice)",
    "calories": 272,
    "src": "http://previews.123rf.com/images/stefanov764/stefanov7641010/stefanov764101000133/8079898-piece-of-pizza--Stock-Photo-pizza-slice-cheese.jpg"
  },
  {
    "food": "Coca-Cola",
    "calories": 90,
    "src": "http://daily.jstor.org/wp-content/uploads/2015/04/Coke_Branding_1050x700-1050x700.jpg"
  },
  {
    "food": "Coffe (Mocha)",
    "calories": 60,
    "src": "http://i.imgur.com/Vvx45iW.jpg"
  },
  {
    "food": "Taco",
    "calories": 156,
    "src": "http://www.adweek.com/prnewser/wp-content/uploads/sites/8/2013/08/pdp_fresco_crunchy_taco.png"
  },{
    "food":"Waffle",
    "calories": 82,
    "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg"
  },{
    "food":"French Fries",
    "calories": 365,
    "src": "http://www.texaschickenmalaysia.com/menu/sides-french-fries.png"
  },{
    "food":"Chicken Biryani",
    "calories": 548,
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg"
  }
  
];
   $scope.calories={};
    
   $scope.convert=function(){
       $scope.indiviualCalorie=[];
        console.log($scope.calories);
       for(var i=0;i<$scope.foodCalories.length;i++){
           var item=$scope.foodCalories[i];
           var jsonItem={};
           var totalCalories=$scope.calories['total']/item["calories"];
           jsonItem["food"]=item["food"];
           jsonItem["src"]=item["src"];
           jsonItem["calories"]=Math.round(totalCalories);
           $scope.indiviualCalorie.push(jsonItem);
       }
       console.log("Calculated:", $scope.indiviualCalorie);

        
    };
    
     
    
})
.controller('SearchCtrl',function($scope,$http,$ionicModal,$timeout,$cordovaToast){
    
   $scope.search ={};
    $scope.searchItems=[];

  $scope.searchItem = function() {
     var q= $scope.search['q'];
     $http.get("http://api.nal.usda.gov/ndb/search/?format=json&q="+q+"&max=50&offset=0&api_key=qZGlx5pbXaZtrAu9j5T3nHoXRiF6HhoTmKaqrUGI ").then(function (res){
            $scope.response = res.data;
//         console.log( $scope.response['list']);
//            var ndbno=$scope.response['item'](0)['ndbno'];
           $scope.searchItems=$scope.response['list']['item']
//           console.log($scope.searchItems);
        },function myError(response) {
        
         $cordovaToast.show('Cannot find the item.', 'long', 'center').then(function(success) {
            console.log("The toast was shown");
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    });
     /* //console.log($scope.username)
       $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
            console.log("The toast was shown");
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });*/
     
  };
    $scope.getItem=function(dish){
        var ndbno=dish['ndbno'];
          $http.get("http://api.nal.usda.gov/ndb/reports/?ndbno="+ndbno+"&type=f&format=json&api_key=DEMO_KEY").then(function (res){
            $scope.response = res.data;
//              console.log($scope.response);
              $scope.itemDetail($scope.response);
         });
             
    }
    
     $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/itemDetails.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.itemDetail = function(data) {
    $scope.modal.show();
      console.log(data);
      $scope.name=data['report']['food']['name'];
      $scope.measures=data['report']['food']['nutrients'][1]['measures'];
     
       console.log($scope.measures)
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    

    
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});

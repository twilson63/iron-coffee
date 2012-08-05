function assertEqual(a, b) {
  if (a === b) {
    console.log('GREEN LIGHT....');
  } else {
    console.log('RED LIGHT....');
  }
}

function FindCtrl($scope, $http) {
  $scope.country = { name: 'USA' }; 
  $scope.state = { name: 'SC' };
  $scope.city = { name: 'Charleston' };
  
  $http.get('/country.json').success(function(data){
    $scope.countries = data;
  });

  $scope.countryChanged = function() {
    $http.get('/states?country=' + $scope.country.name).success(function(data){
      $scope.states = data;
    });
    $scope.states = ['SC', 'GA'];
  }
  $scope.stateChanged = function() {
    $scope.cities = ['Charleston', 'Atlanta'];    
  }
}

// Tests
function findControllerTest() {
  var scope = {}, http = {
    get: function() {
      return {
        success: function(cb) { 
          cb([{ name:"USA"},{name:"UK"}]);
        }
      }
    }
  }

  FindCtrl(scope, http);
  console.log('Test Country');
  assertEqual(scope.country, 'USA');
  console.log('Test Countries');
  assertEqual(scope.countries.length, 2);
}

// function CountryCtrl($scope, $http) {
//   $scope.foo = "Where are you now? ";
//   $scope.mylocation = { country: 'USA', state: 'South Carolina', city: 'Charleston'}
// 
//   $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
//   $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//   $scope.change = function(){
//     // http request....
//     $scope.results = [{value: "Foo"}, {value: "bar"}]
//     if($scope.mylocation.country === 'UK') {
//       $scope.states = ['Scotland', 'England', 'Wales'];
//       $scope.cities = ['London', 'York', 'Jersey'];        
//     } else {
//       $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
//       $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//     }
//   }
//   $scope.stateChanged = function(){
//     console.log('State Changed...');
//     if($scope.mylocation.state === 'Scotland') {
//       $scope.cities = ['Jersey'];
//     } else if ($scope.mylocation.country === 'USA') {
//       $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
//     } else {
//       $scope.cities = ['London', 'York', 'Jersey'];  
//     }
//   }
//   $scope.cityChanged = function(){
//     console.log('City Changed...')
//   }
//   $scope.clickFoo = function(){
//     $scope.foo = "Bar..."
//   }
// }
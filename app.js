// Модель
var model =[{section: "allSectios", permission: {chechOne: false, chechTwo: false, chechThree: false}},
{section: "calendar", permission: {view: false, edit: false, remove: false}},
{section: "profile", permission: {view: false, edit: false, remove: false}},
{section: "property", permission: {view: false, edit: false, remove: false}},
{section: "contacts", permission: {view: false, edit: false, remove: false}}];


// Модуль
var PermissionApp = angular.module("PermissionApp", []);


// Контролер
PermissionApp.controller("CheckboxCtrl", ['$scope',  function ($scope) {
    
    $scope.CheckboxData = model;
    $scope.all = false;
    
    //Check All Activation
    $scope.changeHandler = function() {
    
        for (var i = 1; i < $scope.CheckboxData.length; i++){
            if ($scope.CheckboxData[i].permission.view == true & $scope.CheckboxData[i].permission.edit == true & $scope.CheckboxData[i].permission.remove == true){
                $scope.all = true;
            }else{$scope.all = false;}
        }
    };
}]);
     













            

            // Behavior
            //$scope.clickHandler = function() {
            //$localStorage.key = value;
            //Example
            //Eg: $localstorage.login= true;
            //}
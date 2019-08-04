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
    
    $scope.data = model;

    //Check All Activation
    for (var i = 1; i < arr.length; i++){
        if ($scope.Model[i].permission = {
        view : true,
        edit : true,
        remove : true,
        }){
            //Check All 2 and 3 Activation !!!; $scope.checked = true;
        };
    }
}]);















            

            // Behavior
            //$scope.clickHandler = function() {
            //$localStorage.key = value;
            //Example
            //Eg: $localstorage.login= true;
            //}
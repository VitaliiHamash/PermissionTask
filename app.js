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
    $scope.CkeckAll = false;
    
    //Check All Activation
    /*$scope.changeHandler = function() {
        for (var i = 1; i < CheckboxData.length; i++){
            if (CheckboxData[i].permission.view == "true" & CheckboxData[i].permission.edit == "true" & CheckboxData[i].permission.remove == "true"){
                $scope.CkeckAll = true;
            }
        }
    };*/

    $scope.changeHandler = function() {
        if (CheckboxData[1].permission.view == "true")
        {$scope.CkeckAll = true;};
    };



}]);
            
            // Behavior
            //$scope.clickHandler = function() {
            //$localStorage.key = value;
            //Example
            //Eg: $localstorage.login= true;
            //}
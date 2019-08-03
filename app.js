// Модель
var model = "AngularApp It's working";


// We must create new model!!!
// var model = Permission;???
// var Permission ={};???

// Модуль
var PermissionApp = angular.module("PermissionApp", []);


// Контролер
PermissionApp.controller("PermissionAppCtrl", function ($scope) {
    $scope.test = model;
});
            // Behavior
            //$scope.clickHandler = function() {
            //$localStorage.key = value;
            //Example
            //Eg: $localstorage.login= true;
            //}
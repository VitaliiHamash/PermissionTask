// Модель

var model = "It's working";


// Модуль

var PermissionApp = angular.module("PermissionApp", []);


// Контролер

PermissionApp.controller("PermissionAppCtrl", function ($scope) {
    $scope.test = model;
});
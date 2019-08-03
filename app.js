// Модель
var model = "AngularApp It's working";

// We must create new model!!!
/*var model =[{section: "allSectios", permission: {chechOne: true, chechTwo: true, chechThree: false},
                {section: "calendar", permission: {view: true, edit: true, remove: false}},
                {section: "profile", permission: {view: true, edit: true, remove: false}},
                {section: "property", permission: {view: true, edit: true, remove: false}},
                {section: "contacts", permission: {view: true, edit: true, remove: false}}];
*/

// Модуль
var PermissionApp = angular.module("PermissionApp", []);


// Контролер
PermissionApp.controller("PermissionAppCtrl", function ($scope) {
    $scope.data = model;
});
            
        














            

            // Behavior
            //$scope.clickHandler = function() {
            //$localStorage.key = value;
            //Example
            //Eg: $localstorage.login= true;
            //}
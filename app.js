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
    
    //view
    $scope.CheckboxData = model;
    $scope.CkeckAll = false;
    
    //change model AllOne
    $scope.changeAllOne = function(){
            if ($scope.CheckboxData[0].permission.chechOne == true){
                    $scope.CheckboxData[1].permission.view = true;
                    $scope.CheckboxData[2].permission.view = true;
                    $scope.CheckboxData[3].permission.view = true;
                    $scope.CheckboxData[4].permission.view = true;
            }
            else{   $scope.CheckboxData[1].permission.view = false;
                    $scope.CheckboxData[2].permission.view = false;
                    $scope.CheckboxData[3].permission.view = false;
                    $scope.CheckboxData[4].permission.view = false;
                }
            }

    //change model AllTwo
    $scope.changeAllTwo = function(){
            if ($scope.CheckboxData[0].permission.chechTwo == true){
                    $scope.CheckboxData[1].permission.edit = true;
                    $scope.CheckboxData[2].permission.edit = true;
                    $scope.CheckboxData[3].permission.edit = true;
                    $scope.CheckboxData[4].permission.edit = true;
            }
            else{   $scope.CheckboxData[1].permission.edit = false;
                    $scope.CheckboxData[2].permission.edit = false;
                    $scope.CheckboxData[3].permission.edit = false;
                    $scope.CheckboxData[4].permission.edit = false;
                }
            }


    //change model AllThree
    $scope.changeAllThree = function(){
        if ($scope.CheckboxData[0].permission.chechThree == true){
                $scope.CheckboxData[1].permission.remove = true;
                $scope.CheckboxData[2].permission.remove = true;
                $scope.CheckboxData[3].permission.remove = true;
                $scope.CheckboxData[4].permission.remove = true;
        }
        else{   $scope.CheckboxData[1].permission.remove = false;
                $scope.CheckboxData[2].permission.remove = false;
                $scope.CheckboxData[3].permission.remove = false;
                $scope.CheckboxData[4].permission.remove = false;
            }
    }


    //Check All Activation
    $scope.changeHandler = function() {

        for (var i = 1; i < $scope.CheckboxData.length; i++){
            if ($scope.CheckboxData[i].permission.view == true && $scope.CheckboxData[i].permission.edit == true && $scope.CheckboxData[i].permission.remove == true){
                $scope.CkeckAll = true;
            }
        }
    };
    
    
    
    //Save data to LocalStorage
     $scope.clickHandler = function(){
        localStorage.setItem("SaveData", JSON.stringify($scope.CheckboxData));    
    }
    


}]);
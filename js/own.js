/**
 * Created By Dibyanshu.
 * User: dibyanshu
 * Date: 4/10/13
 * Time: 2:01 PM
 */
$(document).ready(function(){
});
var myApp = angular.module('myApp',[]);
myApp.factory('Data', function(){
    return {msg:'Return data from service.'};
});
myApp.filter('reverse',function(){
    return function(text){
        return text.split("").reverse().join("");
    }
})
function FirstCtrl($scope, Data){
    //$scope.data = {msg:"hello"};
    $scope.data = Data;
}
function SecondCtrl($scope, Data){
    //$scope.data = {msg:"hello"};
    $scope.data = Data;
    $scope.reverseMsg=function(msg){
        return msg.split("").reverse().join("");
    };
}

/**
 * Created by tomer on 12/2/15.
 */
var app = angular.module('ShargilHomoApp', ['ngMaterial']).config(function () {
});

app.controller('AppController', function ($mdSidenav, $scope, $mdDialog) {
    $scope.items = [
        {id: "", title: "One", info: "Allah", image: "http://efdreams.com/data_images/dreams/shirt/shirt-08.jpg"},
        {id: "", title: "One", info: "Allah", image: "http://efdreams.com/data_images/dreams/shirt/shirt-08.jpg"},
        {id: "", title: "One", info: "Allah", image: "http://efdreams.com/data_images/dreams/shirt/shirt-08.jpg"},
        {id: "", title: "One", info: "Allah", image: "http://efdreams.com/data_images/dreams/shirt/shirt-08.jpg"},
        {id: "", title: "One", info: "Allah", image: "http://efdreams.com/data_images/dreams/shirt/shirt-08.jpg"}
    ]
});

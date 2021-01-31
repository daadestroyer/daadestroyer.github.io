const URL = "https://covid19.mathdro.id/api"

let app = angular.module('MyApp', [])

app.controller('MyController', ($scope, $http) => {
    // this is controller
    $scope.title = "Stay Home Stay Safe";
    console.log('app loaded')

    // calling API
    $http.get(URL).then(
        (response) => {
            // success
            console.log(response.data);
            $scope.all_data = response.data;


        }, (error) => {
            // failure
            console.log(error);
        });

    // get country data
    $scope.getCountryData = (country) => {
        let Country = $scope.country;
        if(Country == '' || Country==null){
            $scope.c_data=undefined;
            return;
        }
        $http.get(`${URL}/countries/${Country}`).then(
            (response)=>{
                console.log(response.data);
                $scope.c_data = response.data;
            },
            (error)=>{
                    console.log(error)
            });     
    };
});

App.controller('rankCtl', ['$scope', '$location', function($scope, $location) {
    $('#bar-search').show(0);
    clearBDShare();
    $scope.full_rank = {
        name: "sss",
        data: []
    };
    $scope.isDetail = true;
    $scope.languages = [];
    $scope.getRankClass = function(index) {
        if (index == 0) {
            return "rank1";
        } else if (index == 1) {
            return "rank2";
        } else if (index == 2) {
            return "rank3"
        } else {
            return "";
        }
    };
    var fake_user = {
        name: 'XXX',
        // gravater: "https://avatars.githubusercontent.com/u/2572987?v=3",
        followers: 322,
        stars: 3222,
        repos: 222,
        location: "China",
        language: "Javascript",
        score: 233,
        days: 233
    }
    for (var i=0, l=10; i<l; i++) {
        $scope.full_rank.data.push(fake_user);
    }
    for (var i=0, l=6; i<l; i++) {
        var temp = {};
        temp.name = "name";
        temp.data = [];
        for (var j=0, l=10;j<l;j++) {
            temp.data.push(fake_user);
        }
        $scope.languages.push(temp);
    }
}]);

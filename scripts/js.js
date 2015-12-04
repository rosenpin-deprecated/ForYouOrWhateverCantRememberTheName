/**
 * Created by tomer on 12/2/15.
 */
var app = angular.module('ShargilHomoApp', ['ngMaterial']).config(function () {
});

app.controller('AppController', function ($mdSidenav, $scope, $mdDialog, $mdBottomSheet) {
    $scope.storeClicked = "Test";
    $scope.items = [
        {
            id: "",
            title: "lorem ipsum",
            info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "http://images.fibre2fashion.com/MemberResources/LeadResources/1/2012/12/Seller/12133564/Images/12133564_0_201212131256490000000.jpg"
        },
        {
            id: "",
            title: "lorem ipsum",
            info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "http://ep.yimg.com/ay/yhst-20429756162183/vertx-men-s-phantom-lt-tactical-pants-new-lower-price-8.gif"
        },
        {
            id: "",
            title: "lorem ipsum",
            info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "http://static1.gamespot.com/uploads/original/1534/15343359/2823737-6174472236-26119.jpg"
        },
        {
            id: "",
            title: "lorem ipsum",
            info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "http://techmoran.com/wp-content/uploads/2014/05/lg-tv.jpg"
        },
        {
            id: "",
            title: "lorem ipsum",
            info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://intobolivian.files.wordpress.com/2013/05/big_boy_black_dildo_3.jpg"
        }
    ];
    $scope.notifications = [
        {
            icon: "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0017/0103/brand.gif?itok=4RtFw22X",
            title: "A crazy discount!!",
            store: 'DominosPizza'
        },
        {
            icon: "http://dtkmen.com/wp-content/uploads/2015/05/zara-logo1.jpg",
            title: "Discount on all the shirts!",
            store: 'ZARA'
        },
        {
            icon: "http://file.answcdn.com/answ-cld/image/upload/v1/tk/brand_image/cd4fe6a0/14c2f8f0a580c4c93ec51864c5c108e420934096.png",
            title: 'Shargil homo?',
            store: 'Best Buy'
        },
        {
            icon: "https://img.grouponcdn.com/coupons/gVh4LbCsChC8hpw4xccVye/gamestop_com-500x500",
            title: 'Assasins creed is on sale',
            store: 'GameStop '
        }
    ];
});
app.controller('gridListDemoCtrl', function ($scope) {
    this.tiles = buildGridModel({
        icon : "avatar:svg-",
        title: "Store ",
        background: ""
    });
    function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<11; j++) {
            it = angular.extend({},tileTmpl);
            it.icon  = it.icon + (j+1);
            it.title = it.title + (j+1);
            it.span  = { row : 1, col : 1 };
            switch(j+1) {
                case 1:
                    it.background = "red";
                    it.span.row = it.span.col = 2;
                    break;
                case 2: it.background = "green";         break;
                case 3: it.background = "darkBlue";      break;
                case 4:
                    it.background = "blue";
                    it.span.col = 2;
                    break;
                case 5:
                    it.background = "yellow";
                    it.span.row = it.span.col = 2;
                    break;
                case 6: it.background = "pink";          break;
                case 7: it.background = "darkBlue";      break;
                case 8: it.background = "purple";        break;
                case 9: it.background = "deepBlue";      break;
                case 10: it.background = "lightPurple";  break;
                case 11: it.background = "yellow";       break;
            }
            results.push(it);
        }
        return results;
    }

});

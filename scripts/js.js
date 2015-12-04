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
    $scope.stores = [
        {
            icon: "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0017/0103/brand.gif?itok=4RtFw22X",
            store: 'DominosPizza'
        },
        {
            icon: "http://dtkmen.com/wp-content/uploads/2015/05/zara-logo1.jpg",
            store: 'ZARA'
        },
        {
            icon: "http://file.answcdn.com/answ-cld/image/upload/v1/tk/brand_image/cd4fe6a0/14c2f8f0a580c4c93ec51864c5c108e420934096.png",
            store: 'Best Buy'
        },
        {
            icon: "https://img.grouponcdn.com/coupons/gVh4LbCsChC8hpw4xccVye/gamestop_com-500x500",
            store: 'GameStop '
        },
        {
            icon: "http://walmart.flyerify.com/uploads/companies/thumb/234/walmart.png",
            store: "Walmart"
        },
        {
            icon: "http://s1.reutersmedia.net/resources/r/?m=02&d=20130321&t=2&i=714807374&w=644&fh=&fw=&ll=&pl=&sq=&r=CBRE92K0KBA00",
            store: "H&M"
        },
        {
            icon:"http://www.7star.co.il/uploads/store_img_apMUrIrbjtBJpgIY.jpg",
            store: "סופרפארם"
        }

    ];
});

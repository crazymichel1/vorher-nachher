// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('vorher-nachher', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    // make points when click at image
    $count_points_img1 = 1;
    $('#img1').click(function(e) { //TODO: touch statt click
        $('#img1').parent().append('<div id="punkt'+$count_points_img1+'" class="punkt"></div>');
        $p = $('#punkt'+$count_points_img1);
        $cw = $p.width() / 2;
        $ch = $p.height() / 2;
        $p.offset({top: e.pageY-$ch, left: e.pageX-$cw});
        console.log('test'); // TODO: x/y-koordinaten des img ausgeben (später übergabe an opencv)
        $count_points_img1 += 1;
        
    });
  });
})


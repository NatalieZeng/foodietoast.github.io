(function () {
  'use strict';

  function onPositionRecieved(position){
    console.log(position);
  }
  function locationNotReceived(positionError){
  }
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onPositionRecieved,locationNotReceived,{timeout:0});

    var watch = navigator.geolocation.watchPosition(onPositionRecieved,locationNotReceived);
    navigator.geolocation.clearWatch(watch);
  }
}());

// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.261216,127.213636);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"우리집"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "경기도 용인시 처인구 백옥대로 1414번길 5"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }


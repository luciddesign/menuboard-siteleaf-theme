function initLocalClock(){for(var e=new Date,t=e.getMinutes(),a=e.getHours(),n=[{hand:"animicon-hour",angle:30*a+t/2},{hand:"animicon-minute",angle:6*t}],r=0;r<n.length;r++)for(var c=document.querySelectorAll("."+n[r].hand),i=0;i<c.length;i++)c[i].style.webkitTransform="rotateZ("+n[r].angle+"deg)",c[i].style.transform="rotateZ("+n[r].angle+"deg)"}function weather(){$.ajax({url:"http://api.wunderground.com/api/4c85b3596d692c6a/conditions/q/NZ/Nelson.json",dataType:"jsonp",success:function(e){var t=e.current_observation.temp_c,a="",n="";switch(e.current_observation.icon){case"clear":case"sunny":n="wi-night-clear",a="wi-day-sunny";break;case"partlycloudy":case"partlysunny":case"mostlysunny":a="wi-day-sunny-overcast",n="wi-night-alt-cloudy";break;case"fog":case"hazy":a="wi-day-fog",n="wi-night-fog";break;case"cloudy":case"mostlycloudy":a="wi-cloudy",n="wi-night-alt-cloudy";break;case"rain":a="wi-rain-mix",n="wi-night-alt-rain-mix";break;case"chancerain":a="wi-showers",n="wi-night-alt-showers";break;case"tstorms":a="wi-lightning",n="wi-night-alt-lightning";break;case"chancetstorms":a="wi-storm-showers",n="wi-night-alt-storm-showers";break;default:a="wi-day-sunny",n="wi-night-clear"}$(".weather .weather-icon").html('<i class="wi '+((new Date).getHours()>18?n:a)+'"></i>'),$(".weather .temp").html(t+"&deg;")}})}function meetups(){var e="https://api.meetup.com/2/events?callback=?&key=207763705c19696342e3c3c74225425&sign=true&photo-host=public&group_urlname=bridgestreetcollective&page=2",t="",a="";$.getJSON(e,function(e){$.each(e.results,function(e,n){a=moment(n.time).format("D MMMM"),time=moment(n.time).format("h:mm"),t+="<h4>"+n.name+"</h4><p>"+time+" on "+a.replace(" ","&nbsp;")+"</p>"}),$(".meetups").html(t)})}function clock(){var e=new Date,t=e.getHours(),a=e.getMinutes();$(".time").html(t+":"+((10>a?"0":"")+a))}function getTrack(){var e="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bridge_st&api_key=b69676d8cc6853bda7865b2080b494be&format=json";$.getJSON(e,function(e){if(e.recenttracks){var t=e.recenttracks.track[0].name,a=e.recenttracks.track[0].artist["#text"];$(".track").html(t),$(".artist").html(a)}})}$(document).ready(function(){getTrack(),setInterval(getTrack,5e3),weather(),setInterval(weather,9e5),meetups(),setInterval(meetups,3e5),clock(),setInterval(clock,1e3),initLocalClock(),$(".menu-columns").masonry({itemSelector:".menu-item",columnWidth:".menu-item"})});
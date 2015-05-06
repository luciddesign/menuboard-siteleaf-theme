!function($,t,e,a){"use strict";function i(t,e){this.element=t,this.options=$.extend({},n,e),this._defaults=n,this._name=r,this.filteredResults=[],this.init()}var r="lastfmNowPlaying",n={};i.prototype.init=function(){this.getData(),this.sortData()},i.prototype.getData=function(){var t=this;$(this.options.members).each(function(){var e=this;$.ajax({url:"http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+e+"&limit=1&nowplaying=true&api_key="+t.options.apiKey+"&format=json",dataType:"json"}).done(function(e){var a=e.recenttracks.track;t.filterData(a)})})},i.prototype.filterData=function(t){var e=this;$(t).each(function(){var t=$(this).attr("@attr");t&&e.addDateStamp(this),e.filteredResults.push(this)})},i.prototype.sortData=function(){var t=this;$(e).ajaxStop(function(){function e(t,e){return new Date(parseInt(t.date.uts,10)).getTime()-new Date(parseInt(e.date.uts,10)).getTime()}t.filteredResults=t.filteredResults.sort(e),t.filteredResults=t.filteredResults[t.filteredResults.length-1],t.renderTemplate(t.prepareTemplateData())})},i.prototype.addDateStamp=function(t){t.date={},t.date.uts=Date.now().toString()},i.prototype.prepareTemplateData=function(){var t=this,e=t.filteredResults,a={artist:e.artist["#text"],album:e.album["#text"],title:e.name,image:{small:e.image[0]["#text"],medium:e.image[1]["#text"],large:e.image[2]["#text"],extralarge:e.image[3]["#text"]},url:e.url};return a},i.prototype.renderTemplate=function(t){var e=this,a,i,r=$(e.element).html();for(i in t)if(t.hasOwnProperty(i))if("image"===i)for(i in t.image)t.image.hasOwnProperty(i)&&(a="{ track.image."+i+" }",r=r.replace(a,t.image[i]));else a="{ track."+i+" }",r=r.replace(a,t[i]);$(e.element).after(r),e.cleanTemplate()},i.prototype.cleanTemplate=function(){var t=this,e=$(t.element).next().find("img");e.each(function(){var t=$(this).attr("src");t.length||$(this).remove()})},$.fn[r]=function(t){return this.each(function(){$.data(this,"plugin_"+r)||$.data(this,"plugin_"+r,new i(this,t))})}}(jQuery,window,document);
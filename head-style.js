'use strict'
var path = window.location.pathname;
var page = path.split("/").pop().replace('.html','');

var index = $('#indexEnlace');
var tierList = $('#tierlistEnlace');

if (page == 'tierList'){
    index.removeClass('active');
    tierList.addClass('active')
}

console.log(page)
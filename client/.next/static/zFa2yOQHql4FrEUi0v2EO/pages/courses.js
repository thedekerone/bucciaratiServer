(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{H40s:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses",function(){var t=r("MHXu");return{page:t.default||t}}])},MHXu:function(t,n,r){"use strict";r.r(n);var e=r("rt45"),u=r("q1tI"),c=r.n(u),i=r("vbcS"),o=r("lTCR"),a=r.n(o),d=c.a.createElement;function l(){var t=Object(e.a)(["\n\t\t\t{\n\t\t\t\tgetProducts {\n\t\t\t\t\t_id\n\t\t\t\t\ttitle\n\t\t\t\t\timage\n\t\t\t\t\tprice\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return l=function(){return t},t}n.default=function(){return d(i.a,{query:a()(l())},function(t){var n=t.loading,r=t.error,e=t.data;return n?d("p",null,"Loading..."):r?d("p",null,"Error :("):e.getProducts.map(function(t){var n=t._id,r=t.title,e=t.price;return d("div",{key:n},d("p",null,"".concat(r," by ").concat(e)))})})}}},[["H40s",1,0]]]);
"use strict";!function(e){e("p.email").on("click",function(){window.location="mailto:me@changalberto.com"}),e(".js-contact").on("click",function(a){a.preventDefault(),e("html, body").animate({scrollTop:e(".contact").offset().top},500,"linear")}),e.scrollUp({scrollImg:"true"});var a=new ScrollReveal({reset:!0,mobile:!0,scale:.98});a.reveal("h3.label",{duration:300,delay:565,scale:1}),a.reveal("h1",{duration:700,delay:200}),a.reveal("blockquote",{duration:500}),a.reveal("blockquote em",{duration:300,delay:200}),a.reveal("blockquote i",{duration:300,delay:200}),a.reveal("blockquote span",{duration:300,delay:200}),a.reveal(".panel",{duration:500,scale:1.05}),a.reveal("h4, h5",{duration:300,delay:400,scale:1.01}),a.reveal(".avatar",{duration:300,delay:500,scale:1.05}),a.reveal("address",{duration:300,delay:100}),a.reveal("time",{duration:300,delay:100}),a.reveal(".panel p",{duration:300,delay:100}),a.reveal(".panel li",{duration:300,delay:100}),a.reveal(".skill .level",{duration:400,delay:200,scale:1.05}),a.reveal("footer",{duration:500}),a.reveal("footer .email",{duration:300,delay:200,scale:.98}),a.reveal("footer .footer-links",{duration:300,delay:300,scale:1.05});var l=0,o={startPosition:0,endPosition:2e3},t={start:new e.Color("#de0000"),end:new e.Color("#fff")};e(document).scroll(function(){if(l=e(this).scrollTop(),l>=o.startPosition&&l<=o.endPosition){var a=l/(o.endPosition-o.startPosition),r=t.start.red()+(t.end.red()-t.start.red())*a,n=t.start.green()+(t.end.green()-t.start.green())*a,i=t.start.blue()+(t.end.blue()-t.start.blue())*a,d=new e.Color(r,n,i);e("h1 a").animate({color:d},0)}else if(l>o.endPosition)e("h1 a").animate({color:t.end},0);else{if(!(l<o.startPosition))return;e("h1 a").animate({color:t.start},0)}})}(jQuery);
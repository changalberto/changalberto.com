"use strict";!function(e){e("p.email").on("click",function(){window.location="mailto:me@changalberto.com"}),e.scrollUp({scrollImg:"true"});var a=new ScrollReveal({reset:!0});a.reveal("h3.label",{duration:300,delay:550}),a.reveal("h1",{duration:700,delay:200}),a.reveal("blockquote",{duration:500}),a.reveal("blockquote em",{duration:300,delay:200}),a.reveal("blockquote i",{duration:300,delay:300}),a.reveal("blockquote span",{duration:300,delay:400}),a.reveal(".panel",{duration:500}),a.reveal("h4, h5",{duration:300,delay:200}),a.reveal(".avatar",{duration:300,delay:500}),a.reveal("address",{duration:300,delay:100}),a.reveal("time",{duration:300,delay:100}),a.reveal(".panel p",{duration:300,delay:100}),a.reveal(".panel li",{duration:300,delay:100}),a.reveal("footer",{duration:500}),a.reveal("footer .email",{duration:300,delay:100}),a.reveal("footer .footer-links",{duration:300,delay:100}),a.reveal(".samurai",{duration:600,delay:500});var r=0,o={startPosition:0,endPosition:2e3},t={start:new e.Color("#de0000"),end:new e.Color("#fff")};e(document).scroll(function(){if(r=e(this).scrollTop(),r>=o.startPosition&&r<=o.endPosition){var a=r/(o.endPosition-o.startPosition),l=t.start.red()+(t.end.red()-t.start.red())*a,n=t.start.green()+(t.end.green()-t.start.green())*a,i=t.start.blue()+(t.end.blue()-t.start.blue())*a,d=new e.Color(l,n,i);e("h1 a").animate({color:d},0)}else if(r>o.endPosition)e("h1 a").animate({color:t.end},0);else{if(!(r<o.startPosition))return;e("h1 a").animate({color:t.start},0)}})}(jQuery);
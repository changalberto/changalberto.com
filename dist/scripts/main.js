"use strict";!function(e){e("p.email").on("click",function(){window.location="mailto:me@changalberto.com"});var a=ScrollReveal({reset:!0});a.reveal("h3.label",{duration:300,delay:550}),a.reveal("h1",{duration:700,delay:200}),a.reveal("blockquote",{duration:500}),a.reveal("blockquote em",{duration:300,delay:200}),a.reveal("blockquote i",{duration:300,delay:300}),a.reveal("blockquote span",{duration:300,delay:400}),a.reveal(".panel",{duration:500}),a.reveal("h4, h5",{duration:300,delay:200}),a.reveal(".avatar",{duration:300,delay:500}),a.reveal("address",{duration:300,delay:100}),a.reveal("time",{duration:300,delay:100}),a.reveal(".panel p",{duration:300,delay:100}),a.reveal(".panel li",{duration:300,delay:100}),a.reveal("footer",{duration:500}),a.reveal("footer .email",{duration:300,delay:100}),a.reveal("footer .footer-links",{duration:300,delay:100}),a.reveal(".samurai",{duration:600,delay:500});var l=0,r=0,o=2e3,n=new e.Color("#de0000"),t=new e.Color("#fff");e(document).scroll(function(){if(l=e(this).scrollTop(),l>=r&&o>=l){var a=l/(o-r),d=n.red()+(t.red()-n.red())*a,i=n.green()+(t.green()-n.green())*a,u=n.blue()+(t.blue()-n.blue())*a,v=new e.Color(d,i,u);e("h1 a").animate({color:v},0)}else l>o?e("h1 a").animate({color:t},0):r>l&&e("h1 a").animate({color:n},0)})}(jQuery);

(function(a){if(!a("html").hasClass("is-builder")){var v=function(b){b=a(b).find(".shopItemsModal");a(b).children(".text-modal").empty();a(b).children(".image-modal").empty()},A=function(b){a(b).find(".mbr-gallery-item .item_overlay").on("click",function(e){var c=a(e.target).closest(".mbr-gallery-item");curentItem=c;v(b);e=a(b).find(".shopItemsModal");var f=a(c).find(".sidebar_wraper").clone(),g=a(c).find("img").clone(),c=a(c).find(".onsale").clone();a(e).children(".text-modal").append(f);a(e).children(".image-modal").append(g).append(c);
a(b).find(".shopItemsModal_wraper").css("display","flex")});a(b).find(".close-modal-wrapper, .shopItemsModalBg").on("click",function(){a(b).find(".shopItemsModal_wraper").css("display","none");v(b)})},n=function(b,e,c){b=3>e?a(c).find(".shop-items").children().sort(function(c,b){var f=parseFloat(a(c).attr("data-price")),d=parseFloat(a(b).attr("data-price"));return 1==e?f>d?1:f==d?0:-1:f<d?1:f==d?0:-1}):a(c).find(".shop-items").children();a(c).find(".shop-items").children().remove();for(var f=0;f<
b.length;f++)a(c).find(".shop-items").append(b[f]);A(c)},p=function(b){var e=0;a(b).find(".mbr-gallery-item").each(function(c,b){parseFloat(a(b).attr("data-price"))>e&&(e=parseFloat(a(b).attr("data-price")))});return e},q=function(b){var e=1E6;a(b).find(".mbr-gallery-item").each(function(c,b){parseFloat(a(b).attr("data-price"))<e&&(e=parseFloat(a(b).attr("data-price")))});return e},y=function(b){var e=a(".min-input").val(),c=a(".max-input").val();a(b).find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,
g){parseFloat(a(g).attr("data-price"))>=parseFloat(e)&&parseFloat(a(g).attr("data-price"))<=parseFloat(c)?a(g).removeClass("hided-by-price"):a(g).addClass("hided-by-price")})},z=function(b){var e=a(b).find("input.min-input"),c=a(b).find("input.max-input"),f=a(b).find("div.range-controls"),g=f.find("div.bar"),l=f.find("div.min-toggle"),m=f.find("div.max-toggle"),d=g.innerWidth()-20,h=0,k=d,w=f.offset(),n=w.left,r=e.val(),t=c.val(),u=e.val(),v=c.val(),x=parseInt(a(b).find(".filter-cost").width())-20;
l.mousedown(function(){a(document).on("mousemove",function(c){m.css("z-index",0);l.css("z-index",1);togglePos=Math.round(c.pageX-n)-10;h=0>=togglePos?0:togglePos>=d?d:togglePos;l.css({left:function(a,c){if(h<k)return r=h;r=t;return k}});g.css({"margin-left":function(){return h<k?h:k},width:function(){return h<k?d-(h+(d-k)):0}});a(e).val(Math.floor((p(b)-q(b))/x*r)+parseInt(u));y(b)})});m.mousedown(function(){a(document).on("mousemove",function(e){m.css("z-index",1);l.css("z-index",0);togglePos=Math.round(e.pageX-
n)-10;k=0>=togglePos?0:togglePos>=d?d:togglePos;m.css({right:function(a,c){if(h<k)return t=k,d-k;t=r;return d-h}});g.css({width:function(){return h<k?d-(h+(d-k)):0}});a(c).val(Math.ceil((p(b)-q(b))/x*t)+parseInt(u));y(b)})});a(document).mouseup(function(){a(document).off("mousemove")});a(window).on("resize",function(){w=f.offset();n=w.left;r=e.val();t=c.val();x=parseInt(a(b).find(".filter-cost").width())-20;var p=f.width()-20,q=(v-u)/p;d=p;h=Math.ceil((r-u)/q);k=Math.ceil((t-u)/q);l.css({left:function(a,
c){return h}});m.css({right:function(a,c){return p-k+1}});g.css({"margin-left":function(){return h},width:function(){return k-h}})})},B=function(b){a(b).find("input[name=max]").val(p(b));a(b).find("input[name=min]").val(q(b));"block"==a(b).find(".range-slider").css("display")&&z(b)},C=function(b){var e=a(b);b=a(b).find(".mbr-gallery-filter-all");var c=[];if(e.length)if(e.find(".mbr-gallery-item").each(function(b){(a(this).attr("data-tags")||"").trim().split(",").map(function(b){b=b.trim();-1==a.inArray(b,
c)&&c.push(b)})}),0<e.find(".mbr-gallery-filter").length&&e.find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var f="";e.find(".mbr-gallery-filter ul li:not(li:eq(0))").remove();c.map(function(a){f+='<li class="display-7">'+a+"</li>"});e.find(".mbr-gallery-filter ul").append(b).append(f);e.on("click",".mbr-gallery-filter li",function(b){b.preventDefault();$li=a(this);$li.parent().find("li").removeClass("active");$li.addClass("active");var c=$li.closest("section").find(".mbr-gallery-row"),
f=$li.html().trim();e.find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,c){var e=a(this);tagsTrimmed=e.attr("data-tags").split(",").map(function(a){return a.trim()});-1!=a.inArray(f,tagsTrimmed)||$li.hasClass("mbr-gallery-filter-all")?e.removeClass("mbr-gallery-item__hided"):(e.addClass("mbr-gallery-item__hided"),setTimeout(function(){e.css("left","300px")},200))});setTimeout(function(){c.closest(".mbr-gallery-row").trigger("filter")},50)})}else e.find(".mbr-gallery-item__hided").removeClass("mbr-gallery-item__hided"),
e.find(".mbr-gallery-row").trigger("filter")};a(document).ready(function(){var b=a(".mbr-shop");b&&(a(b).each(function(b,c){a(c).find(".shop-items").children();var f=a(c).find(".shop-items").children(),g=a(c).find(".sort-buttons .filter-by-pu .btn"),l=a(c).find(".sort-buttons .filter-by-pd .btn"),m=a(c).find(".sort-buttons .filter-by-d .btn"),d=a(c).closest("section").attr("data-sortbtn");a(c).find(".filter-by-pu").on("click",function(b){b.preventDefault();b.stopPropagation();a(g).removeClass("disableSortButton "+
d+"-outline").addClass(d);a(l).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");a(m).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");n(f,1,c)});a(c).find(".filter-by-pd").on("click",function(b){b.preventDefault();b.stopPropagation();a(l).removeClass("disableSortButton btn-primary-outline").addClass(d);a(g).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");a(m).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");
n(f,2,c)});a(c).find(".filter-by-d").on("click",function(b){b.preventDefault();b.stopPropagation();a(m).removeClass("disableSortButton "+d+"-outline").addClass(d);a(g).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");a(l).removeClass(d+" "+d+"-outline").addClass(d+"-outline disableSortButton");n(f,3,c)});a(c).find(".price-range").on("click",function(b){b.preventDefault();var d=a(c).find(".min-input").val(),e=a(c).find(".max-input").val();a(c).find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,
c){parseFloat(a(c).attr("data-price"))>=parseFloat(d)&&parseFloat(a(c).attr("data-price"))<=parseFloat(e)?a(c).removeClass("hided-by-price"):a(c).addClass("hided-by-price")})});a(c).find(".price-range-reset").on("click",function(b){b.preventDefault();a(c).find(".max-input").val(p(c));a(c).find(".min-input").val(q(c));a(c).find(".max-toggle").css("right","0");a(c).find(".min-toggle").css("left","0");a(c).find(".range-controls .bar").css("margin-left","0px").css("width","100%");z(c);a(c).find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,
c){a(c).removeClass("hided-by-price")})});B(c);C(c);n(a(c).find(".shop-items").children(),3,c)}),0!=a(".mbr-shop").length&&(null!==navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints?(a(".range-controls").css("display","none"),a(".price-controls, .filter-cost").css("margin-bottom","15px")):(a("input.min-input, input.max-input").prop("disabled",
!0),a(".filterPriceRange").css("display","none"))))})}})(jQuery);

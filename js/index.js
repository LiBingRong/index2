var index=0;
			var next=0;
			var timer=null;
			timer=setInterval(move,3000);
			function move(){
				next++;
				$(".banner ul li").eq(index).siblings().css("left",1366);
				$(".banner ul li").eq(index).animate({left:-1366});
				$(".banner ul li").eq(next).animate({left:0});
				$("#ol li").eq(next).addClass("cll");
				$("#ol li").eq(next).siblings().removeClass("cll")
				if(next==3){
					next=-1;
				}
				index=next;
			}
			

$(" footer ul li a").click(function(){
						var $ind=$(this).index();
						$("footer ul li a div p").eq($ind).addClass("tocolor").parent().parent().siblings().find("p").removeClass("tocolor");
						$(".book").eq($ind).show();
						$(".book").eq($ind).siblings().hide()
					})
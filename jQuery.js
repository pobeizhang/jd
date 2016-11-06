// JavaScript Document
$(function(){
	$(".top_shutdown").click(function(){
		$(".top_ad_bg").css({display:"none"});
	})



	// 换一批
	var hh=0;
	$(".change").click(function(){
		hh++;
		if(hh==3){
			hh=0;
		}
		$(".hyp").eq(hh).css({display:"block"}).siblings(".hyp").css({display:"none"});
	})

	// 猜你喜欢中“换一批”下面的框架上部的红线跑动效果
	// $(".guess_border").hover(function(){
	// 	$(".guess_border").css({right:"550px"});
	// },function(){
	// 	$(".guess_border").stop().animate({right:"0px"},1000);
	// })
	var mk=0;
	$(".guess_content").hover(function(){
		if(mk==0){
			$(".guess_border").css({right:"550px"});
			$(".guess_border").stop().animate({right:"0px"},1000);
			mk=1;
		}
		
	},function(){
		mk=0;
	})


	// 京东小时钟
	$(function(){
		var m=0;
		function run10(){
			m++;
			$("#sz1").css({transform:"rotate("+m+"deg)"});
			$("#sz2").css({transform:"rotate("+m/2+"deg)"});
			$("#sz4").css({transform:"rotate("+2*m+"deg)"});
		}
		setInterval(run10,30);
	})

	// 轮播图
		var i=0;
		var k=0;
		function run(){
		i++;
		if(i==6){
			i=0;
		}
		$(".detail_mid img").eq(i).stop().fadeIn(300,"linear").siblings("img").stop().fadeOut(400,"linear");
		$(".detail_mid li").eq(i).css({background:"#b61b1f"}).siblings("li").css({background:"#3e3e3e"});		
		}

		$(".detail_mid li").mouseover(function(){
			if(k==0){
				k=1;
				setTimeout(function(){
					k=0;
				},400)
			}else{
				return;
			}
			 i=$(this).index();
			$(this).css({background:"#b61b1f"}).siblings("li").css({background:"#3e3e3e"});			
			$(".detail_mid img").eq(i).stop().fadeIn(300,"linear").siblings("img").stop().fadeOut(400,"linear");			
		})
		$(".detail_mid").mouseover(function(){
			clearInterval(timer);
			$(".right_jia,.left_jian").css({display:"block"});
		})
		$(".detail_mid").mouseout(function(){
			timer=setInterval(run,4000);
			$(".right_jia,.left_jian").css({display:"none"});
		})
		$(".right_jia").click(function(){
			if(k==0){
				k=1;
				setTimeout(function(){
					k=0;
				},1000)
			}else{
				return;
			}
			i++;
			if(i==6){
				i=0;
			}
			$(".detail_mid li").eq(i).css({background:"#b61b1f"}).siblings("li").css({background:"#3e3e3e"});			 
			$(".detail_mid img").eq(i).stop().fadeIn(300,"linear").siblings("img").stop().fadeOut(400,"linear");
		})
		$(".left_jian").click(function(){
			if(k==0){
				k=1;
				setTimeout(function(){
					k=0;
				},1000)
			}else{
				return;
			}
			i--;
			if(i==-1){
				i=5;
			}
			$(".detail_mid li").eq(i).css({background:"#b61b1f"}).siblings("li").css({background:"#3e3e3e"});			 
			$(".detail_mid img").eq(i).stop().fadeIn(300,"linear").siblings("img").stop().fadeOut(400,"linear");
		})
	timer=setInterval(run,4000);





	// 左侧楼层提示框
	// var etitle_floor=document.getElementsByClassName('etitle_floor');
	// 	var etitle=document.getElementsByClassName('etitle');
	// 	var etitle_li=document.getElementsByClassName('etitle_li');
	// 	for(i=0;i<etitle_li.length;i++){
	// 		etitle_li[i].xuhao=i;
	// 	etitle_li[i].onmouseover=function(){
	// 	num=this.xuhao;
	// 	etitle[num].style.display="block";
	// 	etitle_floor[num].style.color="#c81623";
	// 	}
	// 	etitle_li[i].onmouseout=function(){
	// 	num=this.xuhao;
	// 	etitle[num].style.display="none";
	// 	etitle_floor[num].style.color="#625351";
	// 	}
	// }
	
	$(document).scroll(function(){
		var t=$(document).scrollTop();
		if(t>=1105&&t<=8650){
			$(".elevater").css({display:"block"});
			if(t>=1105&&t<=1900){
				$(".a1").css({color:"white"});
				$(".b1").css({display:"block",background:"white",color:"#c81623"});
				// $(".vb").removeClass("sprite_floor1").addClass("sprite_floor1_1");
			}else if(t<1105||t>1900){
				$(".a1").css({color:"#625351"});
				$(".b1").css({display:"none"});
				// $(".vb").removeClass("sprite_floor1_1").addClass("sprite_floor1");
			}
			if(t>1900&&t<=2900){
				$(".a2").css({color:"white"});
				$(".b2").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<1900||t>2900){
				$(".a2").css({color:"#625351"});
				$(".b2").css({display:"none"});
			}
			if(t>2900&&t<=3600){
				$(".a3").css({color:"white"});
				$(".b3").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<2900||t>3000){
				$(".a3").css({color:"#625351"});
				$(".b3").css({display:"none"});
			}
			if(t>3600&&t<=4300){
				$(".a4").css({color:"white"});
				$(".b4").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<3600||t>4300){
				$(".a4").css({color:"#625351"});
				$(".b4").css({display:"none"});
			}
			if(t>4300&&t<=5000){
				$(".a5").css({color:"white"});
				$(".b5").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<4300||t>5000){
				$(".a5").css({color:"#625351"});
				$(".b5").css({display:"none"});
			}
			if(t>5000&&t<=5600){
				$(".a6").css({color:"white"});
				$(".b6").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<5000||t>5600){
				$(".a6").css({color:"#625351"});
				$(".b6").css({display:"none"});
			}
			if(t>5600&&t<=6100){
				$(".a7").css({color:"white"});
				$(".b7").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<5600||t>6100){
				$(".a7").css({color:"#625351"});
				$(".b7").css({display:"none"});
			}
			if(t>6100&&t<=6900){
				$(".a8").css({color:"white"});
				$(".b8").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<6100||t>6900){
				$(".a8").css({color:"#625351"});
				$(".b8").css({display:"none"});
			}
			if(t>6900&&t<=7400){
				$(".a9").css({color:"white"});
				$(".b9").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<6900||t>7400){
				$(".a9").css({color:"#625351"});
				$(".b9").css({display:"none"});
			}
			if(t>7400&&t<=8000){
				$(".a10").css({color:"white"});
				$(".b10").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<7400||t>8000){
				$(".a10").css({color:"#625351"});
				$(".b10").css({display:"none"});
			}
			if(t>8000&&t<=8600){
				$(".a11").css({color:"white"});
				$(".b11").css({display:"block",background:"white",color:"#c81623"});
			}else if(t<8000||t>8600){
				$(".a11").css({color:"#625351"});
				$(".b11").css({display:"none"});
			}

			}else{
				$(".elevater").css({display:"none"});
			}



			$(".etitle_li").mouseover(function(){
				$(this).children(".etitle_floor").css({color:"#c81623"});
				$(this).children(".etitle").css({display:"block",background:"#c81623",color:"white"});
			})
			$(".etitle_li").mouseout(function(){
				$(this).children(".etitle_floor").css({color:"#625351"});
				$(this).children(".etitle").css({display:"none"});
			})
			})

		
// 顶部送至北京后面的三角
$(".top_leftContent").hover(function(){
	$(".top_leftsj").stop().css({transform:"rotate(180deg)"});
},function(){
	$(".top_leftsj").css({transform:"rotate(-360deg)"});
})


// 购物车-----效果
$(".cebian1").hover(function(){
	tt1 = setTimeout(function(){
		$(".cebian2").stop().animate({right:"32px"},300);
		$(".cebian2").css({background:"#c81623"});
	},200)
	
},function(){
	clearTimeout(tt1);
	$(".cebian2").stop().animate({right:"-28px"},300);
	$(".cebian2").css({background:"#7a6e6e"});
})
// 我的关注----效果
$(".cebian4").hover(function(){
	tt2=setTimeout(function(){
		$(".cebian5").stop().animate({right:"32px"},300);
		$(".cebian5").css({background:"#c81623"});
	},200)
	
},function(){
	clearTimeout(tt2);
	$(".cebian5").stop().animate({right:"-28px"},300);
	$(".cebian5").css({background:"#7a6e6e"});
})
// 我的足迹-----效果
$(".cebian7").hover(function(){
	tt3=setTimeout(function(){
		$(".cebian8").stop().animate({right:"32px"},300);
		$(".cebian8").css({background:"#c81623"});
	},200)
	
},function(){
	clearTimeout(tt3);
	$(".cebian8").stop().animate({right:"-28px"},300);
	$(".cebian8").css({background:"#7a6e6e"});
})
// 咨询-------效果
$(".cebian10").hover(function(){
	tt4=setTimeout(function(){
		$(".cebian11").stop().animate({right:"32px"},300);
		$(".cebian11").css({background:"#c81623"});
	},200)
	
},function(){
	clearTimeout(tt4);
	$(".cebian11").stop().animate({right:"-28px"},300);
	$(".cebian11").css({background:"#7a6e6e"});
})

	
	// 楼层标题栏切换
	$(".fist_top_index ul li").mouseover(function(){
		// $(this).find("a").css({borderRight:"none"}).siblings("");
		$(this).addClass("yangshi").siblings("li").removeClass("yangshi");
		var num = $(this).index(".fist_top_index ul li");
		// document.title = num; 
		num=num-9;
		$(".fg").eq(num).css({display:"block"}).siblings(".fg").css({display:"none"});
	})

	// $(".two_title1").mouseover(function(){
	// 	var num = $(this).index(.two_title1);
	// 	$(".twofloor_right1").eq(num).css({display:"block"}).siblings().css({display:"none"});
	// })

	// 今日抄底图片晃动效果
	$(".m1").hover(function(){
		$(".con_pic").stop().animate({left:"30px"},300);
	},function(){
		$(".con_pic").stop().animate({left:"40px"},300);
	})
	$(".hunter_son").hover(function(){
		$("n1").animate({left:"1000px"},300);
	},function(){

	})

	// 今日推荐轮播
	var n1=0;
	var k1=0;
	function func(){
		n1++;
		if(n1==5){
			n1=1;
			$(".recommend_move").css({left:"0px"});
		}
		l=n1*(-1003)+"px";
		$(".recommend_move").animate({left:l},800);
		
	}
	timer1=setInterval(func,3000);
	$(".recommend_two").hover(function(){
		clearInterval(timer1);
		$(".left_click").css({display:"block"});
		$(".right_click").css({display:"block"});
	},function(){
		$(".left_click").css({display:"none"});
		$(".right_click").css({display:"none"});
		timer1=setInterval(func,3000);
	})

    $(".right_click").click(function(){
			if(k1==0){
				k1=1;
				setTimeout(function(){
					k1=0;
				},500)
			}else{
				return;
			}
			n1++;
			if(n1==5){
				n1=1;
				$(".recommend_move").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=n1*(-1003)+"px";
						 
			$(".recommend_move").animate({left:l},800);
			
		})
		$(".left_click").click(function(){
			if(k1==0){
				k1=1;
				setTimeout(function(){
					k1=0;
				},500)
			}else{
				return;
			}
			n1--;
			if(n1==-1){
				n1=3;
				$(".recommend_move").css({left:"-4020px"});
			}
			l=n1*(-1003)+"px";		 
			$(".recommend_move").animate({left:l},800);
			
		})



		// 一楼轮播

	var m=0;
	var j=0;
	function hanshu(){
		m++;
		if(m==5){
			m=1;
			$(".floor_move1").css({left:"0px"});
		}
		l=m*(-439)+"px";
		$(".floor_move1").animate({left:l},800);
		if(m==4){
			$(".floor_move ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}else{
			$(".floor_move ul li").eq(m).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}
	}
	timer0=setInterval(hanshu,2000);
	$(".floor_move").hover(function(){
		clearInterval(timer0);
		$(".move_lc").css({display:"block"});
		$(".move_rt").css({display:"block"});
	},function(){
		$(".move_lc").css({display:"none"});
		$(".move_rt").css({display:"none"});
		timer0=setInterval(hanshu,2000);
	})

    $(".floor_move ul li").mouseover(function(){

    	if(m==4){
    		$(".floor_move1").css({left:"0px"});
    	}
    	 m = $(this).index();
    	// document.title = m;
        $(this).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
    	l = m * - 439 + "px";
    	$(".floor_move1").stop().animate({left:l},500);
    })
    $(".move_rt").click(function(){
			if(j==0){
				j=1;
				setTimeout(function(){
					j=0;
				},500)
			}else{
				return;
			}
			m++;
			if(m==5){
				m=1;
				$(".floor_move1").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=m*(-439)+"px";
						 
			$(".floor_move1").animate({left:l},800);
			if(m==4){
				$(".floor_move ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move ul li").eq(m).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
			
		})
		$(".move_lc").click(function(){
			if(j==0){
				j=1;
				setTimeout(function(){
					j=0;
				},500)
			}else{
				return;
			}
			m--;
			if(m==-1){
				m=3;
				$(".floor_move1").css({left:"-1756px"});
			}
			l=m*(-439)+"px";		 
			$(".floor_move1").animate({left:l},800);
			if(m==4){
				$(".floor_move ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move ul li").eq(m).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
		})

		// 2楼轮播
	var m2=0;
	var j2=0;
	function hanshu2(){
		m2++;
		if(m2==5){
			m2=1;
			$(".floor_move2").css({left:"0px"});
		}
		l=m2*(-339)+"px";
		$(".floor_move2").animate({left:l},800);
		if(m2==4){
			$(".twoFloor_d1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}else{
			$(".twoFloor_d1 ul li").eq(m2).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}
	}
	timer2=setInterval(hanshu2,2000);
	$(".twoFloor_d1").hover(function(){
		clearInterval(timer2);
		$(".move_lc2").css({display:"block"});
		$(".move_rt2").css({display:"block"});
	},function(){
		$(".move_lc2").css({display:"none"});
		$(".move_rt2").css({display:"none"});
		timer2=setInterval(hanshu2,2000);
	})

    $(".twoFloor_d1 ul li").mouseover(function(){

    	if(m2==4){
    		$(".floor_move2").css({left:"0px"});
    	}
    	 m2 = $(this).index();
    	// document.title = m;
        $(this).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
    	l = m2 *(-339) + "px";
    	$(".floor_move2").stop().animate({left:l},500);
    })
    $(".move_rt2").click(function(){
			if(j2==0){
				j2=1;
				setTimeout(function(){
					j2=0;
				},500)
			}else{
				return;
			}
			m2++;
			if(m2==5){
				m2=1;
				$(".floor_move2").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=m2*(-339)+"px";
						 
			$(".floor_move2").animate({left:l},800);
			if(m2==4){
				$(".twoFloor_d1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".twoFloor_d1 ul li").eq(m2).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
			
		})
		$(".move_lc2").click(function(){
			if(j2==0){
				j2=1;
				setTimeout(function(){
					j2=0;
				},500)
			}else{
				return;
			}
			m2--;
			if(m2==-1){
				m2=3;
				$(".floor_move2").css({left:"-1356px"});
			}
			l=m2*(-339)+"px";		 
			$(".floor_move2").animate({left:l},800);
			if(m2==4){
				$(".twoFloor_d1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".twoFloor_d1 ul li").eq(m2).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
		})

	// 3楼轮播
	

		var m3=0;
	var j3=0;
	function hanshu3(){
		m3++;
		if(m3==5){
			m3=1;
			$(".floor_move3_2").css({left:"0px"});
		}
		l=m3*(-439)+"px";
		$(".floor_move3_2").animate({left:l},800);
		if(m3==4){
			$(".floor_move3_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}else{
			$(".floor_move3_1 ul li").eq(m3).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}
	}
	timer3=setInterval(hanshu3,2000);
	$(".floor_move3_1").hover(function(){
		clearInterval(timer3);
		$(".move_lc3").css({display:"block"});
		$(".move_rt3").css({display:"block"});
	},function(){
		$(".move_lc3").css({display:"none"});
		$(".move_rt3").css({display:"none"});
		timer3=setInterval(hanshu3,2000);
	})

    $(".floor_move3_1 ul li").mouseover(function(){

    	if(m3==4){
    		$(".floor_move3_2").css({left:"0px"});
    	}
    	 m3 = $(this).index();
    	// document.title = m;
        $(this).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
    	l = m3 * - 439 + "px";
    	$(".floor_move3_2").stop().animate({left:l},500);
    })
    $(".move_rt3").click(function(){
			if(j3==0){
				j3=1;
				setTimeout(function(){
					j3=0;
				},500)
			}else{
				return;
			}
			m3++;
			if(m3==5){
				m3=1;
				$(".floor_move3_2").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=m3*(-439)+"px";
						 
			$(".floor_move3_2").animate({left:l},800);
			if(m3==4){
				$(".floor_move3_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move3_1 ul li").eq(m3).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
			
		})
		$(".move_lc3").click(function(){
			if(j3==0){
				j3=1;
				setTimeout(function(){
					j3=0;
				},500)
			}else{
				return;
			}
			m3--;
			if(m3==-1){
				m3=3;
				$(".floor_move3_2").css({left:"-1756px"});
			}
			l=m3*(-439)+"px";		 
			$(".floor_move3_2").animate({left:l},800);
			if(m3==4){
				$(".floor_move3_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move3_1 ul li").eq(m3).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
		})

		// 4楼轮播
		var m4=0;
		var j4=0;
	function hanshu4(){
		m4++;
		if(m4==5){
			m4=1;
			$(".floor_move4_2").css({left:"0px"});
		}
		l=m4*(-439)+"px";
		$(".floor_move4_2").animate({left:l},800);
		if(m4==4){
			$(".floor_move4_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}else{
			$(".floor_move4_1 ul li").eq(m4).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}
	}
	timer4=setInterval(hanshu4,2000);
	$(".floor_move4_1").hover(function(){
		clearInterval(timer4);
		$(".move_lc4").css({display:"block"});
		$(".move_rt4").css({display:"block"});
	},function(){
		$(".move_lc4").css({display:"none"});
		$(".move_rt4").css({display:"none"});
		timer4=setInterval(hanshu4,2000);
	})

    $(".floor_move4_1 ul li").mouseover(function(){

    	if(m4==4){
    		$(".floor_move4_2").css({left:"0px"});
    	}
    	 m4 = $(this).index();
    	// document.title = m;
        $(this).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
    	l = m4 *(- 439) + "px";
    	$(".floor_move4_2").stop().animate({left:l},500);
    })
    $(".move_rt4").click(function(){
			if(j4==0){
				j4=1;
				setTimeout(function(){
					j4=0;
				},500)
			}else{
				return;
			}
			m4++;
			if(m4==5){
				m4=1;
				$(".floor_move4_2").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=m4*(-439)+"px";
						 
			$(".floor_move4_2").animate({left:l},800);
			if(m4==4){
				$(".floor_move4_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move4_1 ul li").eq(m4).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
			
		})
		$(".move_lc4").click(function(){
			if(j4==0){
				j4=1;
				setTimeout(function(){
					j4=0;
				},500)
			}else{
				return;
			}
			m4--;
			if(m4==-1){
				m4=3;
				$(".floor_move4_2").css({left:"-1756px"});
			}
			l=m4*(-439)+"px";		 
			$(".floor_move4_2").animate({left:l},800);
			if(m4==4){
				$(".floor_move4_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move4_1 ul li").eq(m4).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
		})

		// 5楼轮播
		var m5=0;
		var j5=0;
	function hanshu5(){
		m5++;
		if(m5==5){
			m5=1;
			$(".floor_move5_2").css({left:"0px"});
		}
		l=m5*(-439)+"px";
		$(".floor_move5_2").animate({left:l},800);
		if(m5==4){
			$(".floor_move5_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}else{
			$(".floor_move5_1 ul li").eq(m5).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
		}
	}
	timer5=setInterval(hanshu5,2000);
	$(".floor_move5_1").hover(function(){
		clearInterval(timer5);
		$(".move_lc5").css({display:"block"});
		$(".move_rt5").css({display:"block"});
	},function(){
		$(".move_lc5").css({display:"none"});
		$(".move_rt5").css({display:"none"});
		timer5=setInterval(hanshu5,2000);
	})

    $(".floor_move5_1 ul li").mouseover(function(){

    	if(m5==4){
    		$(".floor_move5_2").css({left:"0px"});
    	}
    	 m5 = $(this).index();
    	// document.title = m;
        $(this).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
    	l = m5 *(- 439) + "px";
    	$(".floor_move5_2").stop().animate({left:l},500);
    })
    $(".move_rt5").click(function(){
			if(j5==0){
				j5=1;
				setTimeout(function(){
					j5=0;
				},500)
			}else{
				return;
			}
			m5++;
			if(m5==5){
				m5=1;
				$(".floor_move5_2").css({left:"0px"});
				// $("#son").animate({left:"0px"},800);
			}
			l=m5*(-439)+"px";
						 
			$(".floor_move5_2").animate({left:l},800);
			if(m5==4){
				$(".floor_move5_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move5_1 ul li").eq(m5).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
			
		})
		$(".move_lc5").click(function(){
			if(j5==0){
				j5=1;
				setTimeout(function(){
					j5=0;
				},500)
			}else{
				return;
			}
			m5--;
			if(m5==-1){
				m5=3;
				$(".floor_move5_2").css({left:"-1756px"});
			}
			l=m5*(-439)+"px";		 
			$(".floor_move5_2").animate({left:l},800);
			if(m5==4){
				$(".floor_move5_1 ul li").eq(0).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}else{
				$(".floor_move5_1 ul li").eq(m5).css({background:"#b61b1f"}).siblings().css({background:"#3e3e3e"});
			}
		})

		// 热门书单的上下轮播
		var sh = 0;
    // 3.函数体
    function qq(){
    	sh++;
    	// 判断循环
    	if(sh==5){
            $(".dan_ul").css({bottom:"0px"});
    		sh=1;
    	}

    	// 获得top值
    	b = sh * -130 + "px";
    	$(".dan_ul").animate({bottom:b},800);
    }
    //2. 定时器
    timers = setInterval(qq,3000);

    // 生活服务下面得上拉和上拉图片
    $(".slide_lifeLi1").mouseover(function(){
    	 $(".slide_life").slideUp(300).siblings(".slide_div").find(".ht1").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    	
    })
   $(".slide_lifeLi2").mouseover(function(){
    	 $(".slide_life").slideUp(300).siblings(".slide_div").find(".ht2").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    	
    })
   $(".slide_lifeLi3").mouseover(function(){
    	 $(".slide_life").slideUp(300).siblings(".slide_div").find(".ht3").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    	
    })
   $(".slide_lifeLi4").mouseover(function(){
    	 $(".slide_life").slideUp(300).siblings(".slide_div").find(".ht4").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    	
    })
   $(".ht1").mouseover(function(){
   	$(".ht1").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    $(".life_table1").css({display:"block"}).siblings(".ru").css({display:"none"});
   })
   $(".ht2").mouseover(function(){
   	$(".ht2").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    $(".life_table2").css({display:"block"}).siblings(".ru").css({display:"none"});
   })
   $(".ht3").mouseover(function(){
   	$(".ht3").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    $(".life_table3").css({display:"block"}).siblings(".ru").css({display:"none"});
   })
   $(".ht4").mouseover(function(){
   	$(".ht4").css({borderTop:"2px solid #c81623",borderBottom:"none"}).siblings().css({borderTop:"none",borderBottom:"1px solid #e8e8e7"});
    $(".life_table4").css({display:"block"}).siblings(".ru").css({display:"none"});
   })

// 最外层的括号
})
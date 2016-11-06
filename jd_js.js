// JavaScript Document

window.onload=function(){
	// var detail_mid=document.getElementsByClassName('detail_mid');
	// var imgs=document.getElementsByClassName('imgs');
	// var lis=document.getElementsByClassName('lis');
	// num=0;
	// function run(){
	// 	num++;
	// 	if(num==6){
	// 		num=0;
	// 	}
	// 	for(i=0;i<imgs.length;i++){
	// 		imgs[i].style.display="none";
	// 		lis[i].style.background="#3e3e3e";
	// 	}/*第一个for的函数结束括号*/
	// 	imgs[num].style.display="block";
	// 	lis[num].style.background="#b61b1f";
	// 	for(j=0;j<lis.length;j++){
	// 		lis[j].xuhao=j;
	// 		lis[j].onmouseover=function(){
	// 			clearInterval(timer);
	// 			for(i=0;i<imgs.length;i++){
	// 			imgs[i].style.display="none";
	// 			lis[i].style.background="#3e3e3e";
	// 			}/*第三个for的函数结束括号*/
	// 			num=this.xuhao;
	// 			imgs[num].style.display="block";
	// 			lis[num].style.background="#b61b1f";
	// 		}/*鼠标移入事件结束括号*/
	// 		lis[j].onmouseout=function(){
	// 			timer=setInterval(run,2000);

	// 		}/*鼠标移出事件结束括号*/
			
	// 	}/*第二个for的函数结束括号*/
		
	// }/*run()函数结束括号*/

	// timer=setInterval(run,2000);
// $(function(){
	// var i=0;
	// function run(){
	// 	i++;
	// 	$(".detail_mid img").eq(i).fadeIn(1000,"linear");
	// 	$(".detail_mid li").eq(i).css({background:"red"});
	// 	$(".detail_mid img").eq(i).siblings("img").css({display:"none"});
	// 	$(".detail_mid li").eq(i).siblings("li").css({background:"#cccccc"});
	// 	if(i==5){
	// 		i=-1;
	// 	}
	// }
	
	// timer=setInterval(run,3000);



// 左边楼层提示框
// var etitle_floor=document.getElementsByClassName('etitle_floor');
// var etitle=document.getElementsByClassName('etitle');
// var etitle_li=document.getElementsByClassName('etitle_li');
// for(i=0;i<etitle_li.length;i++){
// 	etitle_li[i].xuhao=i;
// etitle_li[i].onmouseover=function(){
// 		num=this.xuhao;
// 		etitle[num].style.display="block";
// 		etitle_floor[num].style.color="#c81623";
// 		}
// 		etitle_li[i].onmouseout=function(){
// 		num=this.xuhao;
// 		etitle[num].style.display="none";
// 		etitle_floor[num].style.color="#625351";
// 		}
// 	}


	// 1楼标题效果
	var onefloor_right1=document.getElementsByClassName('oneFloor_right1');
	var first_title1=document.getElementsByClassName('first_title1');
	
	for(i=0;i<first_title1.length;i++){
	first_title1[i].xuhao=i;
	first_title1[i].onmouseover=function(){
		num=this.xuhao;
		for(j=0;j<first_title1.length;j++){
			onefloor_right1[j].style.display="none";
		}
		onefloor_right1[num].style.display="block";
		}
		
	}




}/*window.onload的结束括号*/

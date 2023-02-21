// Project runs with Jquery!

$(document).ready(function() {
// press Herter1 then get the song and yellow css after keyup then retrun normal;
    $("#heater1").click(function(){
   document.getElementById("A").play();
   document.getElementById("display").innerHTML = "Heater 1";
      
                      });
  
   $("#heater1").mousedown(function(){
    $("#heater1").addClass("active");
        /*  setInterval(function(){
             // document.getElementById("A").play(); //按住期间执行的代码
                },500) */
                      }); 
  
  $("#heater1").mouseup(function(){
    $("#heater1").removeClass("active");
          
                      });
					  
	$("#heater1").on("touchstart",function(){
		
		$("#heater1").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
  // press Herter2 then get the song and yellow css after keyup then retrun normal;
  
   $("#heater2").click(function(){
   document.getElementById("S").play();
   document.getElementById("display").innerHTML = "Heater 2";
      
                      });
  
   $("#heater2").mousedown(function(){
    $("#heater2").addClass("active");
      
                      });
  
  $("#heater2").mouseup(function(){
    $("#heater2").removeClass("active");
          
                      });
 $("#heater2").on("touchstart",function(){
				  	
	$("#heater2").addClass("active");
					  }); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
   // press Herter3 then get the song and yellow css after keyup then retrun normal;
  
   $("#heater3").click(function(){
   document.getElementById("D").play();
   document.getElementById("display").innerHTML = "Heater 3";
      
                      });
  
   $("#heater3").mousedown(function(){
    $("#heater3").addClass("active");
      
                      });
  
  $("#heater3").mouseup(function(){
    $("#heater3").removeClass("active");
          
                      });
					  
$("#heater3").on("touchstart",function(){
		
		$("#heater3").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
   // press Herter4 then get the song and yellow css after keyup then retrun normal;
  
   $("#heater4").click(function(){
   document.getElementById("F").play();
   document.getElementById("display").innerHTML = "Heater 4";
      
                      });
  
   $("#heater4").mousedown(function(){
    $("#heater4").addClass("active");
      
                      });
  
  $("#heater4").mouseup(function(){
    $("#heater4").removeClass("active");
          
                      });
	$("#heater4").on("touchstart",function(){
		
		$("#heater4").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
   // press clap then get the song and yellow css after keyup then retrun normal;
  
   $("#clap").click(function(){
   document.getElementById("G").play();
   document.getElementById("display").innerHTML = "Clap";
      
                      });
  
   $("#clap").mousedown(function(){
    $("#clap").addClass("active");
      
                      });
  
  $("#clap").mouseup(function(){
    $("#clap").removeClass("active");
          
                      });

$("#clap").on("touchstart",function(){
		
		$("#clap").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
        
  // press Open HH then get the song and yellow css after keyup then retrun normal;
  
   $("#openhh").click(function(){
   document.getElementById("H").play();
   document.getElementById("display").innerHTML = "Open HH";
      
                      });
  
   $("#openhh").mousedown(function(){
    $("#openhh").addClass("active");
      
                      });
  
  $("#openhh").mouseup(function(){
    $("#openhh").removeClass("active");
          
                      });
	$("#openhh").on("touchstart",function(){
		
		$("#openhh").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
   // press Kick-H then get the song and yellow css after keyup then retrun normal;
  
   $("#kickh").click(function(){
   document.getElementById("J").play();
   document.getElementById("display").innerHTML = "Kick'n Hat";
      
                      });
  
   $("#kickh").mousedown(function(){
    $("#kickh").addClass("active");
      
                      });
  
  $("#kickh").mouseup(function(){
    $("#kickh").removeClass("active");
          
                      });
$("#kickh").on("touchstart",function(){
		
		$("#kickh").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
  // press Kick then get the song and yellow css after keyup then retrun normal;
  
   $("#kick").click(function(){
   document.getElementById("K").play();
   document.getElementById("display").innerHTML = "Kick";
      
                      });
  
   $("#kick").mousedown(function(){
    $("#kick").addClass("active");
      
                      });
  
  $("#kick").mouseup(function(){
    $("#kick").removeClass("active");
          
                      });
$("#kick").on("touchstart",function(){
		
		$("#kick").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
  
  // press Closed HH then get the song and yellow css after keyup then retrun normal;
  
   $("#clohh").click(function(){
   document.getElementById("L").play();
   document.getElementById("display").innerHTML = "Closed HH";
      
                      });
  
   $("#clohh").mousedown(function(){
    $("#clohh").addClass("active");
      
                      });
  
  $("#clohh").mouseup(function(){
    $("#clohh").removeClass("active");
          
                      });
$("#clohh").on("touchstart",function(){
		
		$("#clohh").addClass("active");
	}); // Jquery的方法添加touchstart来展现css变化，因为手机一般没有mouse产生事件！
        
   
});



// press A (Herter1) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===65){
        //console.log(event.keyCode);
        document.getElementById("A").play();
        $("#heater1").addClass("active");
        document.getElementById("display").innerHTML = "Heater 1";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===65){
        //console.log(event.keyCode);
        $("#heater1").removeClass("active");
 } 
   
 });

// press S (Herter2) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===83){
        //console.log(event.keyCode);
        document.getElementById("S").play();
        $("#heater2").addClass("active");
   document.getElementById("display").innerHTML = "Heater 2";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===83){
        // console.log(event.keyCode);
        $("#heater2").removeClass("active");
 } 
   
 });

// press D (Herter3) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===68){
        //console.log(event.keyCode);
        document.getElementById("D").play();
        $("#heater3").addClass("active");
       document.getElementById("display").innerHTML = "Heater 3";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===68){
        // console.log(event.keyCode);
        $("#heater3").removeClass("active");
 } 
   
 });

// press F (Herter4) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===70){
        //console.log(event.keyCode);
        document.getElementById("F").play();
        $("#heater4").addClass("active");
   document.getElementById("display").innerHTML = "Heater 4";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===70){
        // console.log(event.keyCode);
        $("#heater4").removeClass("active");
 } 
   
 });

// press G (Clap) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===71){
        //console.log(event.keyCode);
        document.getElementById("G").play();
        $("#clap").addClass("active");
   document.getElementById("display").innerHTML = "Clap";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===71){
        // console.log(event.keyCode);
        $("#clap").removeClass("active");
 } 
   
 });

// press H (Open HH) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===72){
        //console.log(event.keyCode);
        document.getElementById("H").play();
        $("#openhh").addClass("active");
   document.getElementById("display").innerHTML = "Open HH";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===72){
        // console.log(event.keyCode);
        $("#openhh").removeClass("active");
 } 
   
 });


// press J (Kick N Hat) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===74){
        //console.log(event.keyCode);
        document.getElementById("J").play();
        $("#kickh").addClass("active");
   document.getElementById("display").innerHTML = "Kick'n Hat'";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===74){
        // console.log(event.keyCode);
        $("#kickh").removeClass("active");
 } 
   
 });


// press K (Kick) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===75){
        //console.log(event.keyCode);
        document.getElementById("K").play();
        $("#kick").addClass("active");
   document.getElementById("display").innerHTML = "Kick";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===75){
        // console.log(event.keyCode);
        $("#kick").removeClass("active");
 } 
   
 });


// press L (Closed HH) then get the song and yellow css after keyup then retrun normal; KeyEventListener runs for gobal, so we need a new $(document)!
$(document).keydown(
 function (event) {
 
 if(event.keyCode===76){
        //console.log(event.keyCode);
        document.getElementById("L").play();
        $("#clohh").addClass("active");
   document.getElementById("display").innerHTML = "Closed HH";
 } 
   
 });

$(document).keyup(
 function (event) {
 
 if(event.keyCode===76){
        // console.log(event.keyCode);
        $("#clohh").removeClass("active");
 } 
   
 });




//Without Jqeury you could code like following for keyup and keydown.... surely it can't show/work so well as like Jquery what you want.
/*
document.addEventListener('keydown',(e)=>{
  console.log(e.keyCode);    
  if(e.keyCode===65){
        console.log(e.keyCode);
        document.getElementById("A").play();
        document.getElementById("display").innerHTML = "Heater 1";
        document.getElementById("heater1").style.backgroundColor="yellow";
      }
    })
    

document.addEventListener('keyup',(e)=>{
  console.log(e.keyCode);    
  if(e.keyCode===65){
        console.log(e.keyCode);
        document.getElementById("A").play();
        document.getElementById("display").innerHTML = "Heater 1";
        document.getElementById("heater1").style.backgroundColor="none";
      }
    })
*/

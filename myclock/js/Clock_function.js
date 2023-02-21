var nCount = 1;  // counting number for HK or for Germany after click;

function clockRun() {
//degSecond = degSecond + 10;
  var date = new Date();
  if (nCount%2==0){
	  deghour = date.getHours()+7; // HongKong Time
  }
  else {
	  
	  deghour = date.getHours(); // Germany Time
  }
  
  
  degmin =date.getMinutes();
  degSecond = date.getSeconds();
  
  if (deghour>12){
    $("#hour").css("-webkit-transform","rotate("+((deghour-12)*30+degmin*0.5+180)+"deg)");
	$("#second").css("background-color","red");
  }
  
else {
   $("#hour").css("-webkit-transform","rotate("+(deghour*30+degmin*0.5+180)+"deg)");
   $("#second").css("background-color","darkblue");
}

$("#mins").css("-webkit-transform","rotate("+(degmin*6+180)+"deg)");
  
$("#second").css("-webkit-transform","rotate("+(degSecond*6+180)+"deg)");
 // console.log(deghour-12);
 
}

function start() {
  intDe = setInterval(clockRun, 1000);
  
}
/////////////////////////////////////
/*

*/

$(document).ready(function () {
  $("#show").click(function () {
    start();
	$("#show").attr("disabled", true);
	
    
    
  });

 
    $("#de-hk").click(function () {
      nCount +=1; 
	  
	  if (nCount%2==0){
		  $("#cycle-inside").css("background-color","orange");
	  }
	  
	  else{
		  $("#cycle-inside").css("background","none");
		  
	  }
   
  });
});


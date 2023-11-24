

// show date
function showDate(){
	document.getElementById('sd').innerHTML=Date()
}

function textChange(){
	document.getElementById('td').innerHTML="beautiful bangladesh"
}
// on/off
function bulbOn(){
	document.getElementById('img'). src="images/off.png";
}
function bulbOn(){
	document.getElementById('img'). src="images/on.png";
}
// color textChang
function colorChange(){
	document.getElementById('cc').style.color="green";
}
// show/hide
function textHide(){
	document.getElementById('hs').style.display="none"
}
function textShow(){
	document.getElementById('hs').style.display="block"
}
function togg(){
	document.getElementById('hs').style.display="inline-block"
}
// web/paragraph
function webGraph(){
	document.getElementById('wp').innerHTML=100+5;
}
function webMraph(){
	document.getElementById('wp').innerHTML=100-70;
}
// number
function numBer(){
	document.getElementById('nb').innerHTML=30.50;
}
// change heading/paragraph
function headGraph(){
	document.getElementById('hp').innerHTML="amar sonar bangla";
}
function graphHead(){
	document.getElementById('hp').innerHTML="beautiful bangladesh nature";
}
// operator
function operAtor(){
	let x = 103;let y = 2;let z = x + y;
	document.getElementById('ds').innerHTML=z;
}
// assigment
function atorOper(){
	let x = 103;
	document.getElementById('cmo').innerHTML="Value of x is:" + x;
}
// JavaScript Number 
function javaNumber(){
	let x=123e5; let y=123e-5;
	document.getElementById('jn').innerHTML= X + "<br>" + y;
}
function setDate(){
	const d = new Date(2021); 
	document.getElementById('fd').innerHTML= 2021;
}
// jquery teamplate
// alert
$(document).ready(function(){
	// alert("Hello sir I Am Mutaleb");
	// $('button').click(function(){
	// alert("Hello sir I Am Mutaleb");
	// $('#btn').click(function(){
	// alert("Hello sir I Am Mutaleb");
	// })
	$('#btn').on( "click", function(){
		alert("Hello sir");
	});
	// show/hides
	$('#hide').on("click", function(){
		$('#h2').fadeOut();
	});
	$('#show').on("click", function(){
		$('#h2').fadeIn();
	});
	$('#togg').on("click", function(){
		$('#h2').fadeToggle("slow");
	});
	// display show hide
	$('.ques').on("click", function(){
		$('.ans').slideToggle(300);	
	})
	// trigger/log
	$(document).on( "dblclick", function() {
 	 $( '.log' ).text("300");
   });
	
})
console.log("running");
$(document).ready(function() {

var turnCount = 0;

var turn = true; 

var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);

var spotClicked = function(){
	
	var spotCheck = $(this).parent().children();

	for (var i = spotCheck.length - 1; i >= 0; i--) {
		if (!($(spotCheck[i]).hasClass('clicked'))){

			if (turn) {
				$(spotCheck[i]).css('background-color', 'yellow');
				$(spotCheck[i]).addClass('clicked'); 
				$(spotCheck[i]).addClass('yellow');
				turn = false;
				turnCount ++;
			} else {
				$(spotCheck[i]).css('background-color', 'black');
				$(spotCheck[i]).addClass('clicked'); 	
				$(spotCheck[i]).addClass('black'); 
				turn = true;
				turnCount ++;
			}

			// console.log("free space");
			// console.log(spotCheck[i]);
			
			// $(spotCheck[i]).addClass('clicked'); 
			// if ($(this).hasClass('.clicked')){
			// turn = turn;
			// // turnCount ++;
			// }else {
			// 	if (turn){
			// 		$(this).css('background-color', 'yellow');
			// 		// $(this).css('cursor', 'none');
			// 		$(this).addClass('.clicked'); 
			// 		$(this).addClass('.yellow');
			// 		turn = false;
			// 		turnCount ++;
			// 	} else {
			// 		$(this).css('background-color', 'black');
			// 		// $(this).css('cursor', 'none');
			// 		$(this).addClass('.clicked'); 	
			// 		$(this).addClass('.black');
			// 		turn = true;
			// 		turnCount ++;
			// 		console.log(turnCount);
			// 	} 
			// }
			break;	
		} else {
			console.log("nah");
		}
	};

	if ($(this).hasClass('row5')){
		($(spot).addClass('row5'));	
		// turnCount ++;
		
				
	} 
	// if ($(this).hasClass('row2')){
	// alert("yellow wins!");
	// ($(spot).css('background-color', 'yellow'));
	// }		
};

$(spot).click(spotClicked);





$(buttonReset).click(function(){
	location.reload();
})



});
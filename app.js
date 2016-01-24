console.log("running");

var board = [
 ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
 ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
 ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
 ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
 ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
 ['W', 'W', 'W', 'W', 'W', 'W', 'W']];


var checkWin = function() {
	for (var i = 0; i < board.length; i++) {
	
		if (board[i].toString().search("B,B,B,B") >= 0){
			alert("Black wins!");
			location.reload();
		} else if (board[i].toString().search("Y,Y,Y,Y") >= 0) {
			alert("Yellow wins!");
			location.reload();
		}else{
			console.log("keep playing");
		}	
	};	

};
// .toString
//string.search(searchvalue) 


$(document).ready(function() {

var turn = true;

//board[0][0] = 'y'


var spot = $(".spot");
console.log(spot);

var buttonReset = $(".reset");
console.log(buttonReset);

var spotClicked = function(){
	var colNum = parseInt($(this).parent().attr('id').substr(3, 1));
//colNum - grabbing the col number
//substr pulling the number from the string
//parseInt makes the string a number
//updating the board var 	
	
	var clickedColumnSpots = $(this).parent().children();

	for (var i = clickedColumnSpots.length - 1; i >= 0; i--) {
		if (!($(clickedColumnSpots[i]).hasClass('clicked'))){
			turn = !turn;
			$(clickedColumnSpots[i]).addClass('clicked');
			if (turn) {
				$(clickedColumnSpots[i]).css('background-color', 'yellow');
				$(clickedColumnSpots[i]).addClass('yellow');
				board[i][colNum] = 'Y'
//i is the row 
//this is updating the var board

			} else {
				$(clickedColumnSpots[i]).css('background-color', 'black');	
				$(clickedColumnSpots[i]).addClass('black'); 
				board[i][colNum] = 'B'	
			}
			checkWin();
			break;	
		}
	};


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
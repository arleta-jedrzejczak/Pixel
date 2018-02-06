const submitGrid = $('#submitGrid');
const canvas = $('#pixelCanvas');
let gridWidth = $('#inputWeight');
let gridHeight = $('#inputHeight');
let size = $("#sizePicker");
var temp = "";

submitGrid.on('click', function(e) {
    e.preventDefault();
    makeGrid();
    canvas.html(temp);
})

function makeGrid() {

    temp = "";

    let gridWidthNew = gridWidth.val();
    let gridHeightNew = gridHeight.val();
    
    for (let i = 0; i < gridHeightNew; i++) {
	      temp += '<tr>';
        for (let j = 0; j < gridWidthNew; j++) {
            temp += '<td></td>';
	      }
	      temp += '</tr>';
		}
		return temp;
}

var color = '#000000';
$('body').on('change', '#colorPicker', function() {
    color = $("#colorPicker").val();
});

canvas.on('click', function(e) {
    $(e.target).css('background-color', color);
});

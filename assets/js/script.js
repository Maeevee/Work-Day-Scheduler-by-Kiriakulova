var saveButton = $(".saveBtn");
var notification = $(".notification");
var timeBlock = $(".time-block");
var textarea = $("textarea");


//Display the current day at the top of the calendar
var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);
//This function will change the color of the time blocks based on the time of day
function colorChange() {
    //Get the current hour and turn it into a number
    var currentTime = moment().format('H');
    const hourNumber = parseInt(currentTime);
}
colorChange();

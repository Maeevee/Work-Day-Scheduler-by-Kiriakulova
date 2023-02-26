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

    //Add individual id to each textarea
    textarea.each(function(index) {
        $(this).attr('id', index + 9);

        //Get the id of the textarea and turn it into a number
        var timeBlockHour = parseInt($(this).attr("id"));

        //Change the color of the time block based on the time of day
        if (timeBlockHour < hourNumber) {
            $(this).addClass("past");
        } else if (timeBlockHour === hourNumber) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}
colorChange();


//This function will update the time blocks every 1 second
setInterval(colorChange, 1000);

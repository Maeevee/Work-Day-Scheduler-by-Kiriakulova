var saveButton = $(".saveBtn");
var notification = $(".notification");
var timeBlock = $(".time-block");
var textarea = $("textarea");

//Get the current hour and turn it into a number
var currentTime = moment().format('H');
const hourNumber = parseInt(currentTime);


//Display the current day at the top of the calendar
var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);


//This function will change the color of the time blocks based on the time of day
function colorChange() {

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


//Saving the text in the textarea to local storage
    saveButton.on("click", function() {
        var text = $(this).siblings("textarea").val();
        var time = $(this).siblings("textarea").attr("id");

        //Save text to local storage
        localStorage.setItem(time, text);

    //Notification that item was saved to localStorage
    notification.removeClass("d-none");

    //Hide the notification after 5 seconds
    setTimeout(function() {
        notification.addClass("d-none");
    }, 5000);
    });
    });


//Clear loccal storade at 00:00
function clearLocalStorage() {
    if (hourNumber === "0") {
        localStorage.clear();
    }
}
clearLocalStorage();
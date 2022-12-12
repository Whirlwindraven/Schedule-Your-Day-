let displayTime = document.querySelector("#currentDay");

let currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});

// load any saved data from localStorage 
// 9am
$("#hour-9am .description").val(localStorage.getItem("hour-9am" /* localStorage KEY also the row id */));

// 10am
$("#hour-10am .description").val(localStorage.getItem("#hour-10am" /* localStorage KEY also the row id */));

// 11am
$("#hour-11am .description").val(localStorage.getItem("hour-10am" /* localStorage KEY also the row id */));

// 12pm
$("#hour-12pm .description").val(localStorage.getItem("hour-12pm" /* localStorage KEY also the row id */));

// 1pm
$("#hour-1pm .description").val(localStorage.getItem("hour-1pm" /* localStorage KEY also the row id */));

// 2pm
$("#hour-2pm .description").val(localStorage.getItem("hour-2pm" /* localStorage KEY also the row id */));

// 3pm
$("#hour-3pm .description").val(localStorage.getItem("hour-3pm" /* localStorage KEY also the row id */));

// 4pm
$("#hour-4pm .description").val(localStorage.getItem("hour-4pm" /* localStorage KEY also the row id */));

// 5pm
$("#hour-5pm .description").val(localStorage.getItem("hour-5pm" /* localStorage KEY also the row id */));

// converting time and display

let hour9 = 9;
let hour10 = 10;
let hour11 = 11;
let hour12 = 12;
let hour1 = 13;
let hour2 = 14;
let hour3 = 15;
let hour4 = 16;
let hour5 = 17;

let currentHour = moment().format('H');

// 9am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

// 10am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}
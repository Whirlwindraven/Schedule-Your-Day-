// Get the elements for the current day and the time blocks
const displayTime = document.getElementById('currentDay');
const timeBlocks = document.querySelectorAll('.time-block');

// Set the current day at the top of the calendar
displayTime.textContent = dayjs().format('dddd, MMMM Do');



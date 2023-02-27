// Get the elements for the current day and the time blocks
const displayTime = document.getElementById('currentDay');
const timeBlocks = document.querySelectorAll('.time-block');

// Set the current day at the top of the calendar
displayTime.textContent = dayjs().format('dddd, MMMM DD');

// Add event listeners to the time blocks
timeBlocks.forEach((timeBlock) => {
  const saveButton = timeBlock.querySelector('.saveBtn');
  const textField = timeBlock.querySelector('.description');
  const rowId = timeBlock.getAttribute('id');
  const rowTime = parseInt(rowId.replace('hour-', ''), 10);

  // Load any saved data from localStorage
  textField.value = localStorage.getItem(rowId);

  // Update the color of the time block based on the current time
  const currentHour = dayjs().hour();

  if (rowTime < currentHour) {
    timeBlock.classList.add('past');
  } else if (rowTime === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }

  // Save the text for the event in local storage
  saveButton.addEventListener('click', () => {
    localStorage.setItem(rowId, textField.value);
  });
});

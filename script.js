const saveDateButton = document.getElementById('saveDateButton');

saveDateButton.addEventListener('click', function() {
  // Set the desired date
  const targetDate = new Date(2024, 4, 29); // Year, Month (0-indexed), Day

  // Modern browsers offer add to calendar functionality
  if (navigator.calendar && navigator.calendar.add) {
    navigator.calendar.add(targetDate)
      .then(() => console.log('Date added to calendar'))
      .catch(error => console.error('Error adding date:', error));
  } else {
    // Fallback for older browsers (display an alert)
    alert(`Date: ${targetDate.toLocaleDateString()}`);
  }
});
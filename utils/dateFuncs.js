function createDateWithTime(dateInteger) {
  // Step 1: Get the current month and year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Step 2: Create a new Date object with the current year, current month, and date from the variable
  const selectedDate = new Date(currentYear, currentMonth, dateInteger + 1);

  // Step 3: Set the time to 00:00:00
  selectedDate.setHours(-24, 0, 0, 0);

  return selectedDate;
}
function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
module.exports = { createDateWithTime, formatDate };

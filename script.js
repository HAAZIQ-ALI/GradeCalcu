document.getElementById("button").addEventListener("click", function () {
  // Get the input value
  const inputMarks = document.getElementById("marks").value;

  // Split the input string by commas and trim spaces, then convert to numbers
  const marksArray = inputMarks.split(',').map(mark => parseFloat(mark.trim()));

  // Check if all values are numbers
  if (marksArray.some(isNaN)) {
      alert("Please enter valid numbers for all marks.");
      return;
  }

  // Calculate the total marks and percentage
  const totalMarks = marksArray.reduce((acc, mark) => acc + mark, 0);
  const percentage = (totalMarks / (marksArray.length * 100)) * 100;

  // Display the result
  document.getElementById("percentage").textContent = "Percentage: " + percentage.toFixed(2) + "%";

  // Determine the grade based on the percentage
  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";

  // Display the grade
  document.getElementById("grade").textContent = "Grade: " + grade;
});

function createTable() {
  // Get the number of rows from the user
  let rows = prompt("Input number of rows");
  rows = parseInt(rows); // Convert the input to an integer

  // Get the number of columns from the user
  let cols = prompt("Input number of columns");
  cols = parseInt(cols); // Convert the input to an integer

  // Validate the inputs
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive integers for rows and columns.");
    return; // Exit the function if input is invalid
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing content in the table (if any)
  table.innerHTML = '';

  // Create the table dynamically
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr"); // Create a new table row
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td"); // Create a new table cell
      cell.textContent = `Row-${i} Column-${j}`; // Set the content of the cell
      row.appendChild(cell); // Append the cell to the row
    }
    table.appendChild(row); // Append the row to the table
  }
}

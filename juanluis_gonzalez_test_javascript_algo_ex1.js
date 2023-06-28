// 'to_verify' table of 9 boxes
let to_verify = [
  [4, 2, 7, 3, 5, 1, 9, 8, 6],
  [9, 8, 3, 7, 6, 2, 5, 1, 4],
  [1, 5, 6, 8, 9, 4, 7, 2, 3],
  [2, 3, 9, 1, 8, 5, 4, 6, 7],
  [7, 4, 1, 6, 3, 9, 2, 5, 8],
  [5, 6, 8, 2, 4, 7, 1, 3, 9],
  [8, 7, 2, 9, 1, 3, 6, 4, 5],
  [3, 9, 5, 4, 2, 6, 8, 7, 1],
  [6, 1, 4, 5, 7, 8, 3, 9, 6]
];

// 'to_check' table to be filled
let to_check = [
  [], [], [], [], [], [], [], [], []
];

// Define the function F12 to display the content of the "to_verify" table as an HTML table
function F12() {
  let tableHtml = "<table>";

  for (let i = 0; i < 9; i++) {
    tableHtml += "<tr>";

    for (let j = 0; j < 9; j++) {
      tableHtml += "<td>" + to_verify[i][j] + "</td>";
    }

    tableHtml += "</tr>";
  }

  tableHtml += "</table>";

//Display the HTML table
  document.getElementById("table-container").innerHTML = tableHtml;
}

// Define the function F11 to read the table and transfer it to "to_verify"
function F11(table_digits) {
  for (let i = 0; i < 9; i++) {
    to_check[i] = table_digits[i].split(" ");
  }
}
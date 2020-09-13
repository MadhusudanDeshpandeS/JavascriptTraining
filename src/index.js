function doSomething() {
  const users = [
    {
      fname: "Madhu",
      lname: "Deshpande"
    },
    {
      fname: "Mark",
      lname: "Jones"
    },
    {
      fname: "Mary",
      lname: "Vallejo"
    }
  ];
  createTable(users);
  const btn = document.getElementById("myBtn");
  btn.removeEventListener("click", doSomething);
}

function createTable(users) {
  const rootDiv = document.getElementById("app");
  const myTable = document.createElement("table");
  const row1 = document.createElement("tr");
  const cell1 = document.createElement("th");
  const cell2 = document.createElement("th");

  cell1.innerText = "First Name";
  cell2.innerText = "Last Name";

  rootDiv.appendChild(myTable);
  myTable.appendChild(row1);
  row1.appendChild(cell1);
  row1.appendChild(cell2);

  myTable.setAttribute("border", 1);
  myTable.setAttribute("cellpadding", 4);
  myTable.setAttribute("cellspacing", 4);

  generateRows(users, myTable);
}

function generateRows(usersArray, whichTable) {
  for (var i = 0; i < usersArray.length; i++) {
    makeRow(whichTable, usersArray[i].fname, usersArray[i].lname);
  }
}

function makeRow(table, cell1Text, cell2Text) {
  const theRow = document.createElement("tr");
  makeCell(cell1Text, theRow);
  makeCell(cell2Text, theRow);
  table.appendChild(theRow);
}

function makeCell(cellVal, row) {
  const theCell = document.createElement("td");
  theCell.innerText = cellVal;
  row.appendChild(theCell);
}

function setup() {
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", doSomething);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  setup();
});

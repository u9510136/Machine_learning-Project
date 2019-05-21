// from data.js
var UFO = data;

// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

// renderTable renders the UFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < UFO.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = UFO[i];
    var observations = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, create a new cell at set its inner text to be the current value at the current ufo'sobservation
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[observation];
    }
  }
}



// Render the table for the first time on page load
renderTable();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue, txtValue_2, txtValue_3;
  input = document.getElementById("myInput").value.toUpperCase();
  var input_2 = document.getElementById("myInput2").value.toUpperCase();
  var input_3 = document.getElementById("myInput3").value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td_2 = tr[i].getElementsByTagName("td")[2];
    td_3 = tr[i].getElementsByTagName("td")[4];
    if (td || td_2 || td_3) {
      txtValue = td.textContent || td.innerText;
      txtValue_2 = td_2.textContent || td_2.innerText;
      txtValue_3 = td_3.textContent || td_3.innerText;
      if ( (txtValue.toUpperCase().indexOf(input) > -1 || input == "")
      && ( txtValue_2.toUpperCase().indexOf(input_2) > -1 || input_2 == "")
      && ( txtValue_3.toUpperCase().indexOf(input_3) > -1 || input_3 == "") ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

/* function myFunction2() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase() == filter) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
} */

/* function myFunction3() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput3");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
} */
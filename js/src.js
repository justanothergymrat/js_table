var table = document.getElementById("Aliens");
console.log(table);

for (var i=1; i < dataSet.length; i++) {
  console.log(i);
  var row = table.insertRow(i);
    var x=0;
    for (var key in dataSet[x]) {
      console.log(x)
      var cell = row.insertCell(x);
      cell.innerHTML = dataSet[i-1][key];
      x = x+1;
    }
};

var $submitBtn = document.querySelector("#search");
$submitBtn.addEventListener("click", handleSubmitClick);

var $date = document.querySelector("#date");
$date.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
  handleSubmitClick();
}  
});

var $roger = document.querySelector("#roger");
$roger.addEventListener("click", handleSubmitClick);

var $resetBtn = document.querySelector("#reset");
$resetBtn.addEventListener("click", handleResetClick);

var $switcher = document.querySelector("#switcher");
$switcher.addEventListener('change',function() {
  $date.value="";
});



// original filter but would include results in middle of string 
//
// function handleSubmitClick() {
//   event.preventDefault();
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("date");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("Aliens");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       // if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         if (td.innerHTML.toUpperCase().indexOf(filter) ==0){
//         console.log(td.innerHTML.toUpperCase().indexOf(filter));
//         if (td.innerHTML.toUpperCase().indexOf(filter,1) == -1) {
//         tr[i].style.display = "";
//         }
//       } else {
//         console.log(td.innerHTML.toUpperCase().indexOf(filter));
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }



function handleSubmitClick() {
  event.preventDefault();
  var input, filter, column, table, tr, td, i, row;
  input = document.getElementById("date");
  filter = input.value.toUpperCase();
  column = $switcher.value;
  table = document.getElementById("Aliens");
  tr = table.getElementsByTagName("tr");
  row = 0;

  switch (column) {
    case "date":
      row = 0;
      break;
    case "city":
      row = 1;
      break;
    case "state":
      row = 2;
      break;
    case "country":
      row = 3;
      break;
    case "shape":
      row = 4;
      break;
  };

// 2nd iteration - only matches at start
//
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[row];
    if (td) {
        if (td.innerHTML.toUpperCase().startsWith(filter)) {
          // console.log('true');
          tr[i].style.display="";
      } else {
        // console.log(td.innerHTML.toUpperCase().startsWith(filter));
        tr[i].style.display = "none";
      }
    }       
  }
};


// 3rd iteration - only matches month/date searches
//
// function handleSubmitClick() {
//   event.preventDefault();
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("date");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("Aliens");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//         var cell_value =  td.innerHTML.toUpperCase();
//         var castrated = cell_value.substring(0, filter.length);
//         var dblcheck = cell_value.substring(filter.length,filter.length+1);

//         console.log(castrated);
//         console.log(dblcheck);

//         if (castrated === filter){
//           if (dblcheck == "/"){
//             // console.log(dblcheck);
//             // alert('inside');
//             tr[i].style.display = "";
//           } else {
//           // console.log('true');
//           tr[i].style.display="none";
//           }
//       } else {
//         // console.log(td.innerHTML.toUpperCase().startsWith(filter));
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }

function handleResetClick() {
  event.preventDefault();
  $date.value = "";
  var input, filter, table, tr, td, i;
  input = document.getElementById("date");
  filter = input.value.toUpperCase();
  table = document.getElementById("Aliens");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      tr[i].style.display="";
    }
  }
};

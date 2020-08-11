
function generateTable(type){

    // Build an array containing custumers records
    var customers = new Array();
    customers.push(["Customer Id","Age", "Name", "Country"]);
    customers.push([4,23, "John Hammond", "United States"]);
    customers.push([1,49, "Mudassar Khan", "India"]);
    customers.push([3,55, "Suzanne Mathews", "France"]);
    customers.push([2,39, "Robert Schidner", "Russia"]);

        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
        table.id = "myTable";

        //Get the count of columns.
        var columnCount = customers[0].length;

        //Add the header row.
        var row = table.insertRow(-1);
        var i;
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.id = i;
            headerCell.setAttribute("onclick",'sortTable('+ i +')');
            //headerCell.setAttribute("onclick","sortTable()");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
        var headerCell = document.createElement("TH");
        headerCell.id = "btns";
        headerCell.innerHTML = "Buttons";
        row.appendChild(headerCell);

        //Add the data rows.
        var i;
        for (i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        var cell = row.insertCell(-1);
        var buttonAdd = document.createElement("BUTTON");
        buttonAdd.id = "add";
        buttonAdd.className = "addButton";
        buttonAdd.innerHTML = "add";
        buttonAdd.setAttribute("onclick","add()");
        cell.appendChild(buttonAdd);  
        var buttonDelete = document.createElement("BUTTON");
        buttonDelete.id = "delete";
        buttonDelete.className = "deleteButton";
        buttonDelete.innerHTML = "delete";
        buttonDelete.setAttribute("onclick",'deleteRow(this)');
        cell.appendChild(buttonDelete); 
        }

        
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }


    function sortTable(param) {

        var table, rows, switching, i, x, y, isAsc, countAsc;
        table = document.getElementById("myTable");
        switching = true;
        isAsc = true;
        countAsc = 0;

        while (switching) {
    
            switching = false;
            rows = table.rows;
        
            for (i = 1; i < (rows.length - 1); i++) {
        
                x = rows[i].getElementsByTagName("TD")[param];
                y = rows[i + 1].getElementsByTagName("TD")[param];

                if(param == 0 || param == 1){
                    if(isAsc){
                        if (Number(x.innerHTML) > Number(y.innerHTML)) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                            countAsc++;
                            break;
                        }    
                    }else{
                        if (Number(x.innerHTML) < Number(y.innerHTML)) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                            break;
                        }      
                    }                            
                }else{
                    if(isAsc){
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                        countAsc++;       

                        break;
                        }

                    }else{
                        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                            break;
                        }
                
                    }
                }
            }

            if(isAsc && countAsc == 0){
                isAsc = false;
                switching = true;
            }
        }           
        
      }
function add(){
            //Add the data rows.
            var table = document.getElementById("myTable");
            var i;

                row = table.insertRow(-1);
                for (var j = 0; j < 4; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = j;
                }
            var cell = row.insertCell(-1);
            var buttonAdd = document.createElement("BUTTON");
            buttonAdd.id = "add";
            buttonAdd.className = "addButton";
            buttonAdd.innerHTML = "add";
            buttonAdd.setAttribute("onclick","add()");
            cell.appendChild(buttonAdd);  
            var buttonDelete = document.createElement("BUTTON");
            buttonDelete.id = "delete";
            buttonDelete.className = "deleteButton";
            buttonDelete.innerHTML = "delete";
            buttonDelete.setAttribute("onclick",'deleteRow(this)');
            cell.appendChild(buttonDelete); 
            
}

function deleteRow(param){
    var i = param.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(i);
    
}
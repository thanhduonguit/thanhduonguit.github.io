window.onload = function() {
    var showCalendar = document.getElementById("show-calendar");
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var d = new Date();
    var month = d.getMonth(); 
    var year = d.getFullYear();

    // Add event click when click show calendar
    showCalendar.addEventListener("click", show);

    // Main function to show calendar, create with div container
    function show() {
        showCalendar.removeEventListener("click", show);
        var firstDate = monthName[month] + " " + 1 + " " + year;
        var tmp = new Date(firstDate).toDateString();
        var firstDay = tmp.substring(0, 3);
        var dayNo = dayName.indexOf(firstDay);
        var days = new Date(year, month + 1, 0).getDate();
        var calendar = getCalendar(dayNo, days);

        // Create div element
        var div = document.createElement('div');
        div.className = "calendar-container";
        div.appendChild(calendar);
        // Find the next sibling and add new item before it
        if (showCalendar.nextSibling) { 
            showCalendar.parentNode.insertBefore(div, showCalendar.nextSibling);
        // In case the existing item has no sibling after itself, append it    
        } else { 
            showCalendar.parentNode.appendChild(div);
        }
    }

    // Create calendar 
    function getCalendar(dayNo, days) {
        // Create table calendar
        var table = document.createElement('table');
        var tr = document.createElement('tr');

        // Create button prev year 
        var td = document.createElement('td');
        var prevY = document.createElement('button');
        prevY.innerHTML = "<<";
        prevY.onclick = function() {
            if (year > 1950) {
                year--;
                table.parentNode.removeChild(table);
                show();
            }
        };
        td.appendChild(prevY);
        tr.appendChild(td);

        // Create button pre month
        td = document.createElement('td');
        var prevM = document.createElement('button');
        prevM.innerHTML = "<";
        prevM.onclick = function() {
            if (month > 0) {
                month--;
                table.parentNode.parentNode.removeChild(table.parentNode);
                show();
            }
        };
        td.appendChild(prevM);
        tr.appendChild(td);

        // Chose month
        td = document.createElement('td');
        var listMonth = document.createElement('select');
        listMonth.onchange = function() {
            month = parseInt(this.options[this.selectedIndex].value);
            table.parentNode.parentNode.removeChild(table.parentNode);
            show();      
        };

        // Chose year
        var listYear = document.createElement('select');
        listYear.onchange = function() {
            year = parseInt(this.options[this.selectedIndex].value);
            table.parentNode.parentNode.removeChild(table.parentNode);
            show();
        };
        for (var i = 0; i <= 11; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = monthName[i];
            if (i == month) {
                option.selected = true;
            }
            listMonth.appendChild(option);
        }
        for (var j = 1950; j <= (d.getFullYear() + 50); j++) {
            var option = document.createElement('option');
            option.value = j;
            option.text = j;
            if (j == year) {
                option.selected = true;
            }
            listYear.appendChild(option);
        }
        td.appendChild(listMonth);
        td.appendChild(listYear);
        td.setAttribute("colspan", "3");
        tr.appendChild(td);
        
        // Create button next month
        td = document.createElement('td');
        var nextM = document.createElement('button');
        nextM.innerHTML = ">";
        nextM.onclick = function() {
            if (month < 11) {
                month++;
                table.parentNode.parentNode.removeChild(table.parentNode);
                show();
            }
        };
        td.appendChild(nextM);
        tr.appendChild(td);
        table.appendChild(tr);

        // Create button next year 
        td = document.createElement('td');
        var nextY = document.createElement('button');
        nextY.innerHTML = ">>";
        nextY.onclick = function() {
            if (year < d.getFullYear() + 50) {
                year++;
                table.parentNode.removeChild(table);
                show();
            }
        };
        td.appendChild(nextY);
        tr.appendChild(td);

        // Print day in week
        tr = document.createElement('tr');
        for (var week_day = 0; week_day <= 6; week_day++) {
            td = document.createElement('td');
            td.innerHTML = dayName[week_day];
            td.className = "week";
            tr.appendChild(td);
        }
        table.appendChild(tr);

        // Print day empty in month
        tr = document.createElement('tr');
        var c;
        for (c = 0; c <= 6; c++) {
            if (c == dayNo) {
                break;
            }
            td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }

        // Print day in month
        var count = 1;
        for (; c <= 6; c++) {
            td = document.createElement('td');
            if (count == d.getDate() && month == d.getMonth && year == d.getFullYear()) {
                td.style.cssText = {
                    background: aqua
                };
            }
            td.innerHTML = count;
            td.className = "days";
            // Event call function choose date
            td.onclick = chooseDate;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for (var r = 3; r <= 7; r++) {
            tr = document.createElement('tr');
            for (var c = 0; c <= 6; c++) {
                if (count > days) {
                    table.appendChild(tr);
                    return table;
                }
                td = document.createElement('td');
                if (count == d.getDate() && month == d.getMonth() && year == d.getFullYear()) {
                    td.style.cssText = 'background: aqua;';
                }
                td.innerHTML = count;
                td.className = "days";
                // Event call function choose date
                td.onclick = chooseDate;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

    // To print choose day to show calendar element value
    function chooseDate() {
        var div = this.parentNode.parentNode.parentNode;
        showCalendar.value = this.innerHTML + "/" + (parseInt(month) + 1) + "/" + year;
        div.parentNode.removeChild(div);
        showCalendar.addEventListener("click", show);
    }
};

window.onload = function () {
    // Variables
    var input = document.getElementById("show-calendar");
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var activeDay, activeMonth, activeYear, days, count;
    input.addEventListener("click", show);

    // Show calendar
    function show() {
        input.removeEventListener("click", show);
        var calendar = getCalendar();
        var div = document.createElement("div");
        div.className = "calendar-container";
        div.appendChild(calendar);
        input.parentNode.appendChild(div);
        var allDaysInMonth = count - 1;
        for (var i = 1; i <= allDaysInMonth; i++) {
            var element = document.getElementsByClassName("days " + i);
            if (activeDay === element[0].outerText
                && activeMonth === parseInt(element[0].attributes[1].value)
                && activeYear === parseInt(element[0].attributes[2].value)) {
                    element[0].style.background = "#5955a3";
            }
        }
    }

    // Get calendar
    function getCalendar() {
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        table.appendChild(tr);
        printDaysInWeek(table, tr);
        createPrevYear(table, tr);
        createPrevMonth(table, tr);
        createSelectMonth(table, tr);
        createSelectYear(table, tr);
        createNextMonth(table, tr);
        createNextYear(table, tr);
        printInDaysMonth(table, tr);
        return table;
    }

    // Print day in the week
    function printDaysInWeek(table, tr) {
        tr = document.createElement('tr');
        for (var i = 0; i <= 6; i++) {
            td = document.createElement('th');
            td.innerHTML = day_name[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Create prev year btn
    function createPrevYear(table, tr) {
        var td = document.createElement("td");
        var prevY = document.createElement("button");
        prevY.innerHTML = "<<";
        prevY.onclick = function () {
            if (year >= 1951) {
                year--;
                input.innerHTML = year;
                table.parentNode.parentNode.removeChild(table.parentNode);
                show()
            }
        }
        tr.appendChild(td);
        td.appendChild(prevY);
    }

     // Create prev month btn
    function createPrevMonth(table, tr) {
        var td = document.createElement("td");
        var prevM = document.createElement("button");
        prevM.innerHTML = "<";
        prevM.onclick = function () {
            if (month > 0) {
                month--;
                input.innerHTML = month_name[month];
                table.parentNode.parentNode.removeChild(table.parentNode);
                show();
            } else if (month < 1) {
                if (year >= 1951) {
                    year--;
                    month = 11;
                    input.innerHTML = month_name[month];
                    table.parentNode.parentNode.removeChild(table.parentNode);
                    show();
                }
            }
        }
        tr.appendChild(td);
        td.appendChild(prevM);
    }

    // Create select month
    function createSelectMonth(table, tr) {
        var td = document.createElement('td');
        var listMonth = document.createElement('select');
        listMonth.onchange = function () {
            month = parseInt(this.options[this.selectedIndex].value);
            table.parentNode.parentNode.removeChild(table.parentNode);
            show();
        };
        td.setAttribute("colspan", "2");
        tr.appendChild(td);
        td.appendChild(listMonth);
        for (var i = 0; i <= 11; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = month_name[i];
            if (i == month) {
                option.selected = true;
            }
            listMonth.appendChild(option);
        }
    }

    // Create select year
    function createSelectYear(table, tr) {
        var td = document.createElement('td');
        var listYear = document.createElement('select');
        listYear.onchange = function () {
            year = parseInt(this.options[this.selectedIndex].value);
            table.parentNode.parentNode.removeChild(table.parentNode);
            show();
        };
        tr.appendChild(td);
        td.appendChild(listYear);
        for (var i = 1950; i <= d.getFullYear(); i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = [i];
            if (i == year) {
                option.selected = true;
            }
            listYear.appendChild(option);
        }
    }

    // Create next month
    function createNextMonth(table, tr) {
        var td = document.createElement("td");
        var nextM = document.createElement("button");
        nextM.innerHTML = ">";
        nextM.onclick = function () {
            if (month < 11) {
                month++;
                input.innerHTML = month_name[month];
                table.parentNode.parentNode.removeChild(table.parentNode);
                show();
            } else if (month == 11) {
                if (year < d.getFullYear()) {
                    year++;
                    month = 0;
                    input.innerHTML = month_name[month];
                    table.parentNode.parentNode.removeChild(table.parentNode);
                    show();
                }
            }
        }
        tr.appendChild(td);
        td.appendChild(nextM);
    }

    // Create next year
    function createNextYear(table, tr) {
        var td = document.createElement("td");
        var nextY = document.createElement("button");
        nextY.innerHTML = ">>";
        nextY.onclick = function () {
            if (year < d.getFullYear()) {
                year++;
                input.innerHTML = year;
                table.parentNode.parentNode.removeChild(table.parentNode);
                show();
            }
        }
        tr.appendChild(td);
        td.appendChild(nextY);
        table.appendChild(tr);
    }

    // Print day in month
    function printInDaysMonth(table, tr) {
        var first_date = month_name[month] + " " + year;
        var tmp = new Date(first_date).toDateString();
        var first_day = tmp.substring(0, 3);
        var day_no = day_name.indexOf(first_day);
        if (day_no > 0) {
            var tr = document.createElement('tr');
            var c;
            for (c = 0; c <= 6; c++) {
                if (c == day_no) {
                    break;
                }
                var td = document.createElement('td');
                td.innerHTML = "";
                tr.appendChild(td);
                table.appendChild(tr);
            }
        }
        // Days in month
        days = new Date(year, month + 1, 0).getDate();
        count = 1;
        for (; c <= 6; c++) {
            var td = document.createElement('td');
            if (count == d.getDate() && month == d.getMonth && year == d.getFullYear()) {
                td.style.cssText = "background: aqua;";
            }
            td.innerHTML = count;
            td.className = "days " + count;
            // Event call function choseDate
            td.onclick = choseDate;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for (var r = 3; r <= 7; r++) {
            var tr = document.createElement('tr');
            for (var c = 0; c <= 6; c++) {
                if (count > days) {
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                if (count == d.getDate() && month == d.getMonth() && year == d.getFullYear()) {
                    td.style.cssText = "background: aqua;";
                }
                td.innerHTML = count;
                td.className = "days " + count;
                td.setAttribute("month", (parseInt(month) + 1));
                td.setAttribute("year", year);
                // Event call function choseDate
                td.onclick = choseDate;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }

    // To print chose day to input element value
    function choseDate() {
        var div = this.parentNode.parentNode.parentNode;
        activeDay = this.innerHTML;
        activeMonth = parseInt(month) + 1;
        activeYear = year;
        input.value = activeDay + "/" + (activeMonth + "/" + activeYear);
        div.parentNode.removeChild(div);
        input.addEventListener("click", show);
    }
}
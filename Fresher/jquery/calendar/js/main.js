// Variables
var input = $("#show-calendar");
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();
var activeDay, activeMonth, activeYear, days, count;

$("#show-calendar").click(function () { 
    show();
});

// Print calender
function show() {
    $("#show-calendar").off("click");
    var calendar = getCalendar();
    var div = $("<div>", {id: "calendar", "class": "calendar-container"});
    div.append(calendar);
    div.insertAfter(input);
    var allDaysInMonth = count - 1;
    for (var i = 1; i <= allDaysInMonth; i++) {
        var element = $(".days-" + i);
        if (activeDay === element[0].outerText
            && activeMonth === parseInt(element[0].attributes[1].value)
            && activeYear === parseInt(element[0].attributes[2].value)) {
                element[0].style.background = "#5955a3";
        }
    }
}

// Create calender
function getCalendar() {
    var table = $("<table>");
    var tr = $("<tr>");
    table.append(tr);
    printDayInWeek(table, tr);
    createPrevYear(table, tr);
    createPrevMonth(table, tr);
    createSelectMonth(table, tr);
    createSelectYear(table, tr);
    createNextMonth(table, tr);
    createNextYear(table, tr);
    daysInMonth(table, tr);
    return table;
}

// Print day in week
function printDayInWeek(table, tr) {
    var tr = $("<tr>");
    for (var i = 0; i <= 6; i++) {
        td = $("<th>");
        td.html(day_name[i]);
        tr.append(td);
    }
    table.append(tr);
}

// Print button prev year
function createPrevYear(table, tr) {
    var td = $("<td>");
    var prevY = $("<button>");
    prevY.html("<<");
    prevY.click(function() {
        if (year >= 1951) {
            year--;
            input.text(year);
            table.parent().remove();
            show();
        }
    });
    td.append(prevY);
    tr.append(td);
}

// Print button prev year
function createPrevMonth(table,tr) {
    var td = $("<td>");
    var prevM = $("<button>");
    prevM.html("<");
    prevM.click(function() {
        if(month > 0) {
            month--;
            table.parent().remove();
            show();
        } else if (month < 1) {
            if (year >= 1951) {
                year--;
                month = 11;
                table.parent().remove();
                show();
            }
        }
    });
    td.append(prevM);
    tr.append(td);
}

// Print button select month
function createSelectMonth(table,tr) {
    var td = $("<td>");
    var listMonth = $("<select>");
    listMonth.change(function () { 
        month = parseInt(this.options[this.selectedIndex].value); 
        table.parent().remove();
        show();
    });
    for (var i = 0; i <= 11; i++) {
        var option = $("<option>");
        option.val(i);
        option.text(month_name[i]);
        if (i == month) {
            option.prop("selected", true);
        }
        listMonth.append(option);
    }
    td.attr("colspan", "2");
    tr.append(td);
    td.append(listMonth);
}

// Print button select year
function createSelectYear(table,tr) {
    var td = $("<td>");
    var listYear = $("<select>");
    listYear.change(function() {
        year = parseInt(this.options[this.selectedIndex].value);
        table.parent().remove();
        show();
    });
    for (var j = 1950; j <= d.getFullYear(); j++) {
        var option = $("<option>");
        option.val(j);
        option.text(j);
        if (j == year) {
            option.prop("selected", true);
        }
        listYear.append(option);
    }
    tr.append(td);
    td.append(listYear);
}

// Print button next month
function createNextMonth(table,tr) {
    var td = $("<td>");
    var prevM = $("<button>");
    prevM.html(">");
    prevM.click(function() {
        if(month < 11) {
            month++;
            table.parent().remove();
            show();
        } else if (month == 11) {
            if (year < d.getFullYear()) {
                year++;
                month = 0;
                table.parent().remove();
                show();
            }
        }
    });
    td.append(prevM);
    tr.append(td);
}

// Print button next year
function createNextYear(table,tr) {
    var td = $("<td>");
    var prevY = $("<button>");
    prevY.html(">>");
    prevY.click(function() {
        if (year < d.getFullYear()) {
            year++;
            table.parent().remove();
            show();
        }
    });
    td.append(prevY);
    tr.append(td);
    table.append(tr);
}

// Print days in month
function daysInMonth(table,tr) {
    var first_date = month_name[month] + " " + 1 + " " + year;  
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3); 
    var day_no = day_name.indexOf(first_day);
    tr = $("<tr>");
    var c;
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        td = $("<td>");
        td.empty();
        tr.append(td);
        table.append(tr);
    }

    count = 1;
    days = new Date(year, month + 1, 0).getDate();
    for (; c <= 6; c++) {
        td = $("<td>");
        if (count == d.getDate() && month == d.getMonth && year == d.getFullYear()) {
            td.css({
                "background": "aqua"
            });
        }
        td.html(count);
        td.addClass("days-" + count);
        td.css({ "cursor": "pointer"});
        td.attr("month", (parseInt(month) + 1));
        td.attr("year", year);
        // Event call function choseDate
        td.click(function(e){
            choseDate(e);
        });
        count++;
        tr.append(td);
    }
    table.append(tr);

    for (var r = 3; r <= 7; r++) {
        tr = $("<tr>");
        for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.append(tr);
                return table;
            }
            td = $("<td>");
            if (count == d.getDate() && month == d.getMonth() && year == d.getFullYear()) {
                td.css({
                    "background": "aqua"
                });
            }
            td.html(count);
            td.addClass("days-" + count);
            td.css({ "cursor": "pointer"});
            td.attr("month", (parseInt(month) + 1));
            td.attr("year", year);
            // Event call function choseDate
            td.click(function(e){
                choseDate(e);
            });
            count++;
            tr.append(td);
        }
        table.append(tr);
    }
}

// Print date in input
function choseDate(e) {
    activeDay = $(e.target).text();
    activeMonth = (parseInt(month) + 1);
    activeYear = year;
    var div = $(e.target).closest(".calendar-container");
    var date = activeDay + "/" + activeMonth + "/" + activeYear;
    input.val(date);
    div.remove();
    $("#show-calendar").click(function() {
        show();
    });
}
var calendar = {
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
};
var sel = $(`[data-num]`);
var calEnts = Object.entries(calendar);
var calVals = Object.values(calendar);
var saveBtn = $("button");
var txtArea = $("textarea");

//clock on page load
setInterval(function () {
    var cTime = moment().format("MM/DD/YYYY hh:mm:ss");

    $("#clock").text(cTime);

}, 1000);

//on page load, clears text areas and grabs saved text from local storage
function initDisplay() {

    //clears all text areas
    for (i = 0; i < calEnts.length; i++) {
        $(`[data-time = "${i}"]`).text("");
    }

    //If there's something in local storage, grab the calendar string and turn it back into an object
    if (localStorage.getItem("calendar") !== null) {
        var displayCal = JSON.parse(localStorage.getItem("calendar"));

        //loops over elements with data-time custom attr. object.values of displaycal comes back with an array, the text areas have their values set to the value of the array at index i.
        for (i = 0; i < Object.values(displayCal).length; i++) {
            $(`[data-time = ${i}]`).val(displayCal[i]);
        };
    };
};
initDisplay();

//conditional styling based on current time
function colorize() {
    //gets current time and turns it into an integer for comparison
    var comTime = parseInt(moment().format("H"));

    for (i = 8; i < 18; i++) {
        //selects value of data-num at text area, 
        var cstmObjVal = parseInt(sel[i - 8].attributes[1].nodeValue);

        //compares data-num value to current time value
        if (cstmObjVal > comTime) {
            $(`[data-num=${i}]`).addClass("future");
        } else if (cstmObjVal < comTime) {
            $(`[data-num=${i}]`).addClass("past");
        } else if (cstmObjVal == comTime) {
            $(`[data-num=${i}]`).addClass("present");
        };
    }
}
colorize();

//when any of the save buttons are clicked
saveBtn.click(function (event) {
    event.stopPropagation();

    //clears local storage to prevent doubling of text when it's pulled back out of local storage
    localStorage.clear();

    //loops through text areas and stores their content to an object that corresponds with the data-time custom attribute, saves the object to local storage
    for (i = 0; i < calEnts.length; i++) {
        var newContent = $(`[data-time = ${i}]`).val();
        calEnts[i] = [i, newContent];
        var editedCal = Object.fromEntries(calEnts);
        localStorage.setItem("calendar", JSON.stringify(editedCal));
    };

    //clears text areas to prevent doubled display of text when pulled from local storage
    for (i = 0; i < 10; i++) {
        $(`[data-time = ${i}]`).text("");
    }

    //gets calendar item from local storage and turns it back into an obj
    JSON.parse(localStorage.getItem("calendar"));

    //sets the value of text areas based on data-time attr and the corresponding obj entry
    for (i = 0; i < calEnts.length; i++) {
        $(`[data-time = ${i}]`).val(calEnts[i][1]);
    }
}
);

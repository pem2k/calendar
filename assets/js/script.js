
var saveBtn = $("button")
var i=0;
var txtArea = $("textarea")
var txtAreaCstm = $(["data-time"]).val(i)
var calendar= {
    "0": undefined,
    "1":undefined,
    "2":undefined,
    "3":undefined,
    "4":undefined,
    "5":undefined,
    "6":undefined,
    "7":undefined,
    "8":undefined,
    "9":undefined
}

//clock on page load
setInterval(function(){    
    var cTime = moment().format("MM/DD/YYYY hh:mm:ss");
    
    $("#clock").text(cTime);

},1000);

//on page load display val to text area from local storage by data-time=i from calendar.timekey


//on button click
    //save text in text area to object called calendar, keys are times as strings "800": text area text
    //clear text areas
    //display calendar object, key "800" displays at 8:00am text area etcs


// clear local storage
//for loop
//save current txt area of data-time=i to calendar object
//stringify object and save to local storage
//clear all text areas
//display object keys back to text area from local storage by setting values of text areas with data-time=i from calendar.timekey
    saveBtn.click(function(){

        localStorage.clear();

        for(i=0; i< 10; i++){
            var strI = i.toString()
            calendar.strI =  txtAreaCstm.text()
            console.log(calendar.strI)
        };

        localStorage.setItem(JSON.stringify(calendar));

        for(i=0; i< 10; i++){
        txtAreaCstm.text("")
        }

        var displayCal = localStorage.getItem(JSON.parse(calendar));

        for(i=0; i<10; i++){
            var strI = i.toString()
            textAreaCstm.text(displayCal.strI)
    }
});



//conditional styling
    //on page load, if the time of a cell has passed, style it grey
    //else if time of cell is current hour, style it red
    // 
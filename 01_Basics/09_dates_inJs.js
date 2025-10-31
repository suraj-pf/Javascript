// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTime()); 


// let date = new Date()

// console.log(date,typeof date); // type of date is object 
// console.log(date.getDate()); // gets date i.e 1 or 2 
// console.log(date.getDay()); // no of the day of week for friday - 5
// console.log(date.getMonth()); // Gets the zero-based month index (e.g., 9 for October) 
// console.log(date.getFullYear()); // gets the no of the year
// console.log(date.getTime()); // gets the time from 1 jan 1970 in miliseconds


// let mydate = new Date(2023,0,21)
// let mydate = new Date(2023,0,21,15,30,21)
// let mydate = new Date(2023,00,21)
// let mydate = new Date("2023-01-21")
// console.log(mydate.toDateString()); // op - Sat Jan 21 2023 [i.e january starts on 0 ]
// console.log(mydate.toLocaleString()); // op - 1/21/2023, 3:30:21 AM [date is24 hr format ]


let mydate = new Date("2023-01-21")
console.log(mydate.getTime()); // op - 1/21/2023, 3:30:21 AM [date is24 hr format ]
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

mydate.toLocaleString('default',
    {
        weekday:"long",
        // timeZone:"",
        month:"long"
    }
)
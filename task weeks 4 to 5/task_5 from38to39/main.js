// ****************** 1 ***************
// let day = "   friday  ";
// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// let day = "Monday";
// let day = "Monday";
let day = "Tuesday";
// let day = "Wednesday";
// let day = "World";
day = `${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`
console.log(day);
switch (day) {
    case `Friday`:
        console.log(`No Appointments Available`);
        break;
    case `Saturday`:
        console.log(`No Appointments Available`);
        break;
    case `Sunday`:
        console.log(`No Appointments Available`);
        break;
    case `Monday`:
        console.log(`From 10:00 AM To 5:00 PM`);
        break;
    case `Tuesday`:
        console.log(`From 10:00 AM To 6:00 PM`);
        break;
    case `Thursday`:
        console.log(`From 10:00 AM To 5:00 PM`);
        break;
    case `Wednesday`:
        console.log(`From 10:00 AM To 7:00 PM`);
        break;
    default:
        console.log(`Its Not A Valid Day`);
    break;
}
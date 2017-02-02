/**
 * Created by Alex on 8/30/2016.
 */
function findDailyIntake(lbs) {
    var dailyIntake;
    dailyIntake = (lbs * (2/3)) //inputting weight(lbs) to convert to daily recommended water intake in ounces
    return dailyIntake;
}
console.log(findDailyIntake(260)); //using console.log to output result of function convertToOz()
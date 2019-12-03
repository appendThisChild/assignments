const todayDate = () => {
    const today = new Date()
    const originalTime = today.setHours(0)
    console.log(originalTime)
    const utcHour = today.getUTCHours()
    const mountainTimeHour = utcHour - (7 + dST(today))
    // const todayInMountainTime = today.setHours(mountainTimeHour)
    const originalTimeHours = originalTime.getHours()
    console.log(originalTimeHours)
    // console.log(today.getTime())
    // console.log(todayInMountainTime)
}

const mountainTime = today => {
    

}

const dST = today => {
    const jan = new Date(today.getFullYear(), 0, 1)
    const jul = new Date(today.getFullYear(), 6, 1)
    const dST = today.getTimezoneOffset() - Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    return dST / 60
}


// dST()
// todayDate()

const newDate = new Date(1568346621323)

const dateObj = {
    appDate: newDate
}
const appArr = []

appArr.push(dateObj)


const matchingDates = appArr.filter(obj => {
    return obj.appDate.getFullYear() === new Date().getFullYear() && obj.appDate.getMonth() === new Date().getMonth() && obj.appDate.getDate() === new Date().getDate()
})
// console.log(new Date())
// console.log(appArr)
// console.log(matchingDates)
    

// const changingDateHourBy30Minutes = new Date().setMinutes(9.5 * 60)
// const changingDateHourBy60minutes = new Date().setHours(9)
// // console.log(new Date())
// console.log(new Date(changingDateHourBy30Minutes).getHours())
// console.log(new Date(changingDateHourBy30Minutes).getMinutes())
// console.log(new Date(changingDateHourBy60minutes).getHours())
// console.log(new Date(changingDateHourBy60minutes).getMinutes())



////

// if (newTime + .5 === newEndTime){
//     for (let k = 0; k < 2; k++){
//         if (k === 0){
//             generalTimesAvailableForSelectedDay.push([newTime, 0])
//         } else if (k === 1){
//             generalTimesAvailableForSelectedDay.push([newTime, 30])
//         }
//     }
//     break;
// } else if (newTime === newEndTime) {
//     generalTimesAvailableForSelectedDay.push([newTime, 0])
//     break;
// } else {
//     for (let k = 0; k < 2; k++){
//         if (k === 0){
//             generalTimesAvailableForSelectedDay.push([newTime, 0])
//         } else if (k === 1){
//             generalTimesAvailableForSelectedDay.push([newTime, 30])
//         }
//     }
// }


////

// console.log( 9 % 1 === .5)

// var numbers = [12,30,5,62,18,53]

// const num = numbers.findIndex(function(number){
//     return number === 60
// })
// if (num !== -1){
//     console.log(numbers.splice(num, 1))
//     console.log(numbers)
// }


const now = new Date()
const before = new Date(2018, 11, 11)
const after = new Date(2020, 11, 11)
const arr = [before, after]

const foundDates = arr.filter(arr => arr > now)
// console.log(foundDates)

const minuteChange = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), 55)
// console.log(minuteChange)
minuteChange.setMinutes(minuteChange.getMinutes() + 10)
// console.log(minuteChange)

// thisMoment = () => {
//     const thisMoment = new Date()
//     const thisMomentInYear = thisMoment.getFullYear()
//     const thisMomentInMonth = thisMoment.getMonth()
//     const thisMomentInDate = thisMoment.getDate()
//     const thisMomentInMountainTime = new Date(thisMoment.setHours(thisMoment.getUTCHours() - (7 + this.dST(thisMoment))))
//     if (thisMomentInMountainTime.getDate() < thisMomentInDate) {
//         thisMomentInMountainTime.setFullYear(thisMomentInYear, thisMomentInMonth, thisMomentInDate)
//     }
//     return thisMomentInMountainTime
// }
// dST = today => {
//     const jan = new Date(today.getFullYear(), 0, 1)
//     const jul = new Date(today.getFullYear(), 6, 1)
//     const dST = today.getTimezoneOffset() - Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
//     return dST / 60
// }


// console.log(!isNaN("string"))

// console.log(!isNaN(0))
// console.log(!isNaN(" s0"))
// console.log(!isNaN(" 0s"))
// console.log(!isNaN(" 0"))
console.log(!isNaN(" "))
console.log(!isNaN(""))

// console.log(new Date(2019))


// console.log(new Date(1570741736763))
// console.log(new Date(1570741736763))
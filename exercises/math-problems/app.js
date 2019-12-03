const working = (num, months) => {
    const allPayments = []
    const normalBills = {
        gasTravelFromSLCAndHome: 3 * 6 * 4,
        foodAtHome: (5 * 4 + 2.5 * 3) * 4,
        foodInCity: 10 * 3 * 4
        // coffee: 3 * 3 * 4
    }
    const monthlyBills = {
        phoneBill: 40,
        carLoan: 201,
        amazonPrime: 7,
        gymMembership: 85,
        adobeLR: 10,
        towneStorage: 43,
        misterCarwash: 33,
        spotify: 11,
        oilChange: 50,
        carInsurance: 99
    }
    allPayments.push(...Object.values(normalBills), ...Object.values(monthlyBills))
    const totalBills = allPayments.reduce((total, sum) => total + sum, 0) * months
    const monthlyTotal = Object.values(monthlyBills).reduce((total, sum) => total + sum, 0) * months
    const normalTotal = Object.values(normalBills).reduce((total, sum) => total + sum, 0) * months

    const earnings = ((num * 30) * 4) * months 
    const gasSpentWhileDriving = earnings * .15
    const profit = earnings - gasSpentWhileDriving
    const breakDown = {
        moneyLeftOver: profit - totalBills,
        moneyBreakDown: {
            earned: earnings,
            deducted: gasSpentWhileDriving,
            monthlyDeducted: totalBills
        },
        monthly: {
            bills: monthlyBills,
            total: monthlyTotal
        },
        normal: {
            bills: normalBills,
            total: normalTotal
        }
    }
    return breakDown
}
const vacation = (anHour, durationMonths) => {
    const { monthly, moneyLeftOver } = working(anHour, durationMonths)
    const food = 10 * 7 * 4
    const travel = 1000
    const stay = 1000
    const monthBack = moneyLeftOver * 2
    // could go on infinite months of vacation if $20 an hour every time I came back for two months
    return travel + stay + food + monthly.total - monthBack
}

console.log("Five months work")
// console.log(vacation(20, 1))
console.log(working(15, 5).moneyLeftOver)
console.log(working(20, 5).moneyLeftOver)
console.log(working(25, 5).moneyLeftOver)


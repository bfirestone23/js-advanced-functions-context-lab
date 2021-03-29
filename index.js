/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(array){
    return array.map(a => createEmployeeRecord(a))
}

const createTimeInEvent = function(datetime){
    let [date, hour] = datetime.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

const createTimeOutEvent = function(datetime){
    let [date, hour] = datetime.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date).hour
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour
    let hrs = (timeOut - timeIn) / 100
    return hrs
}

const wagesEarnedOnDate = function(date){
    let wage = (this.payPerHour * hoursWorkedOnDate.call(this, date))
    return parseFloat(wage.toString())
}

const allWages = function(){
    let dates = this.timeInEvents.map(function(e){
        return e.date
    })
    let wages = dates.reduce(function(sum, date){
        return sum + wagesEarnedOnDate.call(this, date)
    }.bind(this), 0)

    return wages
}

const calculatePayroll = function(records){
    return records.reduce(function(sum, record){
        return sum + allWages.call(record);
    }, 0)
}

const findEmployeeByFirstName = function(src, firstname){
    return src.find(r => r.firstName === firstname);
}
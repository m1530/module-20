function findLeapYearOrNot(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "Your current year is leap year";
    }
    return "your current year is not leap year";
}

console.log(findLeapYearOrNot(2021));
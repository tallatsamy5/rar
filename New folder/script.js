function calculate() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let currentDate = new Date();

    let daysLived = Math.floor((currentDate - birthdate) / (1000 * 60 * 60 * 24));
    
    let nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    let daysUntilNextBirthday = Math.floor((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    
    let nextBirthdayFormatted = nextBirthday.toDateString(); // تنسيق التاريخ

    document.getElementById('age').innerHTML = 'You have lived ' + daysLived + ' days so far.';
    document.getElementById('nextBirthday').innerHTML = 'Next birthday is in ' + daysUntilNextBirthday + ' days, on ' + nextBirthdayFormatted + '.';
}
function calculate() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let currentDate = new Date();

    let daysLived = Math.floor((currentDate - birthdate) / (1000 * 60 * 60 * 24));

    let nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    let timeUntilNextBirthday = nextBirthday - currentDate;
    let daysUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
    let monthsUntilNextBirthday = Math.floor(daysUntilNextBirthday / 30); 
    let remainingDays = daysUntilNextBirthday % 30;

    let nextBirthdayFormatted = nextBirthday.toDateString();

    document.getElementById('age').innerHTML = 'You have lived ' + daysLived + ' days so far.';
    document.getElementById('nextBirthday').innerHTML = 'Next birthday is in ' +
        monthsUntilNextBirthday + ' months and ' + remainingDays + ' days, on ' + nextBirthdayFormatted + '.';
}

const age = document.querySelector('.yearsDisplayDiv');
const currentMonth = new Date().getMonth() + 1;
const yearInput = document.querySelector('.yearInput');
const monthInput = document.querySelector('.monthInput')
const dayInput = document.querySelector('.dayInput')

const calculateButton = document.querySelector('.button');

calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
    const birthday = new Date(
        yearInput.value,
        monthInput.value - 1,
        dayInput.value
    );

    age.textContent = getExactAge(birthday);
    console.log(getExactMonthsAfter(birthday));
    console.log(getDaysAfterLastBirthday(birthday));
}

function getExactAge(birthday) {
    const now = new Date();
    const yearsDiff = now.getFullYear() - birthday.getFullYear();

    if (now.getMonth() < birthday.getMonth() ||
        (now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate())) {
        return yearsDiff - 1;
    }

    return yearsDiff - 1;
}

function getExactMonthsAfter(birthday) {
    const monthsDiff = currentMonth - (birthday.getMonth() + 1);
    if (monthsDiff < 0) {
        return 12 + monthsDiff;
    }
    return monthsDiff;
}

function getDaysAfterLastBirthday(birthday) {
    const today = new Date();
    const lastBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (lastBirthday > today) {
        lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
    }
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffDays = Math.round((today - lastBirthday) / oneDay);
    return diffDays;
}
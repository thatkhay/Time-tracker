const age = document.querySelector('.yearsDisplayDiv');
const months = document.querySelector('.monthsDisplayDiv');
const days = document.querySelector('.daysDisplayDiv');
const yearInput = document.querySelector('.yearInput');
const monthInput = document.querySelector('.monthInput');
const dayInput = document.querySelector('.dayInput');
const body = document.querySelector('body');
const calculateButton = document.querySelector('.button');

const currentMonth = new Date().getMonth() + 1;

calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
    if (!yearInput.value || !monthInput.value || !dayInput.value) {
        age.textContent = '0';
        months.textContent = '0';
        days.textContent = '0';
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Make sure all input are filled correctly';
        paragraph.style.color = 'red'
        body.appendChild(paragraph);
        setTimeout(() => paragraph.remove(), 3000);
        return;
    }

    const birthday = new Date(yearInput.value, monthInput.value - 1, dayInput.value);

    age.textContent = `${getExactAge(birthday)} year(s)`;
    months.textContent = `${getExactMonthsAfter(birthday)} month(s)`;
    days.textContent = `${getDaysAfterLastBirthday(birthday)} day(s)`;
}

function getExactAge(birthday) {
    const now = new Date();
    const yearsDiff = now.getFullYear() - birthday.getFullYear();

    if (now.getMonth() < birthday.getMonth() || (now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate())) {
        return yearsDiff - 1;
    }

    return yearsDiff;
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
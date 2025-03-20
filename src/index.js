console.log('Hello, world!');

//Data

//DOM
const dom = {
    birthdayInput: document.getElementById('birthday'),
    enterButton: document.getElementById('enter-button'),
    display: document.getElementById('display')
};

//Functions
const todayAge = (birthday) => {
    //Get the date value of today and the birthday
    const birthdayValue = new Date(dom.birthdayInput.value);
    const todayValue = new Date();

    //Format the dates to DD/MM/YYYY

    // const formatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    // const formattedBirthday = formatter.format(birthdayValue);
    // const formattedToday = formatter.format(todayValue)
    // console.log(formattedBirthday);
    // console.log(formattedToday);
    // const [ birthDay, birthMonth, birthYear] = formattedBirthday.split('/').map(Number);
    // const [ today, thisMonth, thisYear] = formattedToday.split('/').map(Number);

    //Get data from dates

    const birthDay = birthdayValue.getDate();
    const birthMonth = birthdayValue.getMonth();
    const birthYear = birthdayValue.getFullYear();
    const today = todayValue.getDate();
    const thisMonth = todayValue.getMonth();
    const thisYear = todayValue.getFullYear();

    //Calculate the age

    //if the birthday is in the future

    let message = '';
    let currentAge = thisYear - birthYear;

    if (
        thisYear < birthYear ||
        (thisYear === birthYear && birthMonth > thisMonth) ||
        (thisYear === birthYear && birthMonth === thisMonth && birthDay > today)
    ) {
        message = 'You are not born yet.';
    }

    // Today is the birth day.
    if (
        thisYear === birthYear &&
        birthMonth === thisMonth &&
        birthDay === today
    ) {
        message = 'Welcome to the world!';
    }

    // Less than 1 year old
    if (
        currentAge === 0 ||
        (thisYear === birthYear && thisMonth > birthMonth) ||
        (thisYear === birthYear &&
            thisMonth === birthMonth &&
            today > birthDay) ||
        (thisYear === birthYear + 1 && birthMonth < thisMonth) ||
        (thisYear === birthYear + 1 &&
            birthMonth === thisMonth &&
            birthDay < today)
    ) {
        message = 'You are still a baby!';
    }

    if (
        thisYear > birthYear &&
        (thisMonth < birthMonth ||
            (thisMonth === birthMonth && birthDay < today))
    ) {
        currentAge = currentAge - 1;
    }

    // 1 year old
    if (currentAge === 1) {
        message = 'You are 1 year old.';
    }

    // more than 1 year old

    if (currentAge > 1) {
        message = `You are ${currentAge} years old.`;
    }

    // Add happy birthday message if today is the birthday
    if (today === birthDay && thisMonth === birthMonth) {
        message = 'Happy Birthday! ' + message;
    }

    return message;
};

//Execution

dom.enterButton.addEventListener('click', () => {
    dom.display.innerText = todayAge(dom.birthdayInput);
});

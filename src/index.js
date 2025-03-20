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

    if (isNaN(birthdayValue.getTime())) {
        return 'Please enter a valid date.';
    }

    //Get data from dates

    const birthDay = birthdayValue.getDate();
    const birthMonth = birthdayValue.getMonth();
    const birthYear = birthdayValue.getFullYear();
    const today = todayValue.getDate();
    const thisMonth = todayValue.getMonth();
    const thisYear = todayValue.getFullYear();

    //Calculate the age

    let message = '';
    let currentAge = thisYear - birthYear;

    //if the birthday is in the future
    // if (
    //     thisYear < birthYear ||
    //     (thisYear === birthYear && birthMonth > thisMonth) ||
    //     (thisYear === birthYear && birthMonth === thisMonth && birthDay > today)
    // ) {
    //     message = 'You are not born yet.';
    // }

    //Update current age when birthday is later in the year

    if (
        (thisYear > birthYear &&
            (thisMonth < birthMonth ||
                (thisMonth === birthMonth && birthDay > today))) ||
        (thisYear === birthYear && thisMonth === birthMonth && birthDay > today)
    ) {
        currentAge--;
    }

    // Read current age

    // Not born

    if (currentAge < 0) {
        message = 'You are not born yet.';
    }

    // less than 1 year old
    if (currentAge === 0) {
        message = 'You are still a baby!';
    }
    // Today is the birth day.
    if (
        thisYear === birthYear &&
        birthMonth === thisMonth &&
        birthDay === today
    ) {
        message = 'Welcome to the world!';
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
    if (
        thisYear >= birthYear &&
        today === birthDay &&
        thisMonth === birthMonth
    ) {
        message = 'Happy Birthday! ' + message;
    }

    return message;
};

//Execution

dom.enterButton.addEventListener('click', () => {
    dom.display.innerText = todayAge(dom.birthdayInput);
});

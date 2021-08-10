//Random messages to be displayed
const greetings = ['Hello', 'Hi', 'Howdy', 'Lovely day', 'Hey'];
const messages = ['The early bird gets the worm, but the second mouse gets the cheese.', 'Your road to glory will be rocky, but fulfilling.', 
'Set yourself up to experience what you love.', 'All you need is love.', 'Don’t pursue happiness – create it.', 'Success lies in the hands of those who wants it.', 
'People learn little from success, but much from failure.', 'A ship in harbor is safe, but that’s not why ships are built.', 'All things are difficult before they are easy.', 
'A faithful friend is a strong defense.', 'If you want the rainbow, you have to tolerate the rain.', 'Big journeys begin with a single step.'];
const farewell = ['Goodbye', 'Bye', 'Have a nice day', 'Take care', 'Best of luck'];


//The name the user puts in
const username = '';


//Random greetings
const randomGreetings = arr => {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};


//Random messages
const randomMessage = arr => {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};


//Random farewell
const randomFarewell = arr => {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};


//Add to console
username ? console.log(`${randomGreetings(greetings)}, ${username}!`) : console.log(randomGreetings(greetings) + '!');
console.log(randomMessage(messages));
console.log(randomFarewell(farewell) + '!');
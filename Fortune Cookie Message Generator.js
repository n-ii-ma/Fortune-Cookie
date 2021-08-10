//Random messages to be displayed

const greetings = ['Hello', 'Hi', 'Howdy', 'Lovely day', 'Hey'];
const messages = ['The early bird gets the worm, but the second mouse gets the cheese.', 'Your road to glory will be rocky, but fulfilling.', 
'Set yourself up to experience what you love.', 'All you need is love.', 'Don’t pursue happiness – create it.', 'Success lies in the hands of those who wants it.', 
'People learn little from success, but much from failure.', 'A ship in harbor is safe, but that’s not why ships are built.', 'All things are difficult before they are easy.'];
const farewell = ['Goodbye', 'Bye', 'Have a nice day', 'Thanks for using our services', 'Be sure to come back'];

//Username

const username = 'Nima';

//Random greetings

const randomGreetings = arr => {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};

username ? console.log(`${randomGreetings(greetings)}, ${username}!`) : console.log(randomGreetings(greetings) + '!');
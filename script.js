//Random messages to be displayed
const greetings = ['Hello', 'Hi', 'Howdy', 'Lovely day', 'Hey'];
const messages = ['Be not afraid of growing slowly, be afraid only of standing still.', 'Your road to glory will be rocky, but fulfilling.', 
'Set yourself up to experience what you love.', 'All you need is love.', 'Don’t pursue happiness – create it.', 'Success lies in the hands of those who wants it.', 
'People learn little from success, but much from failure.', 'A ship in harbor is safe, but that’s not why ships are built.', 'All things are difficult before they are easy.', 
'A faithful friend is a strong defense.', 'If you want the rainbow, you have to tolerate the rain.', 'Big journeys begin with a single step.'];
const farewells = ['Goodbye', 'Bye', 'Have a nice day', 'Take care', 'Best of luck'];


//The name the user puts in
const username = '';


//Random messages
const randomMessages = arr => arr[Math.floor(Math.random() * arr.length)];


//Add to console
username ? console.log(`${randomMessages(greetings)}, ${username}!`) : console.log(randomMessages(greetings) + '!');
console.log(randomMessages(messages));
console.log(randomMessages(farewells) + '!');
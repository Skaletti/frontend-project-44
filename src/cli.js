import readlineSync from 'readline-sync';

const greetingCall = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
}

export { greetingCall }
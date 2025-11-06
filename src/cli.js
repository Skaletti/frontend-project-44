import readlineSync from 'readline-sync'

export const welcome = () => {
  const name = readlineSync.question('May I have your name?')
  console.log(`Hello, ${name}`)
  return name
}

function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min)) + min
}

export const evenGame = (name) => {
  let correctCount = 0
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (correctCount < 3) {
    const random = randomNum(1, 100)

    console.log(`Question: ${random}`)
    const ans = readlineSync.question('Your answer:')
    const correct = random % 2 === 0 ? 'yes' : 'no'
    if (ans === correct) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
Let's try again, ${name}!`)
      break
    }
    if (correctCount === 3) {
      console.log(`Congratulations, ${name}!`)
      break
    }
  }
}

const calculateCorrect = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return null
  }
}

export const calcGame = (name) => {
  let correctCount = 0
  console.log('What is the result of the expression?')

  while (correctCount < 3) {
    const random1 = randomNum(1, 100)
    const random2 = randomNum(1, 100)
    const operators = ['+', '-', '*']
    const randomOperator = operators[randomNum(0, operators.length - 1)]

    const correct = calculateCorrect(random1, random2, randomOperator)
    const expression = `${random1} ${randomOperator} ${random2}`

    console.log(`Question: ${expression}`)
    const ans = readlineSync.question('Your answer:')

    if (Number(ans) === correct) {
      console.log('Correct!')
      correctCount += 1
    }

    else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}. Let's try again, ${name}!`)
      break
    }
  }

  if (correctCount === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}

function gcd(a, b) {
  if (a === 0) {
    return b
  }

  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
}

export const qcdGame = (name) => {
  let correctCount = 0
  console.log('Find the greatest common divisor of given numbers.')

  while (correctCount < 3) {
    const random1 = randomNum(1, 100)
    const random2 = randomNum(1, 100)
    const correct = gcd(random1, random2)

    console.log(`Question: ${random1} ${random2}`)
    const ans = readlineSync.question('Your answer:')

    if (Number(ans) === correct) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
Let's try again, ${name}!`)
      break
    }
    if (correctCount === 3) {
      console.log(`Congratulations, ${name}!`)
      break
    }
  }
}

const Prog = (length, firstTerm, difference) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(firstTerm + i * difference)
  }
  return progression
}

export const progressionGame = (name) => {
  let correctCount = 0
  console.log('What number is missing in the progression?')

  while (correctCount < 3) {
    const minLength = 5
    const maxLength = 10
    const length = randomNum(minLength, maxLength)

    const firstTerm = randomNum(1, 10)
    const difference = randomNum(1, 5)
    const progression = Prog(length, firstTerm, difference)
    const hiddenIndex = randomNum(0, length - 1)
    const hiddenValue = progression[hiddenIndex]
    progression[hiddenIndex] = '..'

    console.log(`Question: ${progression.join(' ')}`)
    const ans = readlineSync.question('Your answer: ')

    if (ans === hiddenValue.toString()) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${hiddenValue}. Let's try again, ${name}!`)
      break
    }

    if (correctCount === 3) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false
  }
  return num > 1
}

export const primeGame = (name) => {
  let correctCount = 0
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  while (correctCount < 3) {
    const random = randomNum(1, 100)

    console.log(`Question: ${random}`)
    const ans = readlineSync.question('Your answer:')
    const correct = isPrime(random) ? 'yes' : 'no'
    if (ans === correct) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
Let's try again, ${name}!`)
      break
    }
    if (correctCount === 3) {
      console.log(`Congratulations, ${name}!`)
      break
    }
  }
}

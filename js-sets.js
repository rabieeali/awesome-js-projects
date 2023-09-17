/* sets */

// no duplicated values
// values can be anything

const icecream = new Set()

// add()
const flavors = icecream
    .add('Vanilla')
    .add('Chocolate')
    .add('Coffee')
    .add('Coffee')
    .add('Strawberry')

// console.log(flavors)

// has()

// console.log(icecream.has('Brownie'))
// console.log(icecream.has('Coffee'))

// size
// console.log(icecream.size)



//delete()
// icecream.delete('Vanilla')
// console.log(`does vanialla stil exist? ${icecream}`)

//clear()
// icecream.clear()
// console.log(`was the clear successfull? ${icecream.size === 0 ? 'yes' : 'no'}`)

//values()
const iceCreamValues = icecream.values()
iceCreamValues.next()
const secondValue = iceCreamValues.next().value
// console.log(secondValue)


//entries() , returns an array like this [value, value] => reason: keep the api like Map!
const iceCreamEnries = icecream.entries()
// console.log(iceCreamEnries)
const firstEntry = iceCreamEnries.next().value
// console.log(firstEntry)

//forEach(value1,value2,set,thisArg) // we have those value1 and value2 because keep the api like Map!
// icecream.forEach((v1, v2, set) => {
//     if (v1 !== 'Vanilla') {
//         console.log(`flavor: ${v1}`)
//     }
// })


/* challenge */
//1. in a snowman game,yor firend has guessed the following letters: r,s,t,l,n,e
// create a set
const guessedLetters = new Set()
guessedLetters
    .add('r')
    .add('s')
    .add('t')
    .add('l')
    .add('n')
    .add('e')
// console.log(guessedLetters)


//2. your firend takes anotehr guess, p. before adding it to set check to see if it exists in set or not, if not add it to the set.
// !guessedLetters.has('p') && guessedLetters.add('p')
// console.log(guessedLetters)

//3. how many times he tried?
// console.log(guessedLetters.size)

//4. delete letter 'l'
// guessedLetters.delete('l')
// console.log(guessedLetters)

//5. second value of set
// const guessValues = guessedLetters.values()
// guessValues.next()
// const secondVal = guessValues.next().value
// console.log(secondVal)


//6. first entry
const guessEntry = guessedLetters.entries().next().value
// console.log(guessEntry)

//7.log weather the guess is a consonent or a vowel
const vowels = ['a', 'e', 'i', 'u', 'o']

guessedLetters.forEach((value) => {
    if (vowels.includes(value)) {
        console.log(value + ' is a vowel')
    } else {
        console.log(value + ' is a consonent')
    }
})

//8. clear the set
// guessedLetters.clear()
// console.log(`was the set cleared ? ${guessedLetters.size === 0 ? 'yes' : 'no'}`)


/* weak set */
// only these methods: add, has, delete

const resOne = { id: 1234 }
const resTwo = { id: 5678 }
const resThree = { id: 9012 }
const resFour = { id: 3456 }

const surveyResponse = new WeakSet();
surveyResponse
    .add(resOne)
    .add(resThree)
    .add(resTwo)
    .add(resFour)

// console.log(surveyResponse)

//   console.log(surveyResponse.has(resThree)) // true
// console.log(surveyResponse.has({ id: 1234 })) // false // it is not the same reference (it does not matter if it is Set or WeakSet)

// surveyResponse.delete(resTwo)
// console.log('has resThree? ', surveyResponse.has(resTwo))

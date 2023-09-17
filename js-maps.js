const monday = new Map()

monday.set(8, 'wake up')
monday.set(9, 'start work')
monday.set(6, 'go back home')


// console.log(monday)

// get()

const morning = monday.get(8)
const noon = monday.get(12)

// console.log('what am I doing at 8AM? ', morning)
// console.log('what am I doing at 8AM? ', noon)

// has()

const hasFour = monday.has(4)
const hasSix = monday.has(6)

// console.log('does our map have four? ', hasFour)
// console.log('does our map have six? ', hasSix)

// size

const tasks = monday.size
// console.log(`on Monday I have ${tasks} tasks`)



// delete() ->  return boolean
// clear() , and we might check its size to check if it is zero

// console.log('did I delete 6?',monday.delete(6))
// console.log('did I delete 10?',monday.delete(10))
// console.log(monday)

// monday.clear()
// console.log('map size?',monday.size)


// iterators
const mondayKeys = monday.keys()
const firstKey = mondayKeys.next().value
// console.log(firstKey)

const mondayValues = monday.values()
mondayValues.next()
const secondValue = mondayValues.next().value
// console.log(secondValue)    



// entries()

const mondayEntries = monday.entries()
mondayEntries.next()
mondayEntries.next()

const thirdEntry = mondayEntries.next().value

// console.log('what is our third entry in map?',thirdEntry)


// forEach()


// monday.forEach((value, key) => {
//     console.log(value, key)
// })

/* challenge */


const movies = new Map()

movies.set(2020, 'Parasite')
movies.set(2019, 'Green Book')
movies.set(2018, 'The Shape Of Water')
movies.set(2017, 'Moonlight')
movies.set(2016, 'Spotlight')
movies.set(2015, 'Birdman')
movies.set(2014, '12 Years a Slave')
movies.set(2013, 'Argo')

// 1. make a map
// console.log(movies)

// 2. what film won best picture in 2015?
const best2015Movie = movies.get(2015)
// console.log(best2015Movie)

// 3. does this list contain best picture from 2010 - 2018?

// console.log(movies.has(2010))
// console.log(movies.has(2018))


// 4. how many movies are included?
// console.log(movies.size)

// 5. what is the second key in this movie map?
const moviesKeys = movies.keys()
moviesKeys.next()
const secondKeyInThisMovieMap = moviesKeys.next().value
// console.log(secondKeyInThisMovieMap)


// 6. what is the third value in this movie map?
const moviesValues = movies.values()
moviesValues.next()
moviesValues.next()
const thirdValue = moviesValues.next().value
// console.log(thirdValue)

// 7. what is the first set of entries in this movie map?
const moviesEntries = movies.entries()
const firstEntries = moviesEntries.next().value
// console.log(firstEntries)

// 8. loop over the movies before 2017 and log them out
// movies.forEach((value, key) => {
//     key < 2017 && console.log(value, key)
// })

// 9. delete 2013 best movie
const isSuccessful = movies.delete(2013)
// console.log(isSuccessful)

// 10. clear the map
movies.clear();
// console.log('is my movies cleared? ', movies.size)


/* weak maps */
const newYork = { city: 'new york' }
const nola = { city: 'new orleans' }
const chicago = { city: 'chicago' }
const losAngeles = { city: 'los angeles' }

//1. creat a weakmap (keys are object)

const cities = new WeakMap()

cities.set(newYork, newYork.city)
cities.set(nola, nola.city)
cities.set(chicago, chicago.city)
cities.set(losAngeles, losAngeles.city)

// console.log(cities)

//2. value of nola

// console.log(cities.get(nola))

//3. what is the value of dallas?
const dallas = { city: 'dallas' }
// console.log(cities.has(cities.get(dallas)))


//4. does the map have the key newYork?
// console.log(cities.has(newYork))

//5. delete chicago
// console.log(cities.delete(chicago))

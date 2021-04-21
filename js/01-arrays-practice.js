//Sara Powers

// //STEP 1: a string array with my five favorite movies
// let movieFavs = ["The Godfather", "Donnie Brasco", "Ant-Man and the Wasp", "Little Women", "Enough Said"];
// console.log(movieFavs[1]);

// //STEP 2: an array using the function constructor method with a set length
// let movies = new Array(5);
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// console.log(movies[0]);

// //STEP 3: add a movie into position three and display the length of the new array
// let movies = new Array(5);
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";

// movies.splice(2, 0, "Ant-Man and the Wasp: Quantumania");
// console.log(movies.length);

// //STEP 4: add items into the movie array, delete the first item, and then display array
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";

// delete movies[0];
// console.log(movies.toString());

// //STEP 5: declare a movie array and assign 7 movies in the array. Use a for/in loop to display the movies
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// for (let i in movies) {
//     if (movies.hasOwnProperty(i)) {
//         console.log(movies[i]);
//     };
// };

// //STEP 6: use a for/of loop to iterate and display movies array
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// for (const movie of movies) {
//     console.log(movie);
// };

// //STEP 7: use a for/of loop to iterate and display movies array in a sorted view
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// for (const movie of movies) {
//     sortedMovies = movies.sort();
// };
// console.log(sortedMovies);

//STEP 8: display the array from STEP 5 with a new array underneath with a list of three regretful movies with formatting to match assignment in console
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// let leastFavMovies = [];
// leastFavMovies[0] = "Titanic";
// leastFavMovies[1] = "Glitter";
// leastFavMovies[2] = "The Lighthouse";

// let newMovies = ("Movies I like:,,".concat(movies.toString()));
// let newRegretMovies = ("Movies I regret watching:,,".concat(leastFavMovies.toString()));
// console.log((newMovies.replace(/,/g, `\n`)) + '\n\n' + (newRegretMovies.replace(/,/g, `\n`)));

//STEP 9: concat() the two movie arrays together into a single array and display in reverse sorted order
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// let leastFavMovies = [];
// leastFavMovies[0] = "Titanic";
// leastFavMovies[1] = "Glitter";
// leastFavMovies[2] = "The Lighthouse";

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies);

//STEP 10: use array function to return last item in STEP 9 array and display in console
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// let leastFavMovies = [];
// leastFavMovies[0] = "Titanic";
// leastFavMovies[1] = "Glitter";
// leastFavMovies[2] = "The Lighthouse";

// movies = movies.concat(leastFavMovies).sort().reverse();
// movies = movies.pop();
// console.log(movies);

//STEP 11: remove method above and use a method to return the first item in array and display in console
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// let leastFavMovies = [];
// leastFavMovies[0] = "Titanic";
// leastFavMovies[1] = "Glitter";
// leastFavMovies[2] = "The Lighthouse";

// movies = movies.concat(leastFavMovies).sort().reverse();
// movies = movies.shift();
// console.log(movies);

//STEP 12: programmatically retrieve the movies in the regrets list and return indices and replace with good movies
// let movies = [];
// movies[0] = "The Godfather";
// movies[1] = "Donnie Brasco";
// movies[2] = "Ant-Man and the Wasp";
// movies[3] = "Little Women";
// movies[4] = "Enough Said";
// movies[5] = "The Muppets Take Manhattan"
// movies[6] = "Ant-Man and the Wasp: Quantumania"

// let leastFavMovies = [];
// leastFavMovies[0] = "Titanic";
// leastFavMovies[1] = "Glitter";
// leastFavMovies[2] = "The Lighthouse";

// movies = movies.concat(leastFavMovies);
// //movies[movies.indexOf('Titanic')] = "Home Alone";
// //movies[movies.indexOf('Glitter')] = "Jumanji";
// //movies[movies.indexOf('The Lighthouse')] = "Jaws";

// let betterMovies = [];
// betterMovies[0] = "Home Alone";
// betterMovies[1] = "Jumanji";
// betterMovies[2] = "Jaws";

// function fixList (movies) {
//     for (let i = 0; i <= movies.length; i++) {
//         //console.log(i);
//         if (movies[i] === "Titanic" || movies[i] === "Glitter" || movies[i] === "The Lighthouse") {
//             //console.log(movies.indexOf(movies[i]));
//             let arrayNum = movies.indexOf(movies[i]);
//             movies[arrayNum] = betterMovies[0];
//             betterMovies.shift();
//         }
//     }
// };

// fixList(movies);
// console.log(movies);

//STEP 13: create a multi-dimensional array that contains 5 favorite movies and their ranking. Use filter() method and the primitive data type to display only the movie names.

// let movies2 = [["The Godfather", 1], ["Donnie Brasco", 2], ["Ant-Man and the Wasp", 3], ["Little Women", 4], ["Enough Said", 5]];
// let movies = [];

// for (let i = 0; i < movies2.length; i++) {
//     let movie = movies2[i];
//     let filteredMovies2 = movie.filter(title => typeof title === "string");
//     //console.log(filteredMovies2);
//     movies.push(filteredMovies2);
// };
// console.log(movies);

//STEP 14: create a string array of employees, then create an anonymous function that accepts the employees array as a parameter and display result in the console window.
// let employees = [];
// employees[0] = "Zak";
// employees[1] = "Jessica";
// employees[2] = "Mark";
// employees[3] = "Fred";
// employees[4] = "Sally";


// let show = (employees) => {
//     let capEmployees = employees.toString().toUpperCase();
//     //console.log(capEmployees);
//     let complete = ("Employees:,,".concat(capEmployees));
//     //console.log(complete);
//     console.log(complete.replace(/,/g, `\n`));
// };

// show(employees);

//STEP 15: JavaScript function that filters false, null, 0, and blank value from an array

//let numbers = [58, '', 'abcd', true, null, false, 0];

// function filterValues (values) {
//   return values.filter(function(value) {
//       return (value != '' && value != false && value != null && value != 0);
//   });
// };

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16: a JavaScript function that gets a random number out of an array

// function randomNumber (array) {
//     let randomArrayIndex = Math.floor(Math.random() * (array.length - 1));
//     console.log(randomArrayIndex);
//     let randomNum = array[randomArrayIndex];
//     return randomNum;
// }

// console.log(randomNumber([1,54,7,3,76,43,323]));

//STEP 17: a JavaScript function that gets the largest number from a numeric array
// let largestNum = [0];

// function findLargest (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (largestNum < array[i] ) {
//             largestNum = array[i];
//         }
//     }
//     return largestNum;
// };

// console.log(findLargest([4, 394, -1, 0, 43242343, 45]));
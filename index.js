//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
/*Programmatically subtract the value of the first element in the array from the value in the 
last element of the array (do not use numbers to reference the last element, find it 
programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.*/
function subtractFirstFromLast(array) {
    console.log(array[array.length - 1] - array[0]);
}
subtractFirstFromLast(ages);


//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(72);
subtractFirstFromLast(ages);
//Use a loop to iterate through the array and calculate the average age.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i]
}
// Print the result to the console.
console.log(totalAge / ages.length);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
//Print the result to the console.
console.log(totalLetters / names.length);
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let newNames = "";
for (let i = 0; i < names.length; i++) {
    newNames += names[i] + " ";
}
console.log(newNames.trimEnd());

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let namesTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    namesTotal += nameLengths[i];
}
console.log(namesTotal);
/*7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/
function concatenateWordXTimes(word, n) {
    let concatenateWord = word;
    if (n > 1) {
        for (let i = 1; n > 1 && i < n; i++) {
            concatenateWord += word
        }
    }
    return concatenateWord;
}

console.log(concatenateWordXTimes('test', 3));
/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space).*/
function makeFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(makeFullName('Austin', 'Atkinson'))
// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThan100(array) {
    if (!isNaN(array.join(""))) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        if (sum > 100) return true;
    }
    return false;
}
let test1 = [1, 2, 3, 4, 5, 6, 7]
let test2 = [10, 20, 30, 40]
let test3 = [1, 2, 3, 'a', 5, 6, 7]
let test4 = [10, 20, 30, 40, 1]

console.log(greaterThan100(test1));
console.log(greaterThan100(test2));
console.log(greaterThan100(test3));
console.log(greaterThan100(test4));

/*11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
greater than the average of the elements in the second array.*/
function isFirstArrayGreaterThanSecond(array1, array2) {
    if (isNaN(array1.join("")) || isNaN(array2.join(""))) { // making sure both only contain numbers
        return "invalid array";
    }
    let array1Sum = 0;
    for (let i = 0; i < array1.length; i++) {
        array1Sum += array1[i];
    }
    let array1Average = array1Sum / array1.length;
    let array2Sum = 0;
    for (let i = 0; i < array2.length; i++) {
        array2Sum += array2[i];
    }
    let array2Average = array2Sum / array2.length;
    return array1Average > array2Average;
}
console.log(isFirstArrayGreaterThanSecond(test4, test2));
console.log(isFirstArrayGreaterThanSecond(test3, test4));
console.log(isFirstArrayGreaterThanSecond(test2, test4));

/*12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
    const drinkCost = 10.50;
    if (isHotOutside && moneyInPocket > drinkCost) return true;
    return false;
}

console.log(willBuyDrink(true, 10.50));
console.log(willBuyDrink(false, 11.00));
console.log(willBuyDrink(true, 11));


/*13. Write a function that checks a persons age. If the person is 2 or under they are free. If that are 5 and under and 55+ is it half price. Everyone else cost is 6 dollars */
function findCostForAge(age) {
    const defaultPrice = 6;
    if (age <= 2) {
        return 0;
    } else if (age <= 5 || age >= 55) {
        return defaultPrice / 2;
    } else {
        return defaultPrice;
    }
}
console.log(findCostForAge(2));
console.log(findCostForAge(4));
console.log(findCostForAge(10));
console.log(findCostForAge(56));
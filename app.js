//titles is a NodeList, not an array, so it does not have access to many array methods
let titles = document.getElementsByClassName('title');


//console.log(Array.isArray(titles))//returns false;
//console.log(Array.isArray(Array.from(titles)))//returns true, because we converted NodeList to Array

//Use Array.from(titles) --> to convert into Array from NodeList
//now we can use forEach method on it, since its Array now
Array.from(titles).forEach(item => {
    console.log(item);
})

//specific retrieval, we want to target span with class name ("the Wise man's Fear")
// which is second child  of ul of div wiht id book-list
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf)//<span class="name">The Wise Man's Fear</span>
//titles is a HTML Collection, not an array, so it does not have access to many array methods
let titles = document.getElementsByClassName('title');
console.log(titles)


//console.log(Array.isArray(titles))//returns false;
//console.log(Array.isArray(Array.from(titles)))//returns true, because we converted HTMLCollection to Array

//Use Array.from(titles) --> to convert into Array from HTMLCollection
//now we can use forEach method on it, since its Array now
Array.from(titles).forEach(item => {
    console.log(item);
})

//specific retrieval, we want to target span with class name ("the Wise man's Fear")
// which is second child  of ul of div wiht id book-list
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf)//<span class="name">The Wise Man's Fear</span>


/**----------------------EDITTING TEXT------------------------------------ */
//when we use querySelectorAll(), returns NodeList, which has forEach() method, so no need to convert
const books = document.querySelectorAll('#book-list li .name');
console.log(books)
books.forEach(book => {
    console.log(book.textContent)//just text retrieve
    //appending (book title) word to each text
    book.textContent += ' (book title)'
})

//const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML)
/** innerHTML
 *<h2 class="title">Books to Read</h2>
	    	<ul>
	    		<li>
	    			<span class="name">Name of the Wind (book title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Wise Man's Fear (book title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">Kafka on the Shore (book title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Master and the Margarita (book title)</span>
	    			<span class="delete">delete</span>
	    		</li>
	    	</ul>

 *
 *
 */

 //bookList.innerHTML = '<h2>Books and more books...</h2>'
 //bookList.innerHTML += '<p> This is how you add HTML</p>'



 /**--------------------NODES---------------------------------------- */
//  const banner = document.querySelector('#page-banner');
//  console.log('$page-banner node type is: ', banner.nodeType)
//  console.log('$page-banner node name is: ', banner.nodeName)
//  console.log('$page-banner has child nodes: ', banner.hasChildNodes())


 //clone the node
//  const clonnedNode = banner.cloneNode(true); //passing true, in order to make deep cloning with child elements as well, if pass false, only make clone shallow version
//  console.log(clonnedNode);

 /**----------------------TRAVERSING DOM------------------------------- */
 const bookList = document.querySelector('#book-list');
 console.log('the parent node is: ', bookList.parentNode);
 console.log('the parent node is: ', bookList.parentElement.parentElement);//find the grandparent

 console.log('children ', bookList.childNodes) //[text, h2.title, text, ul, text] --> text are linebreaks
 console.log('children without linebreaks', bookList.children);//[h2.title, ul]


 console.log('book list next element sibling is: ', bookList.nextElementSibling);
 console.log('book list previous element sibling is: ', bookList.previousElementSibling);


 //editing <p> tag content in previous element sibling <header>
 bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else';





 /**-----------------------EVENTS----------------------------------- */

 let h2 = document.querySelector('#book-list h2');
 h2.addEventListener('click', (evt) => {
    console.log(evt.target); //<h2 class="title">Books to Read</h2>
    console.log(evt);
 })

// let btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         //grab parent of button, which is <li>
//         const li = e.target.parentElement;
//         //delete  li from li's parent ul
//         li.parentNode.removeChild(li);
//     })
// })

const link = document.querySelector('#page-banner a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, 'was prevented')
})



/**-------------------EVENT BUBBLING------------------------------- */
//instead of adding event listenet to each button, we will add event listener to parent ul
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e) => {
    if(e.target.className === 'delete'){
        const li = e.target.parentElement; //parent of delete btn is li
        //grab parent of li is ul
        list.removeChild(li);
    }
})

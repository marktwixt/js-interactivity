console.log("hello world"); 

//(Step 5) select the HTML element with the message id using querySelector. 
//Save it to a variable called message.
let message = document.querySelector('#message');

//(Step 2) create a new function called addMovie that takes in an event as a parameter.
let addMovie = (event) => {

//(Step 2) Because our button is inside a form element, it has a default action that is also 
//running and interfering with our code. 
//To fix this, at the beginning of the addMovie function, add event.preventDefault()
    event.preventDefault();

//(Step 2) Use querySelector to get the input, save it to a variable called inputField.
    let inputField = document.querySelector('input')

//(Extra) Fixed ability to add a blank input by returning the alert function
//as a string when input is null 
    if (!inputField.value) {
        return alert('Please enter a vaild movie title!');
      }
//(Step 2) Create a new variable called movie, store a new li element in it using document.createElement, 
//this will be the parent element of our movie’s title and the movie’s delete button.      
    let movie = document.createElement('li');

//(Step 2) Create a new span element and save it to a variable called movieTitle. Set the textContent of movieTitle 
//to be the value of inputField. This will write what the user typed out into our new span.    
    let movieTitle = document.createElement("span");
    movieTitle.textContent = (inputField.value)

//(Step 4) In the addMovie function, after you set the textContent of the span element, 
//use addEventListener to listen for a click event on the span and run the crossOffMovie function.
    movieTitle.addEventListener('click', crossOffMovie);

//(Step 2) Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.    
    movie.appendChild(movieTitle);

//(Step 3) In the addMovie function, after appending the movieTitle to movie, 
//use createElement to create a new button element and save it to a variable called deleteBtn.    
    let deleteBtn = document.createElement('button');

//(Step 3) Set the textContent of deleteBtn to be the letter X.
    deleteBtn.textContent = 'X';

//(Step 3) Use addEventListener to listen for a click event on the button and run the deleteMovie function. 
    deleteBtn.addEventListener('click', deleteMovie);

//(Step 3) Use the appendChild method to add deleteBtn onto the movie element.
    movie.appendChild(deleteBtn);

//(Step 2) Use querySelector to find the ul element that already exists in our HTML and use appendChild 
//to attach the movie element we created to the list.    
    document.querySelector('ul').appendChild(movie);

//(Step 2) For a more user-friendly experience, let’s clear the input field 
//when the ‘Add’ button is clicked so it’s ready for another movie. 
//To do this, set the value of inputField to an empty string at the bottom of the addMovie function.    
    inputField.value = ''
}
//(Step 2) Use querySelector to select the form element and then use addEventListener to listen 
//for a submit event on the form element and run the addMovie function.
document.querySelector('form').addEventListener('submit', addMovie);

//(Step 3) Create a new function called deleteMovie that takes in an event parameter. 
//When we click the button, we want to remove the entire list item. 
//Since the button is a child of the list item, we can use event.target.parentNode.remove() 
//to remove the entire list item.
const deleteMovie = (event) => {
    event.target.parentNode.remove()

//(Int. Step 3) In the deleteMovie function, change the string you’re assigning 
//to the message’s textContent to contain the deleted movie’s title.
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;

//(Int. Step 1) At the bottom of the deleteMovie function, call revealMessage
    revealMessage()
};

//(Step 4) Create a new function called crossOffMovie that takes in an event as a parameter.
const crossOffMovie = (event) => {

//(Step 4) Call event.target.classList.toggle() passing in the checked class 
//so that the class is added or removed if the title is clicked. 
    event.target.classList.toggle('checked')

//(Step 5) We want to have different messages based off of whether the movie was just 
//checked off as ‘watched’ or if it was added back to the list, which will be an if-else block.
//the structure is event.target.classList.contains(‘some-class-name’)
    if (event.target.classList.contains('checked') === true) {

//(Int. Step 2) Changed the message’s textContent to be a string that says ‘MOVIE watched!’ 
//where MOVIE is the title of the movie they clicked on.
      message.textContent = `${event.target.textContent}  watched!`;

//(Int. Step 2) Changed the string in the else block so that it contains the title of the movie
    } else {
      message.textContent = `${event.target.textContent}  added back!`;
    }

//(Int. Step 1) Invoke revealMessage at the bottom of the crossOffMovie function
    revealMessage()
  };

//(Int. Step 1) Create a function called revealMessage. 
//Inside the function, call setTimeout, passing in a callback function 
//and a time in milliseconds. - The callback function should add the hide class to message, 
//Pass in the number 1000 to run the callback 1 second after setTimeout is invoked.
const revealMessage = () => {

//(Int. Step 1) At the top of the revealMessage function, remove the hide class from message
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide');
    }, 1000);
};
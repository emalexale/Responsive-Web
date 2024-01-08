// TOGGLE BUTTON
const hamburger =document.querySelector('.hamburger');
const navlink =document.querySelector('.nav_link');

// TOGGLE WHEN THE HUMBURGER ICON/BUTTON IS CLICKED
hamburger.addEventListener('click', () => {
    navlink.classList.toggle("hide");
});

//DECLARING A VARIABLE
const button = document.getElementById('myButton');

//CHANGE BUTTON TEXT WHEN CLICKED
button.addEventListener('click',() => {
button.textContent = 'Thank you for clicking this button!'
});

//CHANGE BUTTON COLORS
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'green';
});

//RESTORE BUTTON DEFAULT COLOR
button.addEventListener('mouseout', () => {
button.style.backgroundColor = 'black'
})


//GET REFERENCE TO THE BUTTON AND THE PARAGRAPH ELEMENT
const showTextButton = document.getElementById('showTextButton');
const displayText = document.getElementById('displayText');

//ADD A CLICK EVENT LISTENER TO THE BUTTON
showTextButton.addEventListener('click', () => {
    
    //CHANGE THE TEXT CONTENT OF THE PARAGRAPH WHEN THE BUTTON IS CLICKED
    displayText.textcontent = 'Hello, This is the displayed text for Sterling academy!';
})


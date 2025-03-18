

 const input = document.querySelector('#favchap');
 const list = document.querySelector('#list');
 const button = document.querySelector('button');

//
/*
button.addEventListener('click', () => {

//check to makesure that input is not blank before doing the following
if(input.value != '')
{
    // create [2 elements]; the list element and also a delete button
    const li = document.createElement('li');
    const delButon = document.createElement('button');

   // populate the created list element and the delete button
    li.textContent = input.value;
    delButon.textContent = '❌';

  // append the li element with delete button
    li.append(delButon);

//  append the li element with the unordered list previously refrenced
    list.append(li);

// add listener to the delete button and remove the list element when clicked
   delButon.addEventListener('click', () => {
   list.removeChild(li);
   input.focus();
  });

// send the focus to the input element
  input.focus();

}

});
*/
// LocalStorage 

// Declare an array named chaptersArray, assign it to the results of a defined function named getChapterList
// in that same array variable declaration and assignment, add a compound OR condition to assign it an empty array in the case the user's first visit or if the localStorage item is missing
let chaptersArray = getChapterList() || [];
//Now let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter
//se an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter.
//hat way each entry will be processed, i.e., appended to the list.
chaptersArray.foreach(chapter =>{
  // Change the button click event listener to only do the following tasks
  //the other tasks in that original function will be used in a separate function named
  displayList(chapter);

  button.addEventListener('click', () => {
    if(input !==''){ 1. //. check if the input is empty, if not, then
    displayList(input.value) // 2. call displayList with the input.value argument,
    chaptersArray.push(input.value); //3. Push the input.value intp the chaptersArray
    setChapterList(); //4. Update the localStorage with the array
    input.value = ''; // 5. Clear the input
    input.focus(); // 6. Set the focus back to the input
  }
  });
  
});

// create the display function
function displayList(item){
  //check to makesure that input is not blank before doing the following
if(input.value != '')
{
    // create [2 elements]; the list element and also a delete button
    let li = document.createElement('li');
    let deleteButon = document.createElement('button');

   // populate the created list element and the delete button
    li.textContent = item; // use the item parameter as the input
    deleteButon.textContent = '❌';
    
    deleteButon.classList.add('delete'); // // this references the CSS rule .delete{width:fit-content;} to size the delete button
  // append the li element with delete button
    li.append(deleteButon);
//  append the li element with the unordered list previously refrenced
    list.append(li);

// add listener to the delete button and remove the list element when clicked
   deleteButon.addEventListener('click', () => {
   list.removeChild(li);
   deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and local storage
   input.focus();
  });

// send the focus to the input element
  input.focus();

}
}
//Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function to the localStorage item, no parameter is needed. since this function returns to an awaiting array, we will need to use JSON.parse on the string
function getChapterList(){
  localStorage.getItem('myFavBOMList', JSON.parse(chaptersArray));
}

//Finally, define the deleteChapter function with a parameter named chapter that does three things.
function deleteChapter(chapter){
chapter = chapter.slice(0, chapter.length - 1); // reformat the chapter parameter to get rid of the ❌. this get rid of the last character
chaptersArray = chaptersArray.filter((item) => !== chapter);
setChapterList();
}
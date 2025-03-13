

 const input = document.querySelector('#favchap');
 const list = document.querySelector('#list');
 const button = document.querySelector('button');

//
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
const psw1 = document.querySelector("#passw01");
const psw2 = document.querySelector("#passw02");
const message = document.querySelector("#fmessage");

psw2.addEventListener("focusout", checkSame);

function checkSame(){
    /*
	console.log('inside the function')
    if(psw1.value !== psw2.value){
        console.log('no match')
        psw1.value=""
        psw2.value=""
        psw1.focus()
        message.textContent = "Values did not match"
    }else{
        console.log('YES, matched')
         message.textContent = ""
    }*/
	
	if(psw1.value !== psw2.value){
		message.textContent = "Password do not  match"
		message.style.visibility = "show"
		psw2.style.borderBottom = "6px solid red"
        psw1.style.borderBottom = "6px solid red"
        psw1.value=""
		psw2.value=""
		psw1.focus()
	}else{
        //message.textContent = ""
		message.style.display = "none"
		psw2.style.borderBottom = "6px solid green"
        psw1.style.borderBottom = "6px solid green"
		psw2.style.color = "#000"
	}
}


//Scripts for the range
const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("rng");
// Range event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
	rangeValue.innerHTML = range.value;
}

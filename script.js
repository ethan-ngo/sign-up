// Use the DOM method `.getElementById()` to find your form
const form = document.getElementById("myForm")
// 
const validateForm = (event) => {
  // Get the form elements
  let elements = form.elements
  // Create your for loop
  for(let i = 0; i < elements.length; i++){
    // console.log("This is the value of i: " + i)
    if(elements[i].value === ""){
      console.log("This input is empty!")
      alert("Please fill out " + elements[i].id)
    }
    else{
      console.log("This input has some data: " + elements[i].value)
    }
  }

  event.preventDefault();
}

// Add the an event listener to validate your form
const button = document.getElementById('test')
button.addEventListener("click", validateForm)
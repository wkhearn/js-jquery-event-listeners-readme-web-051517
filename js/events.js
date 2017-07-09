// function getIt(){
//   document.querySelectorAll('p')[0].addEventListener('click', function(){
//     alert("Hey!")
//   })
// }

function getIt() {
  $('p').on('click', ()=> {
    alert('hey!')
  })
}


// function frameIt(){
//   document.querySelectorAll('img')[0].addEventListener('load', function(){
//     return document.querySelectorAll('img')[0].setAttribute("class", "tasty")
//   })
// }

function frameIt() {
  $('img').on('load', ()=> {
    $('img').addClass('tasty')
  })
}

// function pressIt(){
//   document.addEventListener('keydown', function(e) {
//     if (e.which === 71) {
//       return alert("You've just pressed the 'G' key!")
//     }
//   })
// }

function pressIt() {
  $('#typing').on('keydown', (event)=> {
    if (event.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

// function submitIt(){
//   document.querySelectorAll('form')[0].addEventListener('submit', function(){
//     alert("Your form is going to be submitted now.")
//   })
// }

function submitIt() {
  $('form').on('submit', ()=> {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

})

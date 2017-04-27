$(document).ready(function() {
  letterOfDay()
  addFade()
})

function letterOfDay() {
  let n = new Date().getDate()
  let randomAlpha = ['X', 'C', 'J', 'M', 'O', 'A', 'Q', 'H', 'T', 'B', 'R', 'S', 'W', 'F', 'Y', 'I', 'D', 'L', 'G', 'V', 'E', 'K', 'N', 'P', 'U', 'Z', 'J', 'M', 'K', 'O', 'F']
  let lod = randomAlpha[n]
  $(`#${lod}`).addClass('lod lod-animate')
    .mouseenter(function(){
      $('#message').text(`You found it! The letter of the day is ${lod}`)
      $('#elmo').html('<img src="./assets/elmo_jump.png" alt="elmo"></img>')
    })
    .mouseleave(function(){
      $('#message').text(`Can you find it again?`)
      $('#elmo').html('<img src="./assets/elmo_down.png" width="340" height="auto" alt="elmo"></img>')
    })
}

function addFade() {
  let color = randomColor()
  let letter = randomLetter()
  $(`#${letter}`).not('.lod').addClass(`fade-${color}`).promise().done(()=>{
    setTimeout(function(){ addFade() }, 2000 )
    setTimeout(function(){ $(`#${letter}`).removeClass(`fade-${color}`) }, 12500 )
  })
}

function randomColor() {
  let colors = ['red','blue','yellow','magenta','orange','green']
  return colors[Math.floor(Math.random() * colors.length)]
}

function randomLetter() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97).toUpperCase()
}

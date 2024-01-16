let input = document.querySelector('input')
let album = document.querySelector('#transition')
let h1 = document.querySelector('#h1')
function SetBackground() {
  console.log(input.value)
  album.setAttribute('style', `background-color:${input.value}`)
  h1.textContent = `The ${input.value} Album`
}

window.setInterval(SetBackground, '100')

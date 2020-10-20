let myintro = document.getElementById('myIntro');
let poembtn = document.getElementById('poemBtn')
let poem    = document.getElementById('poem-one')
let video   = document.getElementById('vid-appear')

document.getElementById('myButton').onclick = function (){
    myintro.classList.toggle('fade');
}

document.getElementById('poemBtn').onclick = function (){
    poembtn.classList.toggle('fade');
    poem.classList.toggle('appear')
}

document.getElementById('video-click').onclick = function (){
    video.classList.toggle('appear');
}

const colorChoice = document.querySelector('.color-choice')
for (i=0; i< colorChoice.clientHeight;bi++){
selectedColor= colorChoice[i].id
}

const painting = document.querySelector('.painting')
painting.addEventListener('click',function(e){
    e.target.style.backgroundColor = selectedColor
})
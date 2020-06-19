

const paper = document.querySelector('#paper');
paper.addEventListener('click',function (e){
    console.log(e);
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click',function (e){
    console.log(e);
});

let buttonHover = document.querySelector('#rock');
buttonHover.addEventListener('mouseenter',function(e){
  
    rock.classList.add('playing');
});



buttonHover.addEventListener('mouseleave',function(e){
    rock.classList.toggle('playing')
});

buttonHover.addEventListener('touchend',function(e){
    rock.classList.remove('playing')
});


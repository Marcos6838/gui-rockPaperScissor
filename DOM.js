const rock = document.querySelector('#rock');
rock.addEventListener('click', function (e) {
    console.log(e);
        
});

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
    rock.classList.toggle('playing');
})


let playerScore = 0;
let cpuScore = 0;
let games = 0;

let rock = document.getElementById('rock');
rock.addEventListener('click', function (e) {
    let player = 'rock';
    console.log(player);
    cpuPlay(player);
        
        
});

let paper = document.querySelector('#paper');
paper.addEventListener('click',function (e){
    let player = 'paper';
    console.log(player);
    cpuPlay(player);
        
});

let scissor = document.querySelector('#scissor');
scissor.addEventListener('click',function (e){
    let player = 'scissor';
    console.log(player);
    cpuPlay(player);

});

let buttonHover = document.querySelector('#rock');
buttonHover.addEventListener('mouseenter',function(e){
  
    rock.classList.add('playing');
});


buttonHover.addEventListener('mouseleave',function(e){
    rock.classList.toggle('playing')
});

let buttonHover2 = document.querySelector('#paper');
buttonHover2.addEventListener('mouseenter',function(e){
  
    paper.classList.add('playing');
});


buttonHover2.addEventListener('mouseleave',function(e){
    paper.classList.toggle('playing')
});

let buttonHover3 = document.querySelector('#scissor');
buttonHover3.addEventListener('mouseenter',function(e){
  
    scissor.classList.add('playing');
});


buttonHover3.addEventListener('mouseleave',function(e){
    scissor.classList.toggle('playing')
});

function playRound(cpu, player, cpuScore){
    switch(player){

        case 'rock':
            if (cpu === 'rock'){
                return "tie";
            }
            else if(cpu === 'paper'){
                return 'you loose';
                
            }
            else if(cpu === 'scissor'){
                return 'you win';
            }
            break;
        
        case 'paper':
            if (cpu === 'paper'){
                return 'tie';
            }
            else if(cpu === 'rock'){
                return 'you win';
            }
            else if(cpu === 'scissor'){
                return 'you loose';
            }
            break;
        
        case 'scissor':
            if (cpu === 'scissor'){
                return 'tie';
            }
            else if (cpu === 'rock'){
                return 'you loose';
            }
            else  if (cpu === 'pape'){
                return 'you win';
            }
            break;
            
    }

}

function cpuPlay(player){
    let cpu;
    cpu = Math.floor(Math.random() * 3) + 1;
    

    switch (cpu){
       
        case 1:
            cpu = 'rock';
            break;
        
        case 2:
            cpu = 'paper';
            break;
        
        case 3:
            cpu = 'scissor';
            break;

    }
    console.log(cpu);
    game(cpu, player);

}

function game(cpu, player){
    const container = document.querySelector('.score')
    const cpuImage = document.createElement('div');
    let result = playRound(cpu,player);
    if(result === 'you win'){
        games += 1;
        playerScore++;
        cpuImage.classList.add('cpu');
        cpuImage.textContent = "The Cpu chose: " + cpu + " Player Score: " + playerScore + " Cpu Score: " + cpuScore;
        container.appendChild(cpuImage);
        
        console.log(playerScore);
    }
    else if(result === 'you loose'){
        games++;
        cpuScore++;
        cpuImage.classList.add('cpu');
        cpuImage.textContent = "The Cpu chose: " + cpu + " Player Score: " + playerScore + " Cpu Score: " + cpuScore;
            container.appendChild(cpuImage);
        console.log(cpuScore);
    }
    else if(result === 'tie'){
        games++
        cpuImage.classList.add('cpu');
        cpuImage.textContent = "The Cpu chose: " + cpu + " Player Score: " + playerScore + " Cpu Score: " + cpuScore;
            container.appendChild(cpuImage);
    }

    if (cpuScore === 5 || playerScore === 5){
        
    }


}


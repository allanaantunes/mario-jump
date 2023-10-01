const mario = document.querySelector('.mario'); //imagem mario
const pipe = document.querySelector('.pipe'); //imagem tubo

const jump = () => {
    mario.classList.add('jump');

    setTimeout( () => {
        mario.classList.remove('jump');//quando animação for executada uma vez, será removida, e depois poderá ser acionada novamente

    }, 500)
}

const loop = setInterval( () =>{
    
    const pipePosition  = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ // se a posição do tubo for 120px, o tubo for maior que 0  e o mario não 80px, então ele bateu no tubo..
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; // se o mario enconstar no tubo, ele ficará e cima do tubo      

        mario.src='./imagens/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop); //finaliza o loop

    }



} , 10)

document.addEventListener('keydown', jump);
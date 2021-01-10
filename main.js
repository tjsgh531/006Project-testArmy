window.addEventListener('resize', () => {
    const main = document.getElementById('mainSection');
    if(window.innerWidth < 850){
        main.classList.add('minSize');
        main.classList.remove('maxSize');
    }
    else{
        main.classList.remove('minSize');
        main.classList.add('maxSize');
    }
});

function initialSize(){
    const main = document.getElementById('mainSection');
    if(window.innerWidth < 850){
        main.classList.add('minSize');
        main.classList.remove('maxSize');
    }
    else{
        main.classList.remove('minSize');
        main.classList.add('maxSize');
    }
}

initialSize();
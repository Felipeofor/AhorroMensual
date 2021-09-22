const lightMode = document.querySelector('#lmode');
const body = document.querySelector('body');
load();

lmode.addEventListener('click', e=>{
    body.classList.toggle('lightMode');
    store(body.classList.contains('lightMode'));
})

function load() {
    const lightMode = localStorage.getItem('lightMode');

    if(!lightMode){
        store('false');
    } else if (lightMode == 'true'){
        body.classList.add('lightMode')
    }
}

function store(value){
    localStorage.setItem('lightMode', value)
}
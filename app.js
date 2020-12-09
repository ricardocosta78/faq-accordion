const divisorias = document.querySelectorAll('.divisoria');

divisorias.forEach(divisoria=>{
    divisoria.addEventListener('click',()=>{
        deleteActive()
        divisoria.classList.add('active')
    })
});

function deleteActive(){
    divisorias.forEach(divisoria =>{
        divisoria.classList.remove('active')
    }
    )}
function cambioColor(cell){
    for(i=0; i < cell.length; i++){
        cell[i].addEventListener("click", function(){
            this.classList.add ("active");
        })
    }
}



let tasto = document.getElementById('play');
let campo = document.getElementById('campo');

let quadrato = document.getElementsByClassName('col-1');

tasto.addEventListener('click',
function () {
    let livelloDiff = diff.options[diff.selectedIndex].value;


    console.log(livelloDiff);

    if (livelloDiff == 1){
        for (let i = 1; i <= 100; i++){
            console.log(i);

            campo.innerHTML += '<div class="col-1 block d-inline-block" id= "quadrato-' + [i] + '">' + (i) + '</div>';
            

            let checked = cambioColor(quadrato);
        }

    }else if (livelloDiff == 2){
        for (let i = 1; i <= 81; i++){
        
            console.log(i);
            campo.innerHTML += '<div class="col-1 block block_9 d-inline-block">' + (i) + '</div>';
            let checked = cambioColor(quadrato);
        }
    }else 
        for (let i = 1; i <= 49; i++){
            
            console.log(i);
            campo.innerHTML += '<div class="col-1 block block_7 d-inline-block">' + (i) + '</div>';
            let checked = cambioColor(quadrato);
    }


});


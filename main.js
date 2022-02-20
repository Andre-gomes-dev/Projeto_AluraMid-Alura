function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

let contador = 0
while(contador < listaDeTeclas.length){
   
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    

    const idaudio = `#som_${instrumento}`
    

    tecla.onclick = function(){
        tocaSom(idaudio)
    }
    contador++
    
}


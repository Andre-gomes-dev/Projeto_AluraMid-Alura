function tocaSom(idElementoAudio){
 const elemento = document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for(let contador = 0;contador < listaDeTeclas.length;contador++){
   
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idaudio = `#som_${instrumento}`
    

    tecla.onclick = function(){
        tocaSom(idaudio)
    }
    
    tecla.onkeydown = function(evento){
       
        if (evento.code === "Space" || evento.code ===  "Enter"){
            tecla.classList.add("ativa")
        }
    } 
    
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa")
    }
}


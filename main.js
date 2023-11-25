function tocaSomPom(){
  document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
document.querySelector('#som_tecla_clap').play();
}

function tocaSom(idElementoAudio){
const elemento = document.querySelector(idElementoAudio);
 if (elemento && elemento.localName === 'audio') {
       elemento.play();
 } else {
   alert('bala ou bala ou um curativo');
 }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador=0; contador <listaDeTeclas.length; contador++) {
  const tecla= listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio =`#som_${instrumento}`;
  tecla.onclick =function () { 
  tocaSom(idAudio);
};

  tecla.onkeydown =function (evento) {
  if (evento.code === 'Enter' || evento.code === 'Space' ) {
  tecla.classList.add('ativa');
  }
  console.log(evento.code);
}
  
  tecla.onkeyup =function () {
  tecla.classList.remove('ativa');
}
  
  console.log(instrumento);
}

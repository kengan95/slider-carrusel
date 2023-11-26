 const items=document.querySelectorAll('.carousel-item')
 const flechaIzquierda=document.getElementById('prevButton')
 const flechaDerecha=document.getElementById('nextButton') 
 let currentIndex=0 
 let validado=true

 function posicionarSlider(){

   items.forEach((item,i)=>{
    const rotacion=(currentIndex-i)*60 
    item.style.transform=`rotateY(${rotacion}deg)`
   })
 }  

 function mostrarTexto(index){ 
  const texto=document.querySelectorAll('.carousel-item p') 
  texto.forEach((text,i)=>{ 
    text.style.opacity=index===i?1:0

  })

 } 

 function moverIzquierda(){
  currentIndex=(currentIndex-1<0)?items.length-1:currentIndex-1
  posicionarSlider()
  mostrarTexto(currentIndex)
 } 

 function moverDerecha(){
  currentIndex=(currentIndex+1)%6 
  posicionarSlider()
  mostrarTexto(currentIndex)
 } 

 flechaIzquierda.addEventListener('click',moverIzquierda) 

 flechaDerecha.addEventListener('click',moverDerecha)  

  

 items.forEach((slider,i)=>{
   slider.addEventListener('click',()=>{ 
    if(validado){
       
      currentIndex=i 
      mostrarTexto(currentIndex) 
      slider.classList.add('active')
    }

   })
 })
const carrosel = document.querySelector('section#carrosel img')
const images = ['https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg', 'https://mydesktopwalls.com/wp-content/uploads/2020/09/Anime-Wallpaper.jpg','https://i2.wp.com/i.pinimg.com/originals/c7/92/a6/c792a635891886cee17f907fd0512bdf.jpg']
carrosel.src = images[2]
let indice = 0

setInterval(()=>{
  if(indice === 3){
    indice = 0
  }
  carrosel.src = images[indice]
  indice ++
},6000)
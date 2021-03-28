const menu = document.querySelector('nav#menu-mobile ul')
document.addEventListener('click',e =>{
  el = e.target
  if(el.classList.contains('menu-mobile')){
    if(menu.classList.contains('aparece')){
      menu.classList.remove('aparece')    
      menu.classList.add('some')
      return      
    }
    menu.classList.remove('some')    
    menu.classList.add('aparece')
  }
})
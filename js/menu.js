//con esto guardamos los menus en el btn al momento al dar click se mostrara con 
//el siguiente function
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
//funcion que al dar click mostrata lo guardado en este caso el menu
function showmenu() {
    document.getElementById("otroModo").classList.toggle("show");
  }
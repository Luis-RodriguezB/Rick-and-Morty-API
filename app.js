
/* 
En la funcion viene event (ver en el html ) 
se hace un destructuring "{ target }" para obtener el target con los valores del button clickeado
*/
function activeLink({ target }) {
    document.querySelectorAll('button').forEach( button => {
        delete button.dataset.active;
    });
    target.dataset.active = true;
}
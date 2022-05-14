
function active({ target }) {
    document.querySelectorAll('button').forEach( button => {
        delete button.dataset.active;
    });
    target.dataset.active = true;
}
const domContainer = document.querySelector('#modal__root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Modal));

function Modal(id) {
    return(
        console.log(id)
    )
}

export default Modal
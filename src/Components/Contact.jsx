import React from 'react';

function Contact(){
    return (
        <div id='contact'>
            <h1>CONTÁCTANOS</h1>
            <form>
                <input type='text' placeholder='Nombre' required/>
                <input type='email' placeholder='Correo electronico' required/>
                <textarea name='Mensaje' placeholder='Comentarios...'></textarea>
                <input type='submit' value='Enviar'/>


            </form>
        </div>
    )
}

export default Contact;
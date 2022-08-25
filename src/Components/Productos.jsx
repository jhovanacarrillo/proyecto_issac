import React from 'react';
import Productosbox from './Productosbox';
import fimage1 from '../images/1.jpeg';
import fimage2 from '../images/2.jpg';
import fimage3 from '../images/3.jpg';
import fimage4 from '../images/4.jpg';

function Productos(){
    return (
        <div id='features'>
            <h1>SERVICIOS</h1>
            <div className='a-container'>
                <Productosbox image={fimage1} title="Prótesis de Brazos"/>
                <Productosbox image={fimage2} title="Prótesis de piernas"/>
                <Productosbox image={fimage3} title="Prótesis de Dedos"/>
                <Productosbox image={fimage4} title="Prótesis de Oreja"/>
                
            </div>

        </div>
    )
}

export default Productos;
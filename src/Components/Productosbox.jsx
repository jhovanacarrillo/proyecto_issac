import react from 'react';

function Productosbox(props){
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>

            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p>Con nosotros podras obtener las mejores prótesis hechas con material de calidad.</p>
            </div>

        </div>
    )
}

export default Productosbox;
import { Image } from 'react-bootstrap';
import welcome from '../img/banner/banner01.jpg';

function Slider(){
    return(
        <>
            <div className='slider'>
                <Image src={welcome} className='img-fluid' />
            </div>
        </>
    )
}

export default Slider;
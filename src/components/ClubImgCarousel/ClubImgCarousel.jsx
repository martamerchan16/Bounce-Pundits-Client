import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './ClubImgCarousel.css'


function ClubImgCarousel({ pictures }) {

    const API_URL = import.meta.env.VITE_API_URL

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel className='ClubImgCarousel' activeIndex={index} onSelect={handleSelect} interval={5000}>
            {
                pictures.map((eachPicture) => {
                    return (

                        <Carousel.Item>
                            <img src={eachPicture} alt="" />

                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    );
}

export default ClubImgCarousel
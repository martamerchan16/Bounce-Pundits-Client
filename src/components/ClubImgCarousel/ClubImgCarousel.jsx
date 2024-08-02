import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


function ClubImgCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel className='ClubImgCarousel' activeIndex={index} onSelect={handleSelect} interval={5000}>

            <Carousel.Item>
                <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1722601720/ce7c50e3-d702-47e2-947f-7d601eea4a77_alta-libre-aspect-ratio_default_0_qwepqo.jpg" alt="" />

            </Carousel.Item>

            <Carousel.Item>
                <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1722601721/pano-multisportarena-17-1024x771_mujcy2.jpg" alt="" />

            </Carousel.Item>

            <Carousel.Item>
                <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1722601966/tipos-pistas-de-tenis_zpkeei.jpg" alt="" />

            </Carousel.Item>

        </Carousel>
    );
}

export default ClubImgCarousel
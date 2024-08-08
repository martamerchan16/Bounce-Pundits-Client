import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './SmoothScroll.css'

const SmoothScroll = () => {

    return (
        <div className='SmoothScroll bg-dark' >

            <div className="SmoothScrollBar" >
                <AnchorLink href="#info" offset={100}>Informacion detallada</AnchorLink>
                <AnchorLink href="#howToGet" offset={100}>Como llegar</AnchorLink>
                <AnchorLink href="#reviews" offset={100}>Reseñas</AnchorLink>
            </div>

        </div>
    );
};

export default SmoothScroll
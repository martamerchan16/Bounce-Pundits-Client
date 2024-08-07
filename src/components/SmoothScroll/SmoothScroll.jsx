import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './SmoothScroll.css'

const SmoothScroll = () => {

    return (
        <div className='SmoothScroll'>

            <div className="SmoothScrollBar">
                <AnchorLink href="#info">Informacion detallada</AnchorLink>
                <AnchorLink href="#howToGet">Como llegar</AnchorLink>
                <AnchorLink href="#reviews">Reseñas</AnchorLink>
            </div>

        </div>
    );
};

export default SmoothScroll
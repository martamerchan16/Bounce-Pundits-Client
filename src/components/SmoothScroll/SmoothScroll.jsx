import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './SmoothScroll.css'

const SmoothScroll = () => {

    return (
        <div className='SmoothScroll'>

            <div className="SmoothScrollBar">
                <AnchorLink href="#info">Information</AnchorLink>
                <AnchorLink href="#howToGet">How to get</AnchorLink>
                <AnchorLink href="#reviews">Reviews</AnchorLink>
            </div>

        </div>
    );
};

export default SmoothScroll
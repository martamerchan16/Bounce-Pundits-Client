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

            <section id="info">
                <h2>Information</h2>

                <p>Este es el contenido de la sección Cosas 1.</p>
            </section>

            <section id="howToGet" style={{ padding: '50px', backgroundColor: '#e0e0e0' }}>
                <h2>Map</h2>
                <p>Este es el contenido de la sección Cosas 2.</p>
            </section>

            <section id="reviews" style={{ padding: '50px', backgroundColor: '#e0e0e0' }}>
                <h2>Map</h2>
                <p>Este es el contenido de la sección Cosas 2.</p>
            </section>
        </div>
    );
};

export default SmoothScroll
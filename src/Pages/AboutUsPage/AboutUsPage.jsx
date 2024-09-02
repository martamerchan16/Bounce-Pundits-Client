import "./AboutUsPage.css"

const AboutUsPage = () => {
    return (
        <div className="aboutus">
            <h1>Sobre Nosotros</h1>
            <section className="intro">
                <p>Bienvenido a Bounce Pundits, una plataforma creada por apasionados desarrolladores que combina tecnología y deporte para ofrecer la mejor experiencia a los entusiastas de los deportes de raqueta. Nuestra web está diseñada para que puedas encontrar, evaluar y descubrir los mejores clubes de deportes de raqueta en tu área.</p>
            </section>
            <section className="mission">
                <h2>Nuestra Misión</h2>
                <p>Como desarrolladores, nuestra misión es proporcionar una herramienta intuitiva y útil que conecte a los amantes de los deportes de raqueta con los mejores clubes y servicios. Queremos facilitar la búsqueda de clubes y fomentar una comunidad activa donde los usuarios puedan compartir sus experiencias y recomendaciones.</p>
            </section>
            <section className="team">
                <h2>Conoce al Equipo de Desarrolladores</h2>
                <p>Somos un equipo de desarrolladores dedicados, comprometidos con crear soluciones digitales que mejoren la manera en que interactuamos con nuestras pasiones. Desde la conceptualización hasta la implementación, trabajamos para ofrecer una plataforma robusta, fácil de usar y llena de funcionalidades que realmente hacen la diferencia.</p>
            </section>
            <section className="gallery">
                <div className="images">
                    <figure>
                        <img src="https://res.cloudinary.com/dwk8n7yvq/image/upload/v1723125207/alex_pseund.jpg" alt="Alex" />
                        <figcaption>Alex Garcia</figcaption>
                    </figure>
                    <figure>
                        <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1725302105/IMG_8891copia_mc7gxw.jpg" alt="Marta" />
                        <figcaption>Marta Merchan</figcaption>
                    </figure>
                    <figure>
                        <img src="https://res.cloudinary.com/dwk8n7yvq/image/upload/v1723130458/mario-running_czwls9.png" alt="Robert" />
                        <figcaption>Robert Caridad</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage

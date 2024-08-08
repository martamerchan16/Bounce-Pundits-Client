import "./AboutUsPage.css";

const AboutUsPage = () => {
    return (
        <div className="aboutus">
            <h1>Sobre Nosotros</h1>
            <section className="intro">
                <p>Bienvenido a [Nombre del Club], el destino principal para los entusiastas de los deportes de raqueta de todos los niveles. Ubicados en el corazón de [Ciudad/Área], estamos dedicados a fomentar una comunidad vibrante donde los miembros puedan disfrutar de la emoción del juego, mejorar sus habilidades y hacer amistades duraderas.</p>
            </section>
            <section className="mission">
                <h2>Nuestra Misión</h2>
                <p>Nuestra misión es promover el amor por los deportes de raqueta proporcionando instalaciones de primera clase, entrenamiento profesional y un ambiente amigable donde todos, desde principiantes hasta jugadores experimentados, puedan prosperar.</p>
            </section>
            <section className="facilities">
                <h2>Nuestras Instalaciones</h2>
                <ul>
                    <li>Canchas de tenis de última generación</li>
                    <li>Canchas de bádminton de calidad profesional</li>
                    <li>Salas de tenis de mesa</li>
                    <li>Salón y cafetería relajantes</li>
                </ul>
            </section>
            <section className="team">
                <h2>Conoce a Nuestro Equipo</h2>
                <p>Nuestro equipo de entrenadores certificados y personal amable están apasionados por los deportes de raqueta y comprometidos a proporcionar la mejor experiencia para nuestros miembros. Ya sea que desees mejorar tu juego o simplemente divertirte, nuestro equipo está aquí para ayudarte a alcanzar tus objetivos.</p>
            </section>
            <section className="gallery">
                <h2>Desarrolladores web</h2>
                <div className="images">
                    <figure>
                        <img src="https://res.cloudinary.com/dwk8n7yvq/image/upload/v1723125207/alex_pseund.jpg" alt="Alex" />
                        <figcaption>Alex Garcia</figcaption>
                    </figure>
                    <figure>
                        <img src="https://res.cloudinary.com/dwk8n7yvq/image/upload/v1723125207/marta_sa83yx.jpg" alt="Marta" />
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

export default AboutUsPage;
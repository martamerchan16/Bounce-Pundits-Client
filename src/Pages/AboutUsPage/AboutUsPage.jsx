import "./AboutUsPage.css"

const AboutUsPage = () => {
    return (
        <div className="aboutus">
            <h1>Acerca de nosotros</h1>
            <section className="intro">
                <p>Bienvenido a [Nombre del club], el principal destino para los entusiastas de los deportes de raqueta de todos los niveles. Ubicados en el corazón de [Ciudad/Área], nos dedicamos a fomentar una comunidad vibrante donde los miembros puedan disfrutar de la emoción del juego, mejorar sus habilidades y hacer amistades duraderas.
                </p>
            </section>
            <section className="mission">
                <h2>Nuestra misión</h2>
                <p>Nuestra misión es promover el amor por los deportes de raqueta al brindar instalaciones de primer nivel, entrenamiento profesional y un entorno amigable donde todos, desde principiantes hasta jugadores experimentados, puedan prosperar.
                </p>
            </section>
            <section className="facilities">
                <h2>Nuestras instalaciones</h2>
                <ul>
                    <li>Pistas de última generación</li>
                    <li>Canchas de bádminton de nivel profesional</li>
                    <li>Salas de tenis de mesa</li>
                    <li>Salón y cafetería relajantes</li>
                </ul>
            </section>
            <section className="team">
                <h2>Conozca a nuestro equipo</h2>
                <p>Nuestro equipo de entrenadores certificados y personal amable son apasionados por los deportes de raqueta y están comprometidos a brindar la mejor experiencia para nuestros miembros. Ya sea que esté buscando mejorar su juego o simplemente divertirse, nuestro equipo está aquí para ayudarlo a alcanzar sus objetivos.
                </p>
            </section>
            <section className="join">
                <h2>Únase a nosotros</h2>
                <p>¡Sea parte de nuestra vibrante comunidad hoy! Ya seas un jugador experimentado o recién estés comenzando, tenemos un plan de membresía que se adapta a tus necesidades. Ven y experimenta la emoción de los deportes de raqueta en [Nombre del club].
                </p>
            </section>
        </div>
    );
};

export default AboutUsPage;
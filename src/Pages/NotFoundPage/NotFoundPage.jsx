import { Container } from 'react-bootstrap';

const NotFoundPage = () => {

    return (
        <div className="NotFoundPage d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Container className="text-center">
                <h1 className="Error">Error 404</h1>
                <p className="Text">La página que estás buscando no se encuentra.</p>

            </Container>
        </div>
    );
};

export default NotFoundPage;
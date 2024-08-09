import "./HomePage.css"


function HomePage() {

    return (

        <div className="HomePage">
            <section className="video-section" id="video1">
                <video autoPlay muted loop className="bg-video">
                    <source src="https://res.cloudinary.com/dwk8n7yvq/video/upload/v1722623090/istockphoto-1281621806-640_adpp_is_snxtu7.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1>Tenis</h1>
                </div>
            </section>
            <section className="video-section" id="video2">
                <video autoPlay muted loop className="bg-video">
                    <source src="https://res.cloudinary.com/dwk8n7yvq/video/upload/v1722695067/istockphoto-922512870-640_adpp_is_yjq7z1.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1>Pingpong</h1>
                </div>
            </section>
            <section className="video-section" id="video3">
                <video autoPlay muted loop className="bg-video">
                    <source src="https://res.cloudinary.com/dwk8n7yvq/video/upload/v1722696530/istockphoto-2035324770-640_adpp_is_chf6aa.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1>Padel</h1>
                </div>
            </section>
            <section className="video-section" id="video4">
                <video autoPlay muted loop className="bg-video">
                    <source src="https://res.cloudinary.com/dwk8n7yvq/video/upload/v1722696768/istockphoto-1204902161-640_adpp_is_hz2tv2.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1>Squash</h1>
                </div>
            </section>
            <section className="video-section" id="video5">
                <video autoPlay muted loop className="bg-video">
                    <source src="https://res.cloudinary.com/dwk8n7yvq/video/upload/v1722697610/istockphoto-1361704751-640_adpp_is_drwdrh.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <h1>Fronton</h1>
                </div>
            </section>
        </div>
    )

}

export default HomePage
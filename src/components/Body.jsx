import About from "./About"
import Events from "./Events"
import Footer from "./Footer"
import Header from "./Header"
import Register from "./Register"
import { TypeAnimation } from "react-type-animation"
import bgVideo from "url:../../assets/videos/bg.mp4"

const Body = () => {
    return (
        <div>
        <Header />
        <div className="hero">
            <video autoplay muted loop id="background-video">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="hero-content">
                <TypeAnimation
                    sequence={[
                        'College Club Annual Event 2024',
                        1000,
                    ]}
                    wrapper="h1"
                    speed={50}
                    style={{ fontSize: '3em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <p>Join us for an unforgettable experience filled with workshops, competitions, and networking!</p>
                <p>Date: November 12, 2024</p>
                <a href="#registration-form" class="btn">Register Now</a>
            </div>
        </div>
        <About />
        <Events />
        <Register />
        <Footer />
    </div>
    )
}

export default Body
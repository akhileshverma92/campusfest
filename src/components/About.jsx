import img from "../../about_img.jpeg"

const About = () => {
    return (
        <div>
            <section id="about" class="about-us">
                <div class="about-container">
                    <div class="about-image">
                        <img src={img} alt="College Club Event" />
                    </div>
                    <div class="about-text">
                        <h2>About the Event</h2>
                        <p>
                            The College Club Annual Event 2024 is your opportunity to connect, learn, and compete with like-minded peers. 
                            Our event features expert-led workshops, intense programming competitions, and valuable networking opportunities 
                            with industry professionals.
                        </p>
                        <p>
                            Whether you're a beginner or an expert, there's something for everyone. Don't miss out on the chance to be part 
                            of this inspiring day of learning and fun!
                        </p>
                    </div>
                
                </div>
            </section>
        </div>
    )
}

export default About
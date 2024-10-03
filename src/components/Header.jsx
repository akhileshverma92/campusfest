const Header = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="navbar-logo">
                        <a href="#hero">College Event</a>
                    </div>
                    <div class="navbar-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar-menu">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#schedule">Event Schedule</a></li>
                        <li><a href="#register">Register</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
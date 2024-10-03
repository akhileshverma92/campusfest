const Register = () => {
    return (
        <div>
            <section id="register" class="registration-form">
                <div class="form-container">
                    <h2>Register Now</h2>
                    <form id="registration-form">
                        <div class="input-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your full name" required />
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div class="input-group">
                            <label for="event">Choose Event</label>
                            <select id="event" required>
                                <option value="">Select an event</option>
                                <option value="ai-workshop">AI Workshop</option>
                                <option value="programming-competition">Programming Competition</option>
                                <option value="networking-session">Networking Session</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-register">Submit Registration</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register
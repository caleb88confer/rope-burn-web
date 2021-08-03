function About (props) {
    return (
        <div className="about-page">
            <div className="about-section">
            <h3 className="about-section-title">The Making Of Rope Burn</h3>
            <p className="about-section-text">
                Rope Burn was created as the Cap Stone Project for Caleb Confer's Software Engineering Immersive at General Assembly. Students were required to learn a new technology for their projects, and Caleb chose to learn C++ and the JUCE framework. The making of Rope Burn was the culmination of 6 years of profesional audio experience, 12 weeks of intensive programming instruction, and 26 years of curiosity and a love for taking on difficult challenges.  
            </p>
            </div>
            <div className="about-section">
            <h3 className="about-section-title">About The Creator</h3>
            <p className="about-section-text">
                Caleb is currently living in Philadelphia, studying software engineering, playing basketball, and now on the hunt for full time positions as a junior developer. 
            </p>
            </div>
            <div className="about-section">
            <h3 className="about-section-title">Future Enhancements</h3>
            <p className="about-section-text">
                Rope Burn as it is is a fully functional plugin, but some additional convience and creative features will be added in the near future. <br/>
                - bypass button <br/>
                - user/factory presets <br/>
                - switchable distortion types 
            </p>
            </div>

        </div>

    )
}

export default About;
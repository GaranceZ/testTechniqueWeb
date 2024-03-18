import React from 'react';
import '../styles/Section1.css'

const Section1 = () => {
    return (
        <>
            <div className="MainContainerSection1">
                <div className="BackgroundRectangle">
                </div>

                <div className="TextSection1">
                    <div className="News"><h1>News</h1></div>
                    <div className="NewsSubtext">
                        <div className="NewsTitle">
                            <h2>Lorem Ipsum</h2>
                        </div>

                        <div className="NewsText">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper egestas augue, in fringilla ipsum condimentum at.</span>
                        </div>

                    </div>
                </div>

                <div className="ImageSection1">
                    <div className="BigImage">
                        <img src={process.env.PUBLIC_URL + '/assets/Section1/bigpicture.jpg'} alt="image d'une jeune fille avec un cahier dans les mains" />
                    </div>

                    <div className="InstructorFrame">
                        <div className="InstructorFrameText">
                            <p>Learn from best <span>instructors</span> around the globe</p>
                        </div>
                        <div className="CircleContainer">
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.jpg'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.jpg'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.jpg'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.jpg'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.jpg'} alt="image d'un instructeur" /></div>
                        </div>
                    </div>

                    <div className="StudentsStat">
                        <div className="StudenIcon">
                        <i class='bx bx-user'></i>
                        </div>

                        <div className="StudentNumber">
                            <span>15k</span>
                        </div>

                        <div className="StudentText">
                            <span>Amazing students around the globe</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Section1;


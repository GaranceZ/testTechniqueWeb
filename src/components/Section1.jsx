import React, { useState, useEffect } from 'react';
import '../styles/Section1.css';

const Section1 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = process.env.PUBLIC_URL + '/assets/Section1/bigpicture.webp';

        image.onload = () => {
            setIsLoading(false);
        };

        image.onerror = () => {
            setIsError(true);
        };
    }, []);

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

                {isLoading ? (
                    <div>Loading...</div>
                ) : isError ? (
                    <div>Error loading image.</div>
                ) : (
                    <div className="ImageSection1">
                        <div className="BigImage">
                            <img src={process.env.PUBLIC_URL + '/assets/Section1/bigpicture.webp'} alt="image d'une jeune fille avec un cahier dans les mains" style={{ display: isLoading ? 'none' : 'block' }} />
                        </div>
                        <div className="InstructorFrame">
                        <div className="InstructorFrameText">
                            <p>Learn from best <span>instructors</span> around the globe</p>
                        </div>
                        <div className="CircleContainer">
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.webp'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.webp'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.webp'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.webp'} alt="image d'un instructeur" /></div>
                            <div className="Circle"><img src={process.env.PUBLIC_URL + '/assets/Section1/instructorpicture.webp'} alt="image d'un instructeur" /></div>
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
                    
                )}
            </div>
        </>
    );
};

export default Section1;

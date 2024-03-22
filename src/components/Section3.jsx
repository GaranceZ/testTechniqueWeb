import React from 'react';
import '../styles/Section3.css'

const Section3 = () => {
    return (
        <>
            <div className="MainContainerSection3">
                <div className="ImagesContainerSection3">
                    <div className="backgroundRectangle"></div>
                    <div className="Image1">
                        <img src={process.env.PUBLIC_URL + '/assets/Section3/toppicture.webp'} alt="image d'une femme devant un ordinateur avec un casque audio sur la tête" />
                    </div>
                    <div className="Image2">
                    <img src={process.env.PUBLIC_URL + '/assets/Section3/bottompicture.webp'} alt="image d'une femme devant un ordinateur avec un casque audio sur la tête" />
                    </div>
                </div>

                <div className="TextSection3">
                    <h2>Lorem Ipsum</h2>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at 
                        posuere libero. Suspendisse sit amet erat non nisl dignissim faucibus id 
                        ut augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum at posuere libero. Suspendisse sit amet erat non nisl 
                        dignissim faucibus id ut augue.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at 
                        posuere libero</p>
                </div>
            </div>
        </>
    );
}

export default Section3;
import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="MainContainerFooter">
                <div className="Footer">
                    <div className="SocialLinks">
                        <div className="Socials">
                            <div className="SocialsText">
                                <h2>Lorem Ipsum</h2>
                                <p>We are not here to sell you products, we sell value through our expertise.</p>
                            </div>
                            <div className="SocialNetworks">
                                <div className="IconSocial">
                                    <i class='bx bxl-facebook-circle'></i>
                                </div>

                                <div className="IconSocial">
                                    <i class='bx bxl-twitter' ></i>
                                </div>

                                <div className="IconSocial">
                                    <i class='bx bxl-instagram' ></i>
                                </div>

                                <div className="IconSocial">
                                    <i class='bx bxl-linkedin' ></i>
                                </div>

                            </div>
                        </div>

                        <div className="LinksFooter">
                            <ul>
                                <li>Home</li>
                                <li>Courses</li>
                                <li>Instructor</li>
                                <li>Resources</li>
                                <li>About Us</li>
                            </ul>

                            <ul>
                                <li>SME</li>
                                <li>Solutions</li>
                                <li>Reviews</li>
                                <li>Blog</li>
                            </ul>

                            <ul>
                                <li>Contact Us</li>
                                <li>Place A Call</li>
                                <li>Email</li>
                            </ul>

                            <ul>
                                <li>Job Opening</li>
                                <li>News</li>
                                <li>Research</li>
                            </ul>

                            <ul>
                                <li>Uk Privacy Policy</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>                                                                           
                    </div>


                    <div className="Newsletter">
                        <h2>Subscribe to get latest updates</h2>

                        <div className="InputNews">
                            <input type="text" placeholder="Your email address"></input>
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;
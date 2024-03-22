import React, { useRef } from 'react';
import '../styles/Section4.css';

const Section4 = () => {
    const commentsContainerRef = useRef(null);

    const scrollLeft = () => {
        if (commentsContainerRef.current) {
            commentsContainerRef.current.scrollBy({
                left: -800, 
                behavior: 'smooth' 
            });
        }
    };

    const scrollRight = () => {
        if (commentsContainerRef.current) {
            commentsContainerRef.current.scrollBy({
                left: 800, 
                behavior: 'smooth' 
            });
        }
    };
    

    return (
        <>
            <div className="MainContainerSection4">

                <div className="TextArrowSection4">
                    <div className="TextSection4">
                        <h1>What Our <span>Students</span> Say About Us</h1>
                    </div>

                    <div className="ArrowSection4">
                        <i className='bx bx-chevron-left' onClick={scrollLeft}></i>
                        <i className='bx bx-chevron-right' onClick={scrollRight}></i>
                    </div>


                </div>
                <div className="AllCommentsContainer" ref={commentsContainerRef}>
                    <div className="CommentsContainer">
                        <div className="Comment">
                            <div className="CommentUser">
                                <div className="UserPicture">
                                <img src={process.env.PUBLIC_URL + '/assets/Section4/Users/User1.webp'} alt="photo d'un utilisateur qui a laissé un commentaire" />
                                </div>

                                <div className="UserInfo">
                                    <h4>Mohh Jumah</h4>
                                    <p>Senior Developer</p>
                                </div>
                            </div>
                            
                                <div className="TextComment">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
                                    </p>
                                </div>
                        </div>

                        <div className="Comment">
                            <div className="CommentUser">
                                <div className="UserPicture">
                                <img src={process.env.PUBLIC_URL + '/assets/Section4/Users/User2.webp'} alt="photo d'un utilisateur qui a laissé un commentaire" />
                                </div>

                                <div className="UserInfo">
                                    <h4>John Mark</h4>
                                    <p>Data Analyst</p>
                                </div>
                            </div>
                            
                                <div className="TextComment">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
                                    </p>
                                </div>
                        </div>

                        <div className="Comment">
                            <div className="CommentUser">
                                <div className="UserPicture">
                                <img src={process.env.PUBLIC_URL + '/assets/Section4/Users/User3.webp'} alt="photo d'un utilisateur qui a laissé un commentaire" />
                                </div>

                                <div className="UserInfo">
                                    <h4>Rabiu Hassan</h4>
                                    <p>Marketer</p>
                                </div>
                            </div>
                            
                                <div className="TextComment">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
                                    </p>
                                </div>
                        </div>

                        <div className="Comment">
                            <div className="CommentUser">
                                <div className="UserPicture">
                                <img src={process.env.PUBLIC_URL + '/assets/Section4/Users/User4.webp'} alt="photo d'un utilisateur qui a laissé un commentaire" />
                                </div>

                                <div className="UserInfo">
                                    <h4>Assia Bezos</h4>
                                    <p>Ux Lead</p>
                                </div>
                            </div>
                            
                                <div className="TextComment">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
                                    </p>
                                </div>
                        </div>

                        <div className="Comment">
                            <div className="CommentUser">
                                <div className="UserPicture">
                                <img src={process.env.PUBLIC_URL + '/assets/Section4/Users/User5.webp'} alt="photo d'un utilisateur qui a laissé un commentaire" />
                                </div>

                                <div className="UserInfo">
                                    <h4>Elon Musk</h4>
                                    <p>Content Writer</p>
                                </div>
                            </div>
                            
                                <div className="TextComment">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;

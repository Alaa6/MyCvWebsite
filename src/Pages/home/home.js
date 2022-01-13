
import './home.css';
import myPic from '../../assets/images/myPic.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from "../../components/carouselItem/carouseltem";


export default function Home() {

    return (
        <div className="homeContainer" >
            <section id="my-name-section" className="home-sections">
                <h1>Alaa Ashraf Fathy</h1>
                <h3>Front-end and Cross-platform Developer </h3>
            </section>

            <section id="image-section" className="home-sections">
                <img src={myPic} alt="MyPic" className="my-pic" />
            </section>
            <section id="cv-content-section" className="home-sections">
                <div className="carousel-container">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs
                        interval={10000}
                        transitionTime={3000}
                    >
                        {/* 1 */}
                        <section >
                            <CarouselItem headerName="ABOUT ME" aboutMe />
                            <div className="split">
                                <div className="left">
                                    <p>I am junior Front end and Cross platform Developer . I seeking a challenging
                                    position in a reputable organization to utilize my knowledge in the field of
                                    front-end web development & cross platform mobile development and
                                enhance my skills in field of backend technologies while contributing to the company’s growth .</p>

                                </div>
                                <div className="right">
                                    <p>I enjoy learning new tools and techniques and communicating them to my teammates and  able to
                                    Identify issues & detecting their  Causes and coming up with
                                        optimum solutions while meeting tight deadline.</p>

                                </div>
                            </div>
                        </section>
                        {/* 2 */}
                        <section>
                            <CarouselItem headerName="EXPERIENCE" />
                            <div className="split">
                                <div className="left">
                                    <h3>Mobile Developer
                                        <span className="company-name">
                                            <a href="https://mojazapp.com/">@Mojaz inc .</a>
                                        </span>
                                        <span className="date"> Sep 2021 - Des 2021</span>
                                    </h3>
                                    <div className="description-title">Worked with :</div>

                                    <ul className="decription-body">
                                        <li> React native framework</li>
                                        <li>RESTful API</li>
                                        <li>Jira software</li>
                                        <li>Zeplin application</li>
                                        <li> Slack  application </li>     
                                    </ul>
                                </div>

                                <div className="left">
                                    <h3>Front-end & Cross-paltform  trainer
                                        <span className="company-name">
                                            <a href="https://www.iti.gov.eg/iti/home">@Information Technology Institute (ITI)</a>
                                        </span>
                                        <span className="date"> Nov 2020 - Feb 2021</span>
                                    </h3>
                                    <div className="description-title">Worked with :</div>

                                    <ul className="decription-body">
                                        <li>Javascript (ES6)</li>
                                        <li>JS libraries such as ReactJs and JQuery</li>
                                        <li>JS frameworks such as Angular and React native</li>
                                        <li>Redux thunk</li>
                                        <li>Typescript</li>
                                        <li> Bootstrap </li>
                                        <li>Flutter</li>
                                        <li>RESTful API</li>
                                        <li>Mocha , Jasmin , Git & gulp</li>
                                        <li>Node Js , Mongo DB & Firebase </li>
                                        <li> Microsoft team  application </li>
                                    </ul>

                                </div>
                                <div className="left">
                                    <h3>Front-end Developer
                                        <span className="company-name">
                                            <a href="https://7keema.com/">@7keema company</a>
                                        </span>
                                        <span className="date"> Oct 2019 – Sep 2020</span>
                                    </h3>
                                    <div className="description-title">Worked with :</div>

                                    <ul className="decription-body">
                                        <li> ReactJs library</li>
                                        <li> React native framework</li>
                                        <li>Grommet framework</li>
                                        <li>Redux sagas</li>
                                        <li>RESTful API</li>
                                        <li> Adobe XD application</li>
                                        <li> Slack  application </li>
                                    </ul>

                                </div>
                                {/* <div className="left">
                                    <h3>Mobile Developer
                                        <span className="company-name">
                                            <a href="https://www.newconcept-group.com/web/">@New company</a>
                                        </span>
                                        <span className="date"> Oct 2019 – Sep 2020</span>
                                    </h3>
                                    <p>I am junior Front end and Cross platform Developer . I seeking a challenging
                                    position in a reputable organization to utilize my knowledge in the field of
                                    front-end web development & cross platform mobile development and
                                enhance my skills in field of backend technologies while contributing to the company’s growth .</p>

                                </div> */}
                            </div>
                        </section>
                        {/* 3 */}
                        <section>
                            <CarouselItem headerName="EDUCATION" />
                            <div className="split">
                                <div className="left">
                                    <h3>Information Technology Institute ( ITI )
                                        <span className="date"> Oct 2020 - Feb 2021 </span>
                                    </h3>

                                    <p> Studied the 3 month intensive program in the track of Front-end & Cross platform web development.</p>
                                </div>


                                <div className="left">
                                    <h3>Faculty of computer science & Information system , Helwan University
                                        <span className="date">  2015 – 2019</span>
                                    </h3>
                                    <p> Studied the 4 year  in computer science  , Information system Department .</p>


                                </div>

                            </div>

                        </section>
                        {/* 4 */}
                        {/* <section>
                            <CarouselItem headerName="HOBBIES & INTERESTS" />
                        </section> */}

                    </Carousel>
                </div>
            </section>


        </div>
    );
}



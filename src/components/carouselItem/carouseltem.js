
import './carouselItem.css';
import CvDocument from "../../components/cvDocument/cvDocument";
import Pdf from '../../assets/documents/cv.pdf';


export default function CarouselItem({ headerTitle, aboutMe }) {

    return (
        <div className="center" >
            <div className="carousel-header">
                <div>
                    <h2 className="headerName">{headerTitle}</h2>
                    <div className="small-hr"></div>
                </div>

                {aboutMe ? (<div className="social-accounts">
                    <a target="_blank" href="https://www.linkedin.com/in/alaa-ashraf-30a8a914b/">
                        <img src="https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01/aa0402eb9ba2430d9d0620b59556efca.webp" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/alaa.ashraaff/">
                        <img src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01/4057345bcf57474b96976284050c00df.webp" />
                    </a>
                </div>) :
                    (<a className="pdf-cv" href={Pdf} target="_blank">DOWNLOAD MY FULL RESUME</a>)

                }
            </div>

            {headerTitle == "ABOUT ME" ?
                <section id="about-me" >
                    <div className="split">
                        <div className="left col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                            <p>I am junior Front end and Cross platform Developer . I seeking a challenging
                            position in a reputable organization to utilize my knowledge in the field of
                            front-end web development & cross platform mobile development and
                        enhance my skills in field of backend technologies while contributing to the company’s growth .</p>

                        </div>
                        <div className="right col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <p>I enjoy learning new tools and techniques and communicating them to my teammates and able to
                            Identify issues & detecting their Causes and coming up with
                        optimum solutions while meeting tight deadline.</p>

                        </div>
                    </div>
                </section> :

                headerTitle == "EXPERIENCE" ?
                    <section id="experience" >
                        <div className="split">
                            <div className="left col-12  col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <h3 className="job-title">Mobile Developer
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
                                    <li> Slack application </li>
                                </ul>
                            </div>

                            <div className="left col-12  col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <h3 className="job-title">Front-end & Cross-paltform trainer
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
                                    <li> Microsoft team application </li>
                                </ul>

                            </div>
                            <div className="left col-12  col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                                <h3 className="job-title">Front-end Developer
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
                                    <li> Slack application </li>
                                </ul>

                            </div>
                        </div>
                    </section> :
                    <section id="education">
                        <div className="split">
                            <div className="left col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <h3 className="job-title ">Information Technology Institute ( ITI )
                                <span className="date"> Oct 2020 - Feb 2021 </span>
                                </h3>

                                <p> Studied the 3 month intensive program in the track of Front-end & Cross platform web development.</p>
                            </div>

                            <div className="left col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <h3 className="job-title ">Faculty of computer science & Information system , Helwan University
                                <span className="date"> 2015 – 2019</span>
                                </h3>
                                <p> Studied the 4 year in computer science , Information system Department .</p>

                            </div>

                        </div>

                    </section>
            }

        </div>
    );
}



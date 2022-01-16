
import './footer.css';
import Pdf from '../../assets/documents/cv.pdf'
import QuickIDItems from '../quikIdItems/quickIdItems';


export default function Footer() {

    const address = ``

    return (
        <section id="footer-section" className="home-sections">
            <div className="split-footer">
                <div className="left-footer">
                    <div className="footer-title" >
                        <h2 >QUICK ID</h2>
                        <div className="small-hr" ></div>
                    </div>
                    <div className="footer-body">
                        {/* <QuickIDItems leftTitle={'Phone'}    rightDes={'+201142815672'}/> */}
                        <QuickIDItems contactsLeft={'Phone'} contactsRight={'+2011********'} />
                        {/* <QuickIDItems leftTitle={'Email'}    rightDes={'alaa.ashraf775@gmail.com'}/> */}
                        <QuickIDItems contactsLeft={'Email'} contactsRight={'alaa.*********@gmail.com'} />
                        {/* <QuickIDItems leftTitle={'Address'}  rightDes={`20 El Fath Street third settlement New Cairo , Cairo, Egypt `}/> */}
                        <QuickIDItems contactsLeft={'Address'} contactsRight={`Cairo , Egypt`} />

                    </div>


                </div>
                <div className="right-footer">
                    <div className="footer-title" >
                        <h2 style={{ color: "#000" }} >Skills</h2>
                        <div className="small-hr" ></div>
                    </div>

                    <div className="split">
                        <div>
                            {/* <h3>Technical skills</h3> */}
                            <ul className="skills">
                                <li>Object oriented programming</li>
                                <li> Java Script (Es6)
                                <ul>
                                        <li>React js library</li>
                                        <li>Angular & React Native framework</li>
                                    </ul>
                                </li>
                                <li> Work with Redux
                                <ul>
                                        <li>Redux thunk</li>
                                        <li>Redux sagas</li>
                                    </ul>
                                </li>
                                <li>Work with Firebase , Mongo DB  & Realm database</li>

                            </ul>
                        </div>
                        <div>
                            <ul className ="skills">

                                <li>HTML4 ,HTML 5</li>
                                <li>CSS 2 , CSS 3 , Scss</li>
                                <li>Bootstrap 4</li>
                                <li>Ability to integrate with RESTful API</li>
                                <li>Dart  language
                                    <ul><li>Flutter</li></ul>
                                </li>
                                <li>Object oriented programming</li>
                                <li> Version control management system (Github and Gitlab)</li>
                            </ul>
                        </div>
                        {/* <div>
                            <h3>Soft skills</h3>

                            <ul>
                                <li>Motivation</li>
                                <li>communication</li>
                                <li>Presentaion</li>
                                <li>Team worker</li>
                            </ul>

                        </div> */}
                    </div>

                </div>

            </div>
            <section className="bottom-footer">

                <div className="footer-split">
                    {/* 1 */}
                    <div className="footer-split-left">
                        <a className="footer-pdf-cv" href={Pdf} target="_blank">DOWNLOAD MY FULL RESUME</a>
                        <div className="copy-right">&copy;2022 by Alaa Ashraf</div>
                    </div>
                    {/* 2 */}
                    <div className="footer-split-right">
                        <div className="social-accounts">
                            <a target="_blank" href="https://www.linkedin.com/in/alaa-ashraf-30a8a914b/">
                                <img src="https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01/aa0402eb9ba2430d9d0620b59556efca.webp" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/alaa.ashraaff/">
                                <img src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01/4057345bcf57474b96976284050c00df.webp" />
                            </a>
                        </div>
                        <div className="follow-me">Follow me on social netwroks</div>
                    </div>
                </div>

            </section>
        </section>

    );
}



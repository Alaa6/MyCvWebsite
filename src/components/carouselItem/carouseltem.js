
import './carouselItem.css';
import CvDocument from "../../components/cvDocument/cvDocument";
import Pdf from '../../assets/documents/cv.pdf';


export default function CarouselItem({ headerName, aboutMe }) {

    return (
        <div  >
            <div className="carousel-header">
                <div>
                    <h2 className="headerName">{headerName}</h2>
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

        </div>
    );
}



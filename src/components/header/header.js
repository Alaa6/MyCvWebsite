
import './header.css';
import Pdf from '../../assets/documents/cv.pdf';

export default function Header() {

    return (
        <div className="Headercontainer" >
            <section id="nav-bar-section" className="nav-bar-sections">
                <ul className='nav-bar'>
                    <li> <a className="nav-bar-item" href="#"> Home </a></li>
                </ul>
            </section>
            <section id="pdf-cv-section"  className="nav-bar-sections">
                <a className="nav-bar-item" href={Pdf} target="_blank">DOWNLOAD MY FULL RESUME</a>
            </section>


        </div>
    );
}



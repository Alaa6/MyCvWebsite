
import './cvDocument.css';
import Pdf from '../../assets/documents/cv.pdf';

export default function CvDocument() {

    return (
        <a id="pdf-cv"  href={Pdf} target="_blank">DOWNLOAD MY FULL RESUME</a>
    );
}



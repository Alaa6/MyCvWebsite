
import './quickIdItems.css';

export default function QuickIDItems({ contactsLeft, contactsRight }) {

    return (
        
            <div className="quick-id-item row">
                <div className="contacts-left col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h3>  {contactsLeft} :  </h3>
                </div>
                <div className="contacts-right col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <span> {contactsRight} </span>
                </div>
            </div>

    );
}



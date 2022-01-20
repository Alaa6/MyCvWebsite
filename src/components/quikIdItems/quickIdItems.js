
import './quickIdItems.css';

export default function QuickIDItems({ contactsLeft, contactsRight }) {

    return (
        

           
            <div className="quick-id-item">
                <div className="contacts-left">
                    <h3>  {contactsLeft}   </h3>
                </div>
                <div className="contacts-right">
                    <span> {contactsRight} </span>
                </div>
            </div>

    );
}



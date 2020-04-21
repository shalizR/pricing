import MyDropdown from './MyDropdown';

const MyTable = props => (
    <div>
        <h2>Plans and Prices</h2>
        <MyDropdown />
        <div className="Rtable Rtable--4cols">
            <div className="Rtable-cell order1">
                <h3>FREE</h3>
                <h4><small>$</small>0/mo</h4>
            </div>
            <div className="Rtable-cell order2">The basics for private and secure communications</div>
            <div className="Rtable-cell order3">
                <ul>
                    <li>1 user</li>
                    <li>500 MB storage</li>
                    <li>1 address</li>
                    <li>
                        {(props.plans[1].MaxDomains > 0) ? (props.plans[1].MaxDomains) : 'No'} domain
                    </li>
                    <li>ProtonVPN (optional)*</li>
                </ul>
            </div>
            <div className="Rtable-cell order4"><button type="button">Select</button></div>

            <div className="Rtable-cell order1">
                <h3>PLUS</h3>
                <h4><small>$</small>0/mo</h4>
            </div>
            <div className="Rtable-cell order2">Full-featured mailbox with advanced protection</div>
            <div className="Rtable-cell order3">
                <ul>
                    <li>{props.plans[0].MaxMembers} user</li>
                    <li>5 GB storage*</li>
                    <li>{props.plans[0].MaxAddresses} addresses*</li>
                    <li>Supports {props.plans[0].MaxDomains} domain*</li>
                    <li>Supports folders, labels, filters, auto-replay, IMAP/SMTP and more</li>
                    <li>ProtonVPN (optional)*</li>
                </ul>
            </div>
            <div className="Rtable-cell order4"><button type="button">Select</button></div>

            <div className="Rtable-cell order1">
                <h3>PROFESSIONAL</h3>
                <h4><small>$</small>0/mo</h4>
            </div>
            <div className="Rtable-cell order2">ProtonMail for professionals and businesses</div>
            <div className="Rtable-cell order3">
                <ul>
                    <li>1-5000 user*</li>
                    <li>5 GB storage per user*</li>
                    <li>{(props.plans[2].MaxAddresses)/2} addresses per user*</li>
                    <li>Supports {props.plans[2].MaxDomains} domains*</li>
                    <li>Catch all email, multi user management, priority support and more</li>
                    <li>ProtonVPN (optional)*</li>
                </ul>
            </div>
            <div className="Rtable-cell order4"><button type="button">Select</button></div>
            
            <div className="Rtable-cell order1">
                <h3>VISIONARY</h3>
                <h4><small>$</small>0/mo</h4>
            </div>
            <div className="Rtable-cell order2">ProtonMail for families and small businesses</div>
            <div className="Rtable-cell order3">
                <ul>
                    <li>{props.plans[5].MaxMembers} users</li>
                    <li>20 GB storage</li>
                    <li>{props.plans[5].MaxAddresses} addresses</li>
                    <li>Supports {props.plans[5].MaxDomains} domains</li>
                    <li>Includes all features</li>
                    <li>Priority support</li>
                    <li>Includes ProtonVPN</li>
                </ul>
            </div>
            <div className="Rtable-cell order4"><button type="button">Select</button></div>

        </div>

        <style jsx global>{`
            body,
            button,
            input,
            select,
            textarea {
                color: #404040;
                font-size: 18px;
                line-height: 1.5;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                clear: both;
              letter-spacing: 2px;
            }
            
            h2 {
              font-size: 1rem;
              color: #007489;
            }
            
            p {
              margin-bottom: 1.5em;
              color: #898989;
            }
            
            b,
            strong {
                font-weight: bold;
            }
            
            dfn,
            cite,
            em,
            i {
                font-style: italic;
            }
            
            small {
                font-size: 75%;
            }
            
            big {
                font-size: 125%;
            }



            .Rtable {
                display: flex;
                flex-wrap: wrap;
                margin: 0 0 3em 0;
                padding: 0;
           }
            .Rtable-cell {
                box-sizing: border-box;
                flex-grow: 1;
                width: 100%;
                padding: 0.8em 1.2em;
                overflow: hidden;
                list-style: none;
                border: solid 3px white;
                background: hsl(0, 0%, 90%);
                ;
           }
            .Rtable-cell > h1, .Rtable-cell > h2, .Rtable-cell > h3, .Rtable-cell > h4, .Rtable-cell > h5, .Rtable-cell > h6 {
                margin: 0;
           }
            .Rtable--2cols > .Rtable-cell {
                width: 50%;
           }
            .Rtable--3cols > .Rtable-cell {
                width: 33.33%;
           }
            .Rtable--4cols > .Rtable-cell {
                width: 25%;
           }
            .Rtable--5cols > .Rtable-cell {
                width: 20%;
           }
            .Rtable--6cols > .Rtable-cell {
                width: 16.6%;
           }

           .order1 {order:1;}
           .order2 {order:2;}
           .order3 {order:3;}
           .order4 {order:4;}
            
        
        `}</style>
    </div>
);

export default MyTable;
import Head from 'next/head';

import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div className="d-flex p-2 bd-highlight" style={layoutStyle}>
            <Head>
                <title>FE Test: Modern Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                {/* <link 
                    rel="stylesheet" 
                    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" 
                    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" 
                    crossorigin="anonymous" 
                /> */}
            </Head>
        <div>
            <Header />
            {props.content}
        </div>
    </div>
);

export default Layout;
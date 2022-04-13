import {Header, Footer} from '../../common';
const BaseLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );

};

export default BaseLayout;
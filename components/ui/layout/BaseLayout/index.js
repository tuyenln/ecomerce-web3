import {Header, Footer} from '@components/ui/common';
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
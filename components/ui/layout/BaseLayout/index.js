import {Header, Footer} from '@components/ui/common';
import style from "./BaseLayout.module.css";
const BaseLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className={style.fit}>{children}</div>
            <Footer />
        </>
    );
};

export default BaseLayout;
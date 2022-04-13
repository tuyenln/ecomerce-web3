import head from "./Header.module.css";
import Image from "next/image";
const Header = () => {
    return (
        <header className={head.wrapper}>
            <div>
                <Image src="/images/brand/logo.webp" width={50} height={50} />
            </div>
            
            <ul className={head.menu}>
                <li>Home</li>
                <li>Couses</li>
                <li>About</li>
            </ul>
            
            <div className={head.button}>
                <button className="aniBtn">Connect</button>
            </div>
        </header>
    );

};

export default Header;

import head from "./Header.module.css";
const Header = () => {
    return (
        <header className={head.wrapper}>
            <div>
                Logo
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Couses</li>
                    <li>About</li>
                </ul>
            </div>
            <div><button>Connect</button></div>
        </header>
    );

};

export default Header;

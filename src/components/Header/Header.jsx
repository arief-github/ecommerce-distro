import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '/src/assets/crown.svg';

const routeData = [
    {
        name: "SHOP",
        url: "/shop"
    },
    {
        name: "CONTACT",
        url: "/shop"
    }
];

export const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                {
                    routeData.map(({ name, url }) => (
                        <Link className="option" to={url}>{name}</Link>
                    ))
                }
            </div>
        </div>
    )
}
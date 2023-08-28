import './Header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '/src/assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js'
import prompt from "react-router-dom/es/Prompt.js";

export const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser === null ? (
                        <Link className="option" to="/shop/signin">SIGN IN</Link>
                    ) : (
                        <Link className="option" to="/" onClick={async () => {
                            await prompt("Apakah anda ingin logout ?")
                            await auth.signOut()
                        }
                        }
                        >SIGN OUT</Link>
                    )
                }


            </div>
        </div>
    )
}
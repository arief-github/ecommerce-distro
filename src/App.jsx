import {useState, useEffect} from 'react'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'
import Homepage from "./pages/Homepage/Homepage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import './styles/App.css'
import {Route, Switch} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {SignInPage} from "./pages/SignInPage/SignInPage.jsx";
import {SignUpPage} from "./pages/SignUpPage/SignUpPage.jsx";
import Redirect from "react-router-dom/es/Redirect";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    let unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }

            setCurrentUser(userAuth)

            return () => {
                unsubscribeFromAuth()
            }
        })
    }, [unsubscribeFromAuth])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)

            console.log(user)
        })
    }, [])

    return (
        <>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/shop" component={ShopPage}/>
                <Route path="/shop/signin" render={() => currentUser ? (<Redirect to="/"/>) : <SignInPage/>}/>
                <Route path="/shop/signup" render={() => currentUser ? (<Redirect to="/"/>) : <SignUpPage/>}/>
            </Switch>
        </>

    )
}

export default App

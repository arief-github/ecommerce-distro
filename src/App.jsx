import { useState, useEffect } from 'react'
import { auth } from './firebase/firebase.utils.js'
import Homepage from "./pages/Homepage/Homepage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import './styles/App.css'
import {Route, Switch} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {SignInPage} from "./pages/SignInPage/SignInPage.jsx";
import {SignUpPage} from "./pages/SignUpPage/SignUpPage.jsx";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

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
                <Route path="/shop/signin" component={SignInPage} />
                <Route path="/shop/signup" component={SignUpPage} />
            </Switch>
        </>

    )
}

export default App

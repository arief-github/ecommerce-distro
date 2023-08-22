import Homepage from "./pages/Homepage/Homepage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import './styles/App.css'
import {Route, Switch} from "react-router-dom";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/shop" component={ShopPage}/>
            </Switch>
        </>

    )
}

export default App

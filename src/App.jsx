import Homepage from "./pages/Homepage/Homepage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import './styles/App.css'
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>

    )
}

export default App

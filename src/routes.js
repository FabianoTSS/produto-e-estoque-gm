import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UserRegister from './components/Users/UserRegister';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/RegisterUser' exact component={ UserRegister } />
            </Switch>
        </BrowserRouter>
    )
}
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './components/Menu'
import Home from './views/Home'

const Routes = () => (
  <Router>
        <Switch>
          <Route path="/">
            <Menu />
            <Home />
          </Route>
        </Switch>
    </Router>
)

export default Routes
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import About from './Pages/About';
import Indicators from './Pages/Indicators';
import Contact from './Pages/Contact';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                <Route path="/about" component={About} />
                <Route path="/indicators" component={Indicators} />
                <Route path="/contact" component={Contact} />
                {/* Add routes for other pages here */}
            </Switch>
        </Router>
    );
};

export default Routes;

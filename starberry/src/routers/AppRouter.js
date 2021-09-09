import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from 'components/Header';
import NotFoundPage from 'components/NotFoundPage';
import Footer from 'components/Footer';
import Login from 'components/Login';
import PropertyPage from 'components/PropertyList';
import PropertyViewPage from 'components/PropertyView';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={Login} exact={true} />
    <Route path="/propertylist" component={PropertyPage} />
    <Route path="/propertyview/:id" component={PropertyViewPage} />
    <Route component={NotFoundPage} />
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
    );
export default AppRouter;
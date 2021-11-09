import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import HomeView from '../../views/HomeView'
import CategoriesView from '../../views/CategoriesView'
import TransactionsView from '../../views/TransactionsView'

import routes from '../routes';

const Nav = () => (

    <>
      <header>
        <nav>
          <NavLink className="nav_link"
          activeClassName="nav_link__active"
            exact
            to={routes.home}
          >
            Home
          </NavLink>

          <NavLink className="nav_link"
          activeClassName="nav_link__active"
            exact
            to={routes.categories}
          >
            Категорії
          </NavLink>

          <NavLink className="nav_link"
          activeClassName="nav_link__active"
            exact
            to={routes.transactions}
          >
            Транзакції
          </NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route  path={routes.categories} component={CategoriesView} />
        <Route  path={routes.transactions} component={TransactionsView} />
      </Switch>
    </>
)
export default Nav;

import * as React from "react";
import { render } from 'react-dom'
import { createStore, Store } from 'redux';
import { Provider, connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Redux SetUp
import { defaultStore, AppStore } from './redux/store/defaultStore';
// Materia-UI SetUp
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Containers && Components
import { Header } from './components/Header'
import Main from './containers/Main'
import { IndexPage } from './containers/Travel/IndexPage';
import Compra from './containers/Compra/Compra';
import { DrawableMenu } from './components/Drawer/DrawerComponent'
import { DrawableMenuReducer } from './redux/reducers/drawableMenu';
import { reducersStore } from './redux/reducers/index';
import { pagesDict } from './router/pages';

export class App extends React.Component {

  private store: Store<AppStore>

  constructor(props: any, state: any) {
    super(props, state)
    this.store = createStore(reducersStore, defaultStore) as Store<AppStore>
    console.log('Store Init: ', this.store)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={this.store}>
            <Router>
              <div>
                <Route component={Header}/>
                <Route component={DrawableMenu}/>
                <Route exact path={pagesDict.home.path} component={IndexPage} />
                <Route exact path={pagesDict.shopList.path} component={Compra} />
                <Route path='/hello' component={Main} />
              </div>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    )
  }

}

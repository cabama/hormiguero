import * as React from "react";
// redux
import { connect } from 'react-redux';
import { AppStore, defaultStore, ListaCompraType } from '../../redux/store/defaultStore';
// redux reducers
import { DrawableActions } from '../../redux/reducers/drawableMenu';
import { switchVisibility } from '../../redux/actions/drawableActions';
// router
import { routerPropsType } from '../../router/routerProps';
// materialize components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { pagesDict } from "router/pages";


type PropsDrawer = 
  ReturnType<typeof mapStateToProps> & 
  ReturnType<typeof mapDispatchToProps> &
  routerPropsType


export default class DrawerSimpleExample extends React.Component <PropsDrawer, any> {

  constructor(props: PropsDrawer, state: any) {
    super(props);
  }

  private redirect = (url: string) => {
    this.props.history.push(url)
  }

  public switchDrawerVisibility = ()  => {
    const a = this.props.dispatches.switchVisibility()
    return this.props.dispatch(a)
  }

  render() {
    return (
      <div>
        <Drawer open={this.props.stateDrawable.visible}>
          <MenuItem onClick={() => {this.switchDrawerVisibility()}} >Cerrar</MenuItem>

          <MenuItem 
            onClick={() => { this.props.history.push('Compra') }}
          >

            Lista de la Compra
          </MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

// SetUp Redux in Props
const mapStateToProps = (state: {DrawableMenuReducer: any}) => {
  return {
    stateDrawable: state.DrawableMenuReducer
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
   dispatch,
   dispatches: {
     switchVisibility
   }
  }
}

// Connect Component to the Store
export const DrawableMenu = connect(mapStateToProps, mapDispatchToProps)(DrawerSimpleExample)
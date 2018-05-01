import * as React from "react";
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import { connect } from 'react-redux';
import { AppStore, defaultStore } from '../../redux/store/defaultStore';
import { switchVisibility } from '../../redux/actions/drawableActions';



export const headerStyle = {
  width: '100%',
  background: 'red'
}

export const FlatButtonStyle = {
  color: 'white',
  marginTop: '5px'
}


export class HeaderComponent extends React.Component<any, any> {

  public switchVis = () => {
    const a = this.props.dispatches.switchVisibility()
    return this.props.dispatch(a)
  }

  private redirect = (url: string) => {
    this.props.history.push(url)  
  }

  constructor(props: any, state: any) {
    super(props, state);
    (window as any).carlos = props
  }

  navButtons = () => {
    return (
      <div>
        <FlatButton
          label="Asturias"
          style={FlatButtonStyle}
          onClick={() => { this.redirect('hello') }}
        ></FlatButton>
        <FlatButton
          label="Cadi"
          style={FlatButtonStyle}
          onClick={() => {this.redirect('/')}}
        ></FlatButton>    
      </div>
    )
  }

  render() {
    return (
      <div style={headerStyle}>
        <AppBar
          title="Reshu Home"
          // iconElementRight={ this.navButtons() }
          onLeftIconButtonClick={ () => {this.switchVis()} }
        />
      </div>
    )
  }
}

// SetUp Redux in Props
const mapStateToProps = (state: { DrawableMenuReducer: any }) => {
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
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
import * as React from "react";

// Redux Setup
import { connect } from 'react-redux';
import { AppStore, defaultStore, ListaCompraType } from '../../redux/store/defaultStore';

// Material Components
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';

// Components
import { NoteList } from '../../components/NoteList/NoteList';

// Import Local Style
// import * as s from './style.less';

// Adapter for fetch
import analyticsRequest from '../../adapters/analyticsRequest'
import { colors } from "material-ui/styles";
import { shopList } from '../../redux/store/shopListStore';
import { ShopListReducer, shopListTypes } from '../../redux/reducers/shopListReducer';


const divStyle = {
  margin: '10px 0',
  display: 'inline-block', // note the capital 'W' here
};

type PropsCompra =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>


export class CompraPage extends React.Component<PropsCompra, {}> {

  private nextItem: string = ""
  private listaCompra: ListaCompraType[]

  constructor(props: PropsCompra, state: AppStore) {
    super(props, state);
    this.listaCompra = props.state.listaCompra
  }

  private saveNew = (() => {
    alert('Blasa')
  })


  render() {
    return (
      <div>
        <div className="container">
          { 
            this.listaCompra.map( (value, index) => 
              <NoteList
                key={index}
                className='col-12 col-md-6'
                style={divStyle}
                title={value.title}
                date={value.date}
                values={value.lista}
                onChange={this.onChange.bind(this)}
              />
            )
          }
        </div>
      </div>
    )
  }

  private onChange = (type: string, value: any) => {
    this.props.dispatch({ type: shopListTypes.addItem , ...value})
  }

}

// SetUp Redux in Props
const mapStateToProps = (state: {ShopListReducer: any}) => {
  return {
    state: {
      listaCompra: state.ShopListReducer
    }
  }
}

const mapDispatchToProps = (dispatch: any) =>  {return {dispatch: dispatch}}

// Connect Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(CompraPage)
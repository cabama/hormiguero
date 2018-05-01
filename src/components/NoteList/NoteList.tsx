
import * as React from "react";

// Material Components
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';

export type NoteListType = {
  key?: number,
  className?: string,
  style?: React.CSSProperties,
  title: string,
  date: string,
  values: {item: string, description?: string}[],
  onChange?: (type: string, value: any) => {}
}

export class NoteList extends React.Component <NoteListType, any > {

  state = {
    nextItem: ''
  }

  constructor(props: NoteListType, state: any) {
    super(props, state)
    this.state = state
  }

  render() {
    return (
      <div 
        className={this.props.className || 'col-8'}
        style={this.props.style}
      >
      
      <Card>

        <CardHeader
          title={this.props.title}
          subtitle={this.props.date}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardText expandable={true}>
          <List>
            {
              this.props.values.map( (value, index) =>
                <ListItem
                  key = {index}
                  leftCheckbox={<Checkbox />}
                  primaryText={value.item}
                />
              )
            }
          </List>

          <div className="container">
            <div className="row">
              <TextField
                className="col-6"
                hintText="Ex: Arroz"
                floatingLabelText="Item"
                value={this.state.nextItem}
                onChange={this.updateNewItem}
              />
              <div className="col-6">
                <RaisedButton
                  style={{
                    position: 'absolute',
                    bottom: '9px',
                    marginLeft: '10px'
                  }}
                  label="+"
                  onClick={() => this.saveNewItem()}
                ></RaisedButton>
              </div>
            </div>
          </div>
  
        </CardText>
      </Card>
    </div>)
  }

  updateNewItem = (event: any) => {
    this.setState({
      nextItem: event.target.value,
    });
  };

  private saveNewItem () {
    this.props.onChange('newItem', { id: this.props.title, item: this.state.nextItem })
  }

  

}



import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class AddNewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        description: '',
        tournamentData: moment()
      },
      errors: {},
      loading: false,
      done: false
    }
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  };
  
  handlePickerChange = (date) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        tournamentData: date
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    //valitation
    let errors = this.validateInputs();
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.setState({ loading: true });
      this.saveGameHook();
    } else {
      this.setState({ errors });
    }
  }

  validateInputs = () => {
    const { data } = this.state;
    const errors = {};

    if (!data.name) errors.name = "Player name can't be blank!";
    if (!data.description) errors.description = "Description can't be blank!";
    if (!data.tournamentData) errors.tournamentData = "When the tournament starts?";

    return errors;
  };
  
  saveGameHook = () => {
    const { name, description, tournamentData } = this.state.data;
    this.props.saveGame({ name, description, tournamentData });
  };

  clearForm = () => {
    this.setState({
      data: {
        name: '',
        description: '',
        tournamentData: moment()
      },
      errors: {}
    })
  };

  render() {
    return (
      <div className="modal fade" id="addNewGame" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <form onSubmit={this.onSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add new game</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {!!this.state.errors.global && 
                  <small id="emailHelp" className="form-text text-danger">
                    {this.state.errors.global}
                  </small>
                }
                <div className="form-group">
                  <label htmlFor="gameName">Game name</label>
                  <input className="form-control" value={this.state.data.name} onChange={this.onChange} type="text" name='name' id='gameName'/>
                  <small id="emailHelp" className="form-text text-danger">{this.state.errors.name}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" rows="3" name='description' value={this.state.data.description} onChange={this.onChange}></textarea>
                  <small id="emailHelp" className="form-text text-danger">{this.state.errors.description}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="tournamentData">Data</label>
                  <DatePicker
                    id='tournamentData'
                    selected={this.state.data.tournamentData}
                    onChange={this.handlePickerChange}
                    dateFormat="YYYY/MM/DD"
                    className='form-control'
                    name='tournamentData'
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewGame;
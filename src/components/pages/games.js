import React, { Component } from 'react'
import { fetchGames } from 'actions/';
import { saveGame } from 'actions/';
import { connect } from 'react-redux';

import AddNewGame from './games/form';
import Message from 'components/messages/message';
import GameListViewmode from './games/game_list_viewmode';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: 'list'
    }
  }

  componentDidMount() {
    this.props.fetchGames();
  }
  
  viewModeChanged = (e) => {
    this.setState({ viewMode: e.target.name });
  }

  render() {
    return (
      <div>
        <div className="pageHeader col-11 mx-auto mt-3 d-flex">
          <h1>
            <i className="fa fa-trophy mr-3" aria-hidden="true"></i>
            <span>Tournamets List</span>
          </h1>
          <div className="btn-group" role="group" aria-label="Games controll panel">
            {this.state.viewMode === 'list'
              ? <button type="button" className="btn btn-outline-secondary"
                    name='groups'
                    onClick={this.viewModeChanged} >
                  <i className="fa fa-th" aria-hidden="true"></i>
                </button>
              : <button type="button" className="btn btn-outline-secondary"
                    name='list'
                    onClick={this.viewModeChanged} >
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                </button>
            }        
            {this.props.currentUser &&
              <button type="button" className="btn btn-outline-secondary" 
                data-toggle="modal"
                data-target="#addNewGame">
                  Add new game
              </button>
            }
          </div>
        </div>

        { this.props.games.length > 0
            ? <GameListViewmode 
                games = {this.props.games}
                viewMode={this.state.viewMode} />
            : <div className="col-11 mx-auto">
                <Message mgsRole='info col-12 mt-2' mgs='No games added, yet!' />
              </div>
        }
        <AddNewGame saveGame={this.props.saveGame}
                    fetchGames={this.props.saveGame} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    games: state.games
  }
};

const mapDispatchToProps = {
  saveGame,
  fetchGames
};

export default connect( mapStateToProps, mapDispatchToProps )(Games);

import React, {Component} from 'react';
import SinglePlayer from './single_player';
import SavePlayers from './components/save_players';

class PlayersList extends Component {
  render() {
    return (
      <table className="table text-center mt-2">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">player name</th>
            <th className="text-center">player position</th>

            {!this.props.tournamentStarted &&
              <th className="text-center">
                {this.props.needSaved
                  ? <SavePlayers savePlayers = {this.props.savePlayers}/>
                  : <span>edit position</span>
                }
              </th>
            }
          </tr>
        </thead>
        <tbody>
          {this.props.playersAdded.map((player, index) => {
            return <SinglePlayer key={player._id} player={player} index={index} {...this.props}/>
          })}
        </tbody>
      </table>
    );
  }
};

export default PlayersList;

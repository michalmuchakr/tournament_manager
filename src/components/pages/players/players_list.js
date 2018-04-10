import React, { Component } from 'react';
import _ from 'lodash';
import SinglePlayer from './single_player';
import Pagination from 'components/shared/pagination/pagination';
import { SmartPaging } from 'controllers/pagination';
import Message from 'components/messages/message';

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players_list: this.props.players,
      playersToDisplay: this.props.players,
      pageContent: [],
      pages: [],
      currentPage: 0,
      pagesLength: 0,
      directTarget: 0,
      options: {
        perPage: 10,
        shortBreak: 5
      }
    }
  };
  
  componentDidMount() {
    this.getVisiblePage()
  }
  
  componentWillReceiveProps(nextProps) {
    this.setPlayers(nextProps.players)
  }
  
  setPlayers(playersToDisplay) {
    this.setState({
      ...this.state,
      playersToDisplay
    }, () => this.getVisiblePage())
  }

  getVisiblePage = () => {
    let dataPlayers = _.filter( this.state.playersToDisplay, o => { return !o.deleted; } ),
        paginator = SmartPaging.fancyPagination(dataPlayers, this.state.options.perPage, this.state.currentPage);

    this.setState({
      ...this.state,
      pageContent: paginator.visibleItems,
      pages: paginator.pages,
      pagesLength: paginator.pages.length
    }, () => this.checkForPageExists())
  }
  
  checkForPageExists = () => {
    this.state.currentPage > this.state.pagesLength &&
      this.changepage(0)
  }
  
  changepage = (pageNumber) => {
    let pageContent = this.state.pages[pageNumber];

    this.setState({
      ...this.state,
      pageContent,
      currentPage: pageNumber
    })
  }

  perPageOnChange = e => {
    this.setState({
      ...this.state,
      options: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    },  () => this.getVisiblePage(this.props.players) )
  }

  searchRecords = e => {
    let players_list = Object.assign([], this.state.players_list),
        filterd = _.filter(players_list, function(o) { 
                      return o.name.includes(e.target.value);
                   });
    this.setPlayers(filterd);
  }
  
  render() {
    return (
      <div className="players">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-12">
            <div className="row d-flex justify-content-end">
              <Pagination searchRecords = { this.searchRecords}
                          currentPage     = { this.state.currentPage } 
                          breakPoints     = { this.state.breakPoints } 
                          options         = { this.state.options } 
                          perPageOnChange = { this.perPageOnChange }
                          changepage      = { this.changepage }
                          pagesLength     = { this.state.pagesLength }
                          

                          firstHandler    = { () => this.changepage(0) }
                          prevHandler     = { () => this.changepage(this.state.currentPage - 1) }
                          nextHandler     = { () => this.changepage(this.state.currentPage + 1) }
                          lastHandler     = { () => this.changepage(this.state.pagesLength - 1) } />
            </div>
          </div>
        </div>
        {this.state.pageContent
          ? <div className="players-list mt-2">
              {this.state.pageContent.map(player => {
                return <SinglePlayer key={player._id} player={player} editPlayer={this.props.editPlayer} {...this.props}/>
              })}
            </div>
          : <Message mgsRole='alert alert-info col-12' mgs='Brak zawodników do wyświetlenia!' />
        }
      </div>
    )
  }
}

export default PlayersList;

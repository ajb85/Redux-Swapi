import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    // return something here to indicate that you are fetching data
    console.log(this.props);
    return (
      <div className="CharactersList_wrapper">
        {this.props && this.props.fetching && <div>Fetching Characters...</div>}
        {this.props && this.props.characters && (
          <CharacterList characters={this.props.characters} />
        )}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters,
  err: state.err
});

export default connect(
  mapStateToProps,
  { fetchChars }
)(CharacterListView);

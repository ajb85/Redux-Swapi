import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchingChars } from "./actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div className="CharactersList_wrapper">Fetching Characters...</div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

mapStateToProps = state => {
  return {
    fetching: state.fetching,
    characters: state.characters
  };
};
export default connect(
  mapStateToProps,
  {
    fetchingChars
  }
)(CharacterListView);

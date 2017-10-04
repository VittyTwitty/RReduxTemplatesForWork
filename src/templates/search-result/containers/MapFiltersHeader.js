import React, {Component} from 'react';
import HeaderFilterButton from "../components/HeaderFilterButton";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionFilters from '../actions/index';

class MapFiltersHeader extends Component {
  filterButtons;

  constructor() {
    super();

    this.filterButtons = ['Any Price', 'Any Beds', 'Any Bath', 'Any Filters']
  }


  render() {
    const {toggleNav} = this.props.actionFilters;
    const {
      stateOfToggleButton,
      titleOfButton
    } = this.props.filters;

    return (
      <div className='map-f_header'>
        <div><input
          className='map-f_header--search'
          type="search"
          placeholder='Search'
        /></div>
        {
          this.filterButtons.map((item, index) =>
            <HeaderFilterButton
              titleOfButton={titleOfButton}
              stateOfToggleButton={stateOfToggleButton}
              toggleNav={toggleNav}
              key={index}
              title={item}
            />
          )
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchToProps = dispatch => ({
  actionFilters: bindActionCreators(actionFilters, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MapFiltersHeader);

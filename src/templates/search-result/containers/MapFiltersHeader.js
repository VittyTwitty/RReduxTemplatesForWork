import React, {Component} from 'react';
import HeaderFilterButton from "../components/HeaderFilterButton";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionFilters from '../actions/index';

class MapFiltersHeader extends Component {
  filterButtons;

  constructor() {
    super();

    this.filterButtons = ['Any Price', 'Any Beds', 'Any Bath', 'More Filters']
  }


  render() {
    const {toggleNav, getArrayOfFilters} = this.props.actionFilters;
    const {
      stateOfToggleButton,
      titleOfButton
    } = this.props.filters;

    return (
      <div>
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
                getArrayOfFilters={getArrayOfFilters}
                key={index}
                id={index}
                title={item}
              />
            )
          }
        </div>
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

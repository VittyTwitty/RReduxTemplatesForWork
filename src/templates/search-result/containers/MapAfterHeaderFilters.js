import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as filtersAction from '../actions/index';

class MapAfterHeaderFilters extends Component {
  onResetAllFilters(e) {
    e.preventDefault();
    this.props.filtersAction.deleteArrayOfFilters();
    console.log(this.props);
  }

  render() {
    const {arrayOfFilters} = this.props.filters;
    let afterHeader;
    if (arrayOfFilters.length) {
      afterHeader = <div className='map-f_header--dropdown'>
        <div>
          {
            arrayOfFilters.map((item, index) =>
              <div
                key={index}
              >{item}</div>
            )
          }
        </div>
        <button
          onClick={(e) => this.onResetAllFilters(e)}
        >Reset all filters
        </button>

      </div>
    } else {
      afterHeader = null
    }

    return (
      <div>{afterHeader}</div>

    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchToProps = dispatch => ({
  filtersAction: bindActionCreators(filtersAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MapAfterHeaderFilters);

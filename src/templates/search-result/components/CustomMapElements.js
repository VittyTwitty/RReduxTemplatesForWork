import React, {Component} from 'react';
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'
import AnyPrice from "./FiltersOfSearch/AnyPrice";
import AnyBeds from "./FiltersOfSearch/AnyBeds";
import AnyBath from "./FiltersOfSearch/AnyBath";
import MoreFilters from "./FiltersOfSearch/MoreFilters";

class CustomMapElements extends Component {
  constructor() {
    super();

  }
  onCustomDrawSearchArea() {
    console.log(this.props);
    this.props.onMapRandomClick();
  }

  onClickFilterButton(e, title) {
    this.props.toggleNav(title);

  }

  render() {

    return (
      <div className='g-maps-up'>
        <label
          id='draw-control-0'
          className='g-maps-up_as-move'
        >
          <input type="checkbox"/>
          <span>Search as I move</span>
        </label>
        <button
          id='draw-control'
          className='g-maps-up_draw-element'
          onClick={()=>this.onCustomDrawSearchArea()}
        >
          Draw search area
        </button>
      </div>
    )
  }
}

export default CustomMapElements;

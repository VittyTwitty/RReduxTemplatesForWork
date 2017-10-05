import React, {Component} from 'react';
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'
import AnyPrice from "./FiltersOfSearch/AnyPrice";
import AnyBeds from "./FiltersOfSearch/AnyBeds";
import AnyBath from "./FiltersOfSearch/AnyBath";
import MoreFilters from "./FiltersOfSearch/MoreFilters";

class HeaderFilterButton extends Component {
  constructor() {
    super();

  }

  onClickFilterButton(e, title) {
    this.props.toggleNav(title);
  }

  render() {
    const {title, id} = this.props;

    let blockFilter;
  console.log(id);
    switch (id) {
      case 0:
        blockFilter = <AnyPrice/>;
        break;
      case 1:
        blockFilter = <AnyBeds/>;
        break;
      case 2:
        blockFilter = <AnyBath/>;
        break;
      case 3:
        blockFilter = <MoreFilters getArrayOfFilters={this.props.getArrayOfFilters}/>;
        break;
      default:
        return null
    }

    return (
      <div className='map-f_header--block-wrapper'>
        <button
          onClick={(e) => this.onClickFilterButton(e, title, id)}
        >
          <span>{title}</span>
          <div>
            <ArrowRightFa/>
          </div>
        </button>
        {
          this.props.titleOfButton === title ?
            <div>{blockFilter}</div> :
            ''
        }
      </div>
    )
  }
}

export default HeaderFilterButton;

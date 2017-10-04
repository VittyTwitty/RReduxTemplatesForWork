import React, {Component} from 'react';
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'
import AnyPrice from "./FiltersOfSearch/AnyPrice";
import AnyBeds from "./FiltersOfSearch/AnyBeds";
import AnyBath from "./FiltersOfSearch/AnyBath";
import AnyFilters from "./FiltersOfSearch/AnyFilters";

class HeaderFilterButton extends Component {
  constructor() {
    super();

  }

  onClickFilterButton(e, title) {
    this.props.toggleNav(title);
    console.log(title)
  }

  render() {
    console.log(this.props);
    const {title} = this.props;

    let blockFilter;

    switch (title) {
      case 'Any Price':
        blockFilter = <AnyPrice/>;
        break;
      case 'Any Beds':
        blockFilter = <AnyBeds/>;
        break;
      case 'Any Bath':
        blockFilter = <AnyBath/>;
        break;
      case 'Any Filters':
        blockFilter = <AnyFilters/>;
        break;
      default:
        return null
    }

    return (
      <div className='map-f_header--block-wrapper'>
        <button
          onClick={(e) => this.onClickFilterButton(e, title)}
        >
          <span>{title}</span>
          <div>
            <ArrowRightFa/>
          </div>
        </button>
        {
          this.props.titleOfButton === title ?
            <div className='map-f_header--block-filter'>{blockFilter}</div> :
            ''
        }
      </div>
    )
  }
}

export default HeaderFilterButton;

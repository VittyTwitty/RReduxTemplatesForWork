import React, {Component} from 'react';
import ArrowRightFa from 'react-icons/lib/fa/arrow-right'

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
        blockFilter = <div>1</div>;
        break;
      case 'Any Beds':
        blockFilter = <div>2</div>;
        break;
      case 'Any Bath':
        blockFilter = <div>3</div>;
        break;
      case 'Any Filters':
        blockFilter = <div>4</div>;
        break;
      default:
        return null
    }

    return (
      <div>
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
            <div>{blockFilter}</div> :
            ''
        }
      </div>
    )
  }
}

export default HeaderFilterButton;

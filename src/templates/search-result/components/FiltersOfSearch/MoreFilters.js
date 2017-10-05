import React, {Component} from 'react';

class MoreFilter extends Component {
  checkedValue;

  constructor() {
    super();
    this.checkedValue = [];
  }

  onSubmitCheck(e) {
    e.preventDefault();

    let allInputs = document.getElementsByTagName('input');

    for (let i = 0; allInputs[i]; i++) {
      if (allInputs[i].checked) {
        this.checkedValue.push(allInputs[i].value);

      }
    }
    this.props.getArrayOfFilters(this.checkedValue);

    this.checkedValue = [];
  }


  render() {
    return (
      <div className='filters_more-filters'>
        <form className='filters_more-filters--top'>
          <div className='v-column'>
            <h3>
              Status
            </h3>
            <label>
              <input type="radio" name='status-this' value='Activate Only'/>
              <span>Activate Only</span>
            </label>
            <label>
              <input type="radio" name='status-this' value='Active & Contingent'/>
              <span>Active & Contingent</span>
            </label>
            <h3>
              Parking
            </h3>
            <select name="filters_more-filters--select" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <label>
              <span>Garage parking only</span>
              <input type="checkbox" value='Garage parking only'/>
            </label>
            <h3>
              Max HOA Fees
            </h3>
            <input type="text" placeholder='$'/>
          </div>

          <div className='v-column'>
            <h3>
              Property Type
            </h3>
            <label>
              <span>Condo</span>
              <input type="checkbox" value='Condo'/>
            </label>
            <label>
              <span>Townhome</span>
              <input type="checkbox" value='Townhome'/>
            </label>
            <label>
              <span>Single Family Home</span>
              <input type="checkbox" value='Single Family Home'/>
            </label>
            <label>
              <span>Multi-unit</span>
              <input type="checkbox" value='Multi-unit'/>
            </label>
            <label>
              <span>Land</span>
              <input type="checkbox" value='Land'/>
            </label>
            <label>
              <span>Other</span>
              <input type="checkbox" value='Other'/>
            </label>

          </div>

          <div className='v-column'>
            <h3>
              Special Settings
            </h3>
            <label>
              <span>Open House Only</span>
              <input type="checkbox" value='Open House Only'/>
            </label>
            <label>
              <span>New Listings Only</span>
              <input type="checkbox" value='New Listings Only'/>
            </label>
            <h3>
              Special Settings
            </h3>
            <label>
              <span>Cats Ok</span>
              <input type="checkbox" value='cats'/>
            </label>
            <label>
              <span>Dogs Ok</span>
              <input type="checkbox" value='dogs'/>
            </label>
          </div>
        </form>
        <div className='filters_more-filters--bottom'>
          <button
            type='submit'
            onClick={(e) => this.onSubmitCheck(e)}
          >Apply Filters
          </button>
          <button>Cancel</button>
        </div>

      </div>
    )
  }
}

export default MoreFilter;
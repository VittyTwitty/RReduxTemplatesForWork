import React, {Component} from 'react';
import MapFiltersHeader from "./MapFiltersHeader";
import MapFiltersBody from "./MapFiltersBody";
import MapAfterHeaderFilters from "./MapAfterHeaderFilters";

class App extends Component {
  render() {
    return (
      <div className='map-f'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MapFiltersHeader/>
            </div>
          </div>
        </div>
        <MapAfterHeaderFilters/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <MapFiltersBody/>
            </div>
            <div className="col-md-6">
              {/*<ListFiltersBody/>*/}
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default App;

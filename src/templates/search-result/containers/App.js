import React, {Component} from 'react';
import MapFiltersHeader from "./MapFiltersHeader";
import MapFiltersBody from "./MapFiltersBody";

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
                    <div className="row">
                        <div className="col-md-12">
                            <MapFiltersBody/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default App;

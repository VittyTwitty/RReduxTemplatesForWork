import React, {Component} from 'react';
import MapWithControlledZoom from "../components/GoogleMap";
import {connect} from "react-redux";

class MapFiltersBody extends Component {
  render() {
    const {dataForMaps} = this.props.filters;
    return (
      <div>
        <MapWithControlledZoom dataForMaps={dataForMaps}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapFiltersBody);

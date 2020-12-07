import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoaW1hc2FyIiwiYSI6ImNraWVqazNhZDE3NDEyc211bmVnNHp4Y2YifQ.UakMRuSG9yy-JtOMDEpULQ';

class Map extends React.Component {
  options = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.576034, 35.700108],
    zoom: 13
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new mapboxgl.Map(this.options);
  }

  render() {
    return(
      <div id="map" style={{ height: 700, width: 1500 }}>
        <div ref={el => this.mapContainer = el} />
      </div>
    )
  }
}

export default Map;
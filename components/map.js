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
    // コントロール関係表示
    this.map.addControl(new mapboxgl.NavigationControl, 'top-left');
    //フルスクリーンモード
    this.map.addControl(new mapboxgl.FullscreenControl);
    //スケール表示
    this.map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    }));
    //位置情報取得
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {enableHighAccuracy: true},
      trackUserLocation: true
    }));

    this.marker = new mapboxgl.Marker()
    .setLngLat(this.map.getCenter())
    .addTo(this.map);
  }

  render() {
    return(
      <div id="map" style={{height: 500}}>
        <div ref={el => this.mapContainer = el} />
      </div>
    )
  }
}

export default Map;
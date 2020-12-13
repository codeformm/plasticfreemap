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

    this.markerHeight = 50;
    this.markerRadius = 10;
    this.linearOffset = 25;
    this.popupOffsets = {
      'top': [0, 0],
      'top-left': [0,0],
      'top-right': [0,0],
      'bottom': [0, -(this.markerHeight)],
      'bottom-left': [this.linearOffset, (this.markerHeight - this.markerRadius + this.linearOffset) * -1],
      'bottom-right': [-(this.linearOffset), (this.markerHeight - this.markerRadius + this.linearOffset) * -1],
      'left': [this.markerRadius, (this.markerHeight - this.markerRadius) * -1],
      'right': [-(this.markerRadius), (this.markerHeight - this.markerRadius) * -1]
    };
    this.popup = new mapboxgl.Popup({offset: this.popupOffsets, className: 'my-class'})
    .setLngLat(this.map.getCenter())
    .setHTML("<p>三鷹・武蔵野の中心でプラスチックフリーを叫ぶ</p>")
    .setMaxWidth("300px")
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
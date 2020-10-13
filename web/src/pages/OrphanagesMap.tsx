import React from 'react';

import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphenages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um Orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong> Chapeco</strong>
          <span>Santa Catarina</span>
        </footer>

      </aside>

      <Map
        center={[-27.0969013,-52.6279616]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

    {/* Tilelayer: openstreet map */}
    {/* Mapbox */}


      <Link to="" className="create-orphenage">
        <FiPlus size ={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;
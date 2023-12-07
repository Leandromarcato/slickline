import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";

const position = [-23.1810989, -62.1769094];
function Mapa() {
  return (
    <div className="App">
      <h1>Mapa de Palmar Largo</h1>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
            attribution="&copy; Esri &mdash; Sources: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />

          <Marker position={position}>
            <Popup>
              <div>
                Palmar Largo
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

 export default Mapa;

// import React from 'react'
// import { FeatureGroup, MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
// import { polygon, booleanPointInPolygon, booleanWithin, intersect } from '@turf/turf';
// import { EditControl } from 'react-leaflet-draw';
// import { useEffect, useState } from 'react';


// const Map = () => {
//     /* const [parcelas, setParcelas] = useState([[
//         [
//             51.52604744889203,
//             -0.07733345031738283
//         ],
//         [
//             51.516754845636456,
//             -0.0716686248779297
//         ],
//         [
//             51.51184074882069,
//             -0.0757884979248047
//         ],
//         [
//             51.51867760878029,
//             -0.08385658264160158
//         ],
//         [
//             51.52604744889203,
//             -0.07733345031738283
//         ]
//     ],
//     [
//         [
//             51.528183411474586,
//             -0.08836269378662111
//         ],
//         [
//             51.52556684350165,
//             -0.09316921234130861
//         ],
//         [
//             51.52807661572529,
//             -0.09831905364990236
//         ],
//         [
//             51.53010569212588,
//             -0.0956583023071289
//         ],
//         [
//             51.528183411474586,
//             -0.08836269378662111
//         ]
//     ],
//     [
//         [
//             51.52871738646354,
//             -0.10269641876220705
//         ],
//         [
//             51.524765823244685,
//             -0.0954866409301758
//         ],
//         [
//             51.51547295844543,
//             -0.11145114898681642
//         ],
//         [
//             51.52220246372816,
//             -0.11299610137939453
//         ],
//         [
//             51.52871738646354,
//             -0.10269641876220705
//         ]
//     ]
// ]); */

//     const area = [
//         [-26.080442640853118, -58.27608436346055],
//         [-26.081136459684316, -58.27472180128098],
//         [-26.083116711645, -58.27602535486222],
//         [-26.082408450193658, -58.277398645877845],
//         [-26.080442640853118, -58.27608436346055]
//     ]
  
//       const [parcelas, setParcelas] = useState([
//         {
//             id: 1,
//             geoUbicacion: [
//                 [ -26.080490822849274, -58.27607899904252],
//                 [ -26.080760641661243, -58.27553719282151],
//                 [ -26.081420731489956, -58.27604144811631],
//                 [ -26.081146096028014, -58.276508152484894],
//                 [ -26.080490822849274, -58.27607899904252 ]
//             ]
//         },
//         {
//             id: 2,
//             geoUbicacion: [
//                 [ -26.08082809626704, -58.27551573514939],
//                 [ -26.08142554965021, -58.275907337665565],
//                 [ -26.082143453310778, -58.27551037073136],
//                 [ -26.081146096028014, -58.27482372522355 ],
//                 [ -26.08082809626704, -58.27551573514939]
//             ],
//         },
//         {
//             id: 3,
//             geoUbicacion: [
//                 [ -26.08145445860753, -58.2761111855507],
//                 [ -26.081574912519518, -58.275896608829505],
//                 [ -26.08210009012738, -58.27623456716538],
//                 [ -26.081970000480755, -58.276513516902924],
//                 [ -26.08145445860753, -58.2761111855507]
//             ]
//         }
//     ]);

      
  
//     const calculateArea = () => {
//       const options = { units: 'square-meters' };
//       const polygonArea = area(turfPolygon, options);
//       console.log('Área en metros cuadrados:', polygonArea);
  
  
//     };

//     const convertToGeoJson = (coords)=> {
//         return {
//             type: 'Feature',
//             properties: {},
//             geometry: {
//                 type: 'Polygon',
//                 coordinates: [coords]
//             }
//         }
//     };

//     const validateOtherparcelas = (newPolygon)=>{
//         for (let i = 0; i < parcelas.length; i++) {
//             const intersected = intersect(convertToGeoJson(newPolygon), convertToGeoJson(parcelas[i].geoUbicacion));
//             if(intersected !== null){
//                 return false;
//             };
//         } return true;
//     }
  
//     const handleDrawCreated = (e) => {
//       const { layer } = e;
//       const newPolygon = layer.getLatLngs()[0].map((latLng) => [latLng.lat, latLng.lng]);
   
//       newPolygon.push(newPolygon[0]);
      
//       if(booleanWithin(convertToGeoJson(newPolygon), convertToGeoJson(area))){

//         if(validateOtherparcelas(newPolygon)){
//             setParcelas((prevparcelas) => [...prevparcelas, {id: 5, geoUbicacion: newPolygon}]);
//         } else {
//             e.layer.remove();
//             return alert('El area que intenta delimitar colisiona con una parcela ya creada')
//         }
//       } else {
//         e.layer.remove();
//         return alert('Debe estar dentro del area');
//       } 
  
//     };


//     const handleEdit = (e) => {
//         const { layers } = e;
//         layers.eachLayer((layer) => {
//           const editedPolygon = layer.getLatLngs()[0].map((latLng) => [latLng.lat, latLng.lng]);

//           if(validateOtherparcelas(editedPolygon)){
//             return alert('No intersecta');
//           } else {
//             alert('el area intersecta con otra parcela')
//           }
//           /* const updatedparcelas = parcelas.map((polygon, index) => (index === layer._leaflet_id ? editedPolygon : polygon));
//           console.log(editedPolygon);
//           setParcelas(updatedparcelas); */
//         });
//       };

//       const handleDelete = (e) => {
//         const { layers } = e;
//         layers.eachLayer((layer) => {
//             console.log('elimnado');
//           const updatedparcelas = parcelas.filter((polygon, index) => index !== layer._leaflet_id);
//           setParcelas(updatedparcelas);
//         });
//       };

  
//     return (
//       <>
  
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <MapContainer maxBounds={area} center={[-26.080442640853118, -58.27608436346055]} zoom={17}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <Polygon positions={area} color='blue' />
  
//             <FeatureGroup>
//               <EditControl
//                 position="topleft"
                
//                 onCreated={handleDrawCreated}
//                 onEdited={handleEdit}
//                 onDeleted={handleDelete}
//                 draw={{
//                     marker: false,
//                     circle: false,
//                     circlemarker: false,
//                     polyline: false,
//                     rectangle: false,
//                     polygon: true,
//                 }}
//               />
//             {parcelas.map((i, k)=>(
//                 <Polygon key={k} color='green' positions={i.geoUbicacion}>
//                     <Popup>Hola {i.id}</Popup>
//                 </Polygon>
//             ))}
//             </FeatureGroup>

//           </MapContainer>
//         </div>
//       </>
//     )
// }

// export default Map
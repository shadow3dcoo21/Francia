import React, { useState, useEffect } from 'react';
import MapView, { Marker, Region ,Callout,Circle as MapCircle } from 'react-native-maps';
import { View, Text, StyleSheet, Modal, TouchableOpacity ,SafeAreaView,TextInput} from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { styles } from './styles';
import Slider from '@react-native-community/slider';
import { useWindowDimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ModalExampleProps {
  visible: boolean;
  onClose: () => void;
}

const ModalExample: React.FC<ModalExampleProps> = ({ visible, onClose }) => {
    



  const [showMarkers, setShowMarkers] = useState(true);


  const renderCircle = () => (
    <View style={{overflow:'hidden'}}>
        <MapCircle
            center={{ latitude: region.latitude, longitude: region.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.43088, longitude: region.longitude }} style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white'}}>+8</Text>
                      </Marker>
                
                
    </View>
    
    
  );

  const renderCircle_Museos = () => (
    <View style={{overflow:'hidden'}}>
        <MapCircle
            center={{ latitude: region_museos.latitude, longitude: region_museos.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.410935, longitude: region_museos.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+12</Text>
                      </Marker>
                
                
    </View>
    
    
  );


  const renderCircle_bares2 = () => (
    <View style={{overflow:'hidden'}}>
        <MapCircle
            center={{ latitude: region_bares.latitude, longitude: region_bares.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.44088, longitude: region_bares.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+4</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );

  const renderCircle_bares3 = () => (
    <View style={{overflow:'hidden'}}>
        <MapCircle
            center={{ latitude: region_Colegios.latitude, longitude: region_bares.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude:-16.421815, longitude: region_bares.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+8</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );

  const renderCircle_bares4 = () => (
    <View style={{overflow:'hidden'}}>
        <MapCircle
            center={{ latitude: region_Colegios.latitude, longitude: region_Colegios.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude:-16.421815, longitude: region_Colegios.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+6</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );

  const renderCircle_bares5 = () => (
    <View>
        <MapCircle
            center={{ latitude: region_museos2.latitude, longitude: region_museos2.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.412135, longitude: region_museos2.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+7</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );

  const renderCircle_bares6 = () => (
    <View>
        <MapCircle
            center={{ latitude: region_Colegios.latitude, longitude: region_museos3.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.420115, longitude: region_museos3.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+5</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );

  const renderCircle_bares = () => (
    <View>
        <MapCircle
            center={{ latitude: region_bares.latitude, longitude: region_museos3.longitude }}
            radius={
              longitudeDeltaValue < 0.028 ? 500 :
               
              longitudeDeltaValue > 0.060 ? 1200 :
              
              500
            
            }
            fillColor="#0B5345"
            strokeColor="#F7F9F9"
            />
                
                
                      <Marker coordinate={{ latitude: -16.44088, longitude: region_museos3.longitude }}style={{overflow:'hidden'}}>
                      <Text style={{fontSize:calculateTextSize(),top:15,position:'absolute',backgroundColor:'transparent',color:'white',zIndex:1}}>+10</Text>
                      </Marker>
                
                
    </View>

    
    
    
  );
  
    //mapas
    const [ubicacion] = useState({
      latitude: -16.429135,
        longitude: -71.519663,
      latitudeDelta: 0.004,
      longitudeDelta: 0.090,
    });

    const [region, setRegion] = useState({
      latitude: -16.428,
      longitude: -71.5165,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });

      const [region_bares] = useState({
        latitude: -16.439135,
        longitude: -71.539663,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });

      const [region_museos] = useState({
        latitude: -16.409135,
        longitude: -71.529663,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });

      const [region_Colegios] = useState({
        latitude: -16.419135,
        longitude: -71.509663,
        latitudeDelta: 0.004,
        
        longitudeDelta: 0.001,
      });

      const [region_museos2] = useState({
        latitude: -16.409135,
        longitude: -71.509663,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });
      const [region_museos3] = useState({
        latitude: -16.409135,
        longitude: -71.529663,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });

      
      //fin mapas

      const restaurantesMarkers2 = () => {
        
        const restaurantes = [
          { id: 1, nombre: 'Restaurante 1', latitude: -16.439735, longitude: -71.539661 },
          { id: 2, nombre: 'Restaurante 2', latitude: -16.439635, longitude: -71.539172 },
          { id: 3, nombre: 'Restaurante 3', latitude: -16.439525, longitude: -71.539283 },
          { id: 4, nombre: 'Restaurante 4', latitude: -16.439185, longitude: -71.539364 },
          { id: 5, nombre: 'Restaurante 5', latitude: -16.439875, longitude: -71.539465 },
          { id: 6, nombre: 'Restaurante 6', latitude: -16.438975, longitude: -71.539566 },
          { id: 7, nombre: 'Restaurante 7', latitude: -16.439115, longitude: -71.539667 },
          { id: 8, nombre: 'Restaurante 8', latitude: -16.439124, longitude: -71.539768 },
          
        ];
    


        // Guarda el valor de longitudeDelta en una variable
  

        return restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
            pinColor="#0B5345"
          >
            <Callout>
              <View>
                {/* Puedes personalizar el contenido del Callout según tus necesidades */}
                <Text>{restaurante.nombre}</Text>
                
              </View>
            </Callout>
          </Marker>
          
        ));
            
    
      };

     
      const restaurantesMarkers = () => {
        const restaurantes = [
          { id: 1, nombre: 'Restaurante 1', latitude: -16.428, longitude: -71.5202 },
          { id: 2, nombre: 'Restaurante 2', latitude: -16.429, longitude: -71.5202 },
          { id: 3, nombre: 'Restaurante 3', latitude: -16.4295, longitude: -71.5202 },
          { id: 4, nombre: 'Restaurante 4', latitude: -16.4317, longitude: -71.5210 },
          { id: 5, nombre: 'Restaurante 5', latitude: -16.4283, longitude: -71.5191 },
          { id: 6, nombre: 'Restaurante 6', latitude: -16.4292, longitude: -71.5170 },
          { id: 7, nombre: 'Restaurante 7', latitude: -16.4285, longitude: -71.5219 },
          { id: 8, nombre: 'Restaurante 8', latitude: -16.4298, longitude: -71.5183 },
          
        ];
    


        // Guarda el valor de longitudeDelta en una variable
  

        return restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
            pinColor="#0d3029"
          >
            <Callout>
              <View>
                {/* Puedes personalizar el contenido del Callout según tus necesidades */}
                <Text>{restaurante.nombre}</Text>
                
              </View>
            </Callout>
          </Marker>
          
        ));
            
    
      };
      const ubicac = () => {
        const restaurantes = [
          { id: 1, nombre: 'Restaurante 1', latitude: -16.428, longitude: -71.5165 },
          
          
        ];
    
        

        // Guarda el valor de longitudeDelta en una variable
  

        return restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
            pinColor="blue"
          >
            <Callout>
              <View>
                {/* Puedes personalizar el contenido del Callout según tus necesidades */}
                <Text>{restaurante.nombre}</Text>
                
              </View>
            </Callout>
          </Marker>
          
        ));
            
    
      };

      const longitudeDeltaValue = region.longitudeDelta;

      const calculateTextSize = () => {
        const scale = region.latitudeDelta * region.longitudeDelta;
        // Ajusta el tamaño del texto en función de la escala y tus preferencias
        return Math.round(30 + scale);
      };
      



      const [sliderState,setSliderState]=React.useState<number>(1);
      const [mapKey, setMapKey] = useState(1); // Estado para cambiar la clave
    
      const handleZoomIn = () => {
        // Ajusta la cantidad de acercamiento según el valor de sliderState
        const newLongitudeDelta = sliderState /200; // Dividido por 1000 para ajustar la escala
        setRegion((prevRegion) => ({
          ...prevRegion,
          longitudeDelta: newLongitudeDelta,
        }));
    
        // Cambiar la clave para forzar una remontada del componente MapView
        setMapKey((prevKey) => prevKey + 1);
      };
      
      const inverseScaleFactor = 45 - sliderState+20;

  return (
    
        <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} style={styles.modal_mapp}
    >
      <View style={styles.modal}>
        <View style={styles.contenedor__}>
            <View style={styles.conte1}>

            </View>
            <View style={styles.conte2}>
                <Text style={styles.textoModal}>Choose a location to see what´s available</Text> 
            </View>
            <View style={styles.conte3}>
            <TouchableOpacity onPress={onClose}>
                
                <Feather name="x" size={23} color="black" />
            </TouchableOpacity> 
            </View>

            
              
        </View>


        <View style={{ flex: 1 ,backgroundColor:'white',marginTop:0}}>


          <View style={{ position: 'relative', height: 420,overflow:'hidden' }}>
            {/* Vista del Mapa */}
            <View style={{ flex: 1 }}>
            <MapView
            
              key={mapKey}
              style={{ width: '100%', height: 420 }}
                      provider="google"
                      initialRegion={region}
            >
              
              
              {showMarkers ? ubicac() : null}
              
              
              {(() => {
                if (longitudeDeltaValue > 0.015) {
                  return (
                    <React.Fragment>
                      {showMarkers ? renderCircle() : null}
                      {showMarkers ? renderCircle_bares() : null}
                      {showMarkers ? renderCircle_bares2() : null}
                      {showMarkers ? renderCircle_bares3() : null}
                      {showMarkers ? renderCircle_bares4() : null}
                      {showMarkers ? renderCircle_bares5() : null}
                      {showMarkers ? renderCircle_bares6() : null}
                      {showMarkers ? renderCircle_Museos() : null}
                      
                    </React.Fragment>
                  );
                } else {
                  return(
                    <React.Fragment>
                      {showMarkers ? restaurantesMarkers() : null}
                      {showMarkers ? restaurantesMarkers2() : null}
                    </React.Fragment>
                  );
                  
                }
              })()}
              
              
            </MapView>
    </View>

            {/* Vista del Círculo con SVG */}
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',marginTop:-20 }}>
              <Svg height="420" width="100%">
                <SvgCircle cx="50%" cy="50%" r={9 * inverseScaleFactor} fill="rgba(0,0,0,0.0)" stroke="rgba(0,0,0,0.5)" strokeWidth={500} />
              </Svg>
            </View>
          </View>


            

            <View style={styles.distancia__}>

                    <Text style={styles.text_distancia}>Select a distance</Text>
                          <View style={styles.kilom_slider_general}>
                                <View>
                                    <Slider
                                style={{width: 290 ,height:76}}
                                value={sliderState}
                                onValueChange={(value) => setSliderState(Math.round(value))}
                                minimumValue={1}
                                maximumValue={30}
                                minimumTrackTintColor="green"
                                maximumTrackTintColor="black"
                                thumbTintColor="gray"  
                                
                                // Cambiar grosor y estilo de la línea
                                />
                                </View>

                                <View style={styles.kilom_slider}>
                                    <Text style={{fontWeight:'bold',fontSize:14}}>{sliderState} KM</Text>
                                </View>

                          

                          </View>
                   <View style={styles.buscador_map}>
                    
                        <View style={{ flexDirection: 'row', 
                        alignItems: 'center', 
                        width:'80%',
                        backgroundColor:'#c8c8c8cb',
                        borderRadius:25,
                        
                        }}>
                                <EvilIcons name="search" size={22} color="gray" style={{ padding: 10,position:'absolute' }} />
                                <TextInput
                                
                                    style={{ height: 45, padding: 10, flex: 1,textAlign:'center' }}
                                    placeholder="Search for a city"
                                />
                                </View>          
                            </View> 

                    <View style={styles.texto_footer_locat}>
                            <View><Text><FontAwesome name="location-arrow" size={22} color="#035353" style={{ padding: 10,position:'absolute' }} /></Text></View>
                            <View><Text style={{textAlign:'center',color:'#035353',fontSize:14,fontWeight:'bold',}}>   Use my current location</Text></View>
                    </View>   

                    <View style={styles.boton_footer_navi}>
                        <View style={styles.boton_presion}>
                            <TouchableOpacity onPress={handleZoomIn}>
                                <Text style={{textAlign:'center',color:'white'}}>Apply</Text>
                            </TouchableOpacity>

                        </View>
                        
                    </View>              
            </View>




            

            

    </View>



        

            

        
      </View>
      
    </Modal>
    
    
  );
};


export default ModalExample;
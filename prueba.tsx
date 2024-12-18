import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout  } from 'react-native-maps';
import { View, Text, StyleSheet, Modal, TouchableOpacity ,SafeAreaView,TextInput} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
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
    
    //mapas
    const [region, setRegion] = useState({
        latitude: -16.429135,
        longitude: -71.519663,
        latitudeDelta: 0.004,
        longitudeDelta: 0.001,
      });
      const [sliderState,setSliderState]=React.useState<number>(8);
      const [mapKey, setMapKey] = useState(1); // Estado para cambiar la clave
    
      const handleZoomIn = () => {
        // Ajusta la cantidad de acercamiento según el valor de sliderState
        const newLongitudeDelta = sliderState / 300; // Dividido por 1000 para ajustar la escala
        setRegion((prevRegion) => ({
          ...prevRegion,
          longitudeDelta: newLongitudeDelta,
        }));
    
        // Cambiar la clave para forzar una remontada del componente MapView
        setMapKey((prevKey) => prevKey + 1);
      };
      
      const inverseScaleFactor = 45 - sliderState+1;
      //fin mapas



      const restaurantes = [
        { id: 1, nombre: 'Restaurante 1', latitude: -16.428, longitude: -71.520 },
        { id: 2, nombre: 'Restaurante 2', latitude: -16.429, longitude: -71.518 },
        { id: 3, nombre: 'Restaurante 3', latitude: -16.4295, longitude: -71.519 },
        { id: 4, nombre: 'Restaurante 4', latitude: -16.4288, longitude: -71.5202 },
        { id: 5, nombre: 'Restaurante 5', latitude: -16.4283, longitude: -71.5197 },
        { id: 6, nombre: 'Restaurante 6', latitude: -16.4292, longitude: -71.5185 },
        { id: 7, nombre: 'Restaurante 7', latitude: -16.4285, longitude: -71.5208 },
        { id: 8, nombre: 'Restaurante 8', latitude: -16.4298, longitude: -71.5183 },
        { id: 9, nombre: 'Restaurante 9', latitude: -16.4291, longitude: -71.5194 },
        { id: 10, nombre: 'Restaurante 10', latitude: -16.4286, longitude: -71.5206 },
        { id: 11, nombre: 'Restaurante 11', latitude: -16.4293, longitude: -71.5189 },
        { id: 12, nombre: 'Restaurante 12', latitude: -16.4289, longitude: -71.5192 },
        { id: 13, nombre: 'Restaurante 13', latitude: -16.4296, longitude: -71.5201 },
        { id: 14, nombre: 'Restaurante 14', latitude: -16.4284, longitude: -71.5195 },
        { id: 15, nombre: 'Restaurante 15', latitude: -16.4294, longitude: -71.5204 },
        { id: 16, nombre: 'Restaurante 16', latitude: -16.4295, longitude: -71.5205 },
      ];




      

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
        {restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
          >
            <Callout>
              <View>
                {/* Puedes personalizar el contenido del Callout según tus necesidades */}
                <Text>{restaurante.nombre}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>

            {/* Vista del Círculo con SVG 
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',marginTop:-20 }}>
              <Svg height="420" width="100%">
                <Circle cx="50%" cy="50%" r={9 * inverseScaleFactor} fill="rgba(0,0,0,0.0)" stroke="rgba(0,0,0,0.5)" strokeWidth={400} />
              </Svg>
            </View>*/}
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
                                maximumValue={40}
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
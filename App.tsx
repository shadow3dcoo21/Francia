import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import ModalExample from './modal';
import { styles } from './styles';
import { Image } from 'expo-image';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign'
const MyMap = () => {



  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    

    <SafeAreaView style={styles.Cuerpo_Principal}>
      {/* Top Bar*/}

      <View style={{width:'100%',height:35,backgroundColor:'white'}}>

      </View>

      <View style={styles.topBar}>
        
        
        <View style={styles.topabar_entorno1}>
        <View >
            <TouchableOpacity onPress={openModal}>
            <FontAwesome5 style={styles.icono_ubi} size={20} name='map-marker-alt'/>
            </TouchableOpacity>
            <ModalExample visible={modalVisible} onClose={closeModal} />
          </View>
        
        </View>

        <View style={styles.topabar_entorno2}>

          <View style={styles.kilom}>
          <TouchableOpacity>
          <Text style={styles.texto1}>Nice 10KM</Text>
          </TouchableOpacity>
               
          </View>
          
          
        </View>

        <View style={styles.topabar_entorno3}>
        <TouchableOpacity>
          <Text style={styles.texto1}>Cette semaine</Text>
          </TouchableOpacity>
          
        </View >

        <View style={styles.topabar_entorno1}>
        <TouchableOpacity>
        <FontAwesome5 style={styles.icono_ubi} size={20} name='calendar-alt'/>
        </TouchableOpacity>
          
        </View >

      </View>
      
      {/* Contenedor de botones principales top bar*/}

      <View style={styles.botones_categorias}>
     
          <View style={styles.boton1_cat}>
              <View style={styles.dentro_boton}>
                  <Text style={styles.texto_boton}>TOUTES                   LES CATEGORIAS</Text>
              </View>
 
          </View>

          <View style={styles.boton2_cat}>

              <View style={styles.dentro_boton2}>
                  <Text style={styles.texto_boton2}>VOS CATEGORIES                   FAVORITES</Text>
              </View>


          </View>

      </View>



      {/* Scroll horizontal top bar*/}

      <View style={styles.scroll_horizontal}>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
         
        >

        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >EVENTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >CULTURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >SPORTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >NATURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >GAST</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >EVENTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >CULTURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >SPORTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >NATURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >GAST</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >EVENTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >CULTURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >SPORTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >NATURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >GAST</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >EVENTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >CULTURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >SPORTS</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >NATURE</Text>
        </View>
        <View style={styles.text_scr}>
            <Text style={styles.texto_horizontal_scroll} >GAST</Text>
        </View>





        </ScrollView>



        




      </View>


      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
       >

        <View style={styles.padre_contenido}>


        
       
        









          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://nice.love-spots.com/wp-content/uploads/sites/2/2022/05/Expositions-ete-Nice-City-guide-Love-Spots-08-1280x768.jpeg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>EXPOSITION VILLE SONGE</Text>
                          <Text style={styles.color_texto}>Musee d´Art Moderne</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.6  </Text></View>
                              <View>
                                <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                              </View>

                              <View><Text style={styles.color_texto}>  |  1.4 km </Text></View>
                              <View><Text style={styles.color_texto}> |  €10 </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>





          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://d2dzi65yjecjnt.cloudfront.net/42861-1.jpg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>LE BAROQUE DE A Á Z</Text>
                          <Text style={styles.color_texto}>Palais Lascaris</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.5  </Text></View>
                              <View>
                                <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                              </View>

                              <View><Text style={styles.color_texto}>  |  2.8 km </Text></View>
                              <View><Text style={styles.color_texto}> |  €10 </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>

          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://upload.wikimedia.org/wikipedia/commons/5/57/Chateau_de_Cr%C3%A9mat.jpg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>JOURNÉES PORTES OUVERTES</Text>
                          <Text style={styles.color_texto}>Cháteau de Crémat</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.5  </Text></View>
                              <View>
                                
                              <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                                </View>

                              <View><Text style={styles.color_texto}>  |  9.2 km </Text></View>
                              <View><Text style={styles.color_texto}> |  Gratuit </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>

          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://i.discogs.com/E7gc_qm-7xZ7u44wPc1VsFRSAUibKZWJCxcGA6ctdZY/rs:fit/g:sm/q:90/h:564/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0NTMx/MDEtMTM5Mzc4NjAx/Mi05NzA3LmpwZWc.jpeg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>CHAGALL ET MOI ! Exposition</Text>
                          <Text style={styles.color_texto}>Musee Marc Chagall</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.6  </Text></View>
                              <View>
                              <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                              </View>

                              <View><Text style={styles.color_texto}>  |  0.8 km </Text></View>
                              <View><Text style={styles.color_texto}> |  €10 </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>

          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://marketplace.canva.com/EAEe1xIMJAU/1/0/1600w/canva-rojo-c%C3%ADrculo-ilustraci%C3%B3n-fondo-floral-portada-de-%C3%A1lbum-GhgSil89xFU.jpg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>EXPOSITION VILLE SONGE</Text>
                          <Text style={styles.color_texto}>Musee d Art Moderne</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.5  </Text></View>
                              <View>
                              <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                              </View>

                              <View><Text style={styles.color_texto}>  |  2.8 km </Text></View>
                              <View><Text style={styles.color_texto}> |  $10 </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>

          <View style={styles.content}>
               <View style={styles.contenedor_general_ima}>
                
                <View style={styles.contendor_cuadro}>

                  <View style={styles.imagen_}>
                      <Image
                      source="https://i.pinimg.com/736x/0a/70/c6/0a70c6a7d0cc33118d109f7ca7f7d2d9.jpg"
                      style={styles.imagenEstilo}
                      resizeMode="cover"
                    />

                  </View>



                  <View style={styles.contenido_imagen}>
                      <View style={styles.contenedor_l}>
                          <Text style={styles.titulo_contenedor_imagen}>EXPOSITION VILLE SONGE</Text>
                          <Text style={styles.color_texto}>Musee d Art Moderne</Text>
                          <View style={styles.contenedor_informacion}>
                              <View><Text style={styles.color_texto}>4.5  </Text></View>
                              <View>
                              <AntDesign style={styles.imagenEstilo_contenedor} size={14} name='star'/>
                                
                              </View>

                              <View><Text style={styles.color_texto}>  |  2.8 km </Text></View>
                              <View><Text style={styles.color_texto}> |  $10 </Text></View>
                          </View>
                      
                      </View>

                  </View>
                
                </View>
  
              </View>
          </View>
          
          
        </View>  


        
        


      </ScrollView>



      <View style={styles.flotante_footer}>
          <View >
            {/*<TouchableOpacity onPress={openModal}>*/ } 
            <TouchableOpacity>
            <MaterialCommunityIcons style={styles.map_busq_ico} name='map-search-outline'/>
            </TouchableOpacity>
            {/* <ModalExample visible={modalVisible} onClose={closeModal} /> */}
            
          </View>
        

      </View>




      <View style={styles.bottomBar}>

        <TouchableOpacity style={styles.navegacion_footer}>
          <View style={styles.contenedor_icono_navi}>
            <AntDesign style={styles.icono_navigation} name='home'/>
            <Text style={styles.texto_nnavigation}>Accueil</Text>
          </View>
          

        </TouchableOpacity>

        <TouchableOpacity style={styles.navegacion_footer}>
        <View style={styles.contenedor_icono_navi}>
        <AntDesign style={styles.icono_navigation} size={28} name='search1'/>
        <Text style={styles.texto_nnavigation}>Chercher</Text>
        </View>
        

        </TouchableOpacity>

        <TouchableOpacity style={styles.navegacion_footer}>
        <AntDesign style={styles.icono_navigation} size={50} name='pluscircleo'/>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.navegacion_footer}>
        <View style={styles.contenedor_icono_navi}>
        <AntDesign style={styles.icono_navigation} size={28} name='hearto'/>
        <Text style={styles.texto_nnavigation}>Favoris</Text>
        </View>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.navegacion_footer}>
        <View style={styles.contenedor_icono_navi}>
        <AntDesign style={styles.icono_navigation} size={28} name='calendar'/>
        <Text style={styles.texto_nnavigation}>Agenda</Text>
        </View>
        
        </TouchableOpacity>
      </View>
    </SafeAreaView>























            

    
  );
};

export default MyMap;











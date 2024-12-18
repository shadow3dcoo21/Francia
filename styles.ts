import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },

      Cuerpo_Principal:{
        width:'100%',
        height:'100%',
        backgroundColor:'orange'
      },
      contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'orange'
      },
      boton: {
        fontSize: 18,
        color: 'blue',
      },

      
      //segundo

      conte1:{
        width:'12%',
        height:'100%',
        backgroundColor:'white'
    },
    conte2:{
        width:'76%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    conte3:{
        width:'12%',
        height:'55%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
        
    },
    contenedor__:{
        backgroundColor:'white',
        height:70,
        flexDirection:'row'
    }
    ,
   
    
    modal_mapp:{
        backgroundColor: 'red',
           
    },
  modal: {
    
    flex:1,
    
    
    backgroundColor: 'red',
  },
  textoModal: {
    fontSize: 16.5,
    color: 'black',
    fontWeight:'bold',
    textAlign:'center',
    
    backgroundColor:'white',
    width:'70%'
  },
  botonCerrar: {
    fontSize: 18,
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    
  },

  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'gray', // Puedes cambiar el color según tus preferencias
    padding: 16,
    height:300
  }

,

//distancia mapa
distancia__:{
    backgroundColor:'white',
    width:'100%',
    
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    overflow:'hidden',
    marginTop:-32,
    justifyContent:'center',
    alignItems:'center'
    
},
text_distancia:{
    backgroundColor:'white',
    width:'100%',
    textAlign:'center',
    padding:13,
    fontSize: 16,
    color: 'black',
    fontWeight:'bold',
}
,
kilom_slider_general:{
    flexDirection:'row',
    backgroundColor:'white',
    width:'90%'
},

kilom_slider:{
    backgroundColor:'white',
    justifyContent:'center'
},
buscador_map:{
    backgroundColor:'white',
    width:'100%',
    alignItems:'center',
    padding:5
},
texto_footer_locat:{
    flexDirection:'row',
    backgroundColor:'white',
    width:'60%',
    padding:10,
    textAlign:'center'
},
boton_footer_navi:{
    backgroundColor:'white',
    height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
    
}
,
boton_presion:{
    width:'85%',
    backgroundColor:'#035353',
    padding:13,
    borderRadius:25
},

//app.tsx



topBar: {
  backgroundColor: 'white', 
  flexDirection:'row',
  height:40
  
},


flotante_footer:{
  width:40,
  height:40,
  backgroundColor:'transparent',
  position:'absolute',
  bottom: 90,
  right: 10
  
},

map_busq_ico:{
    fontSize:35,
    color:'#4e5354',
},

kilom:{
  backgroundColor:'transparent',
  width:'40%',
  
}
,

texto1:{
  textAlign:'center',
  fontWeight:'500',
  color:'#4e5354',
  fontSize:13

},

icono_ubi:{
    color:'#4e5354',
    fontWeight:'bold'
},



// navegacion
bottomBar: {
backgroundColor: 'white', // Puedes personalizar el color de la barra inferior
height: 60,
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',

},
navegacion_footer:{
backgroundColor:'transparent',

},

icono_navigation:{
color:'#4e5354',
fontWeight:'100',
fontSize:28,


},

contenedor_icono_navi:{
alignItems:'center'
},

texto_nnavigation:{
color:'#4e5354',
fontSize:12
},


























//contenido de la pagina








topabar_entorno1:{
  width:'15%',
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center'
},
topabar_entorno2:{
  width:'35%',
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  
},
topabar_entorno3:{
  width:'35%',
  backgroundColor:'white',
  justifyContent:'center',
  textAlign:'center',
  alignItems:'center'
},
topabar_entorno4:{
  width:'15%',
  backgroundColor:'gray'
},






//

padre_contenido:{
  width:'100%',
  height:'auto'
},

//{/* Contenedor de botones principales top bar*/}
botones_categorias:{
width:'100%',
height:45,
backgroundColor:'white',
flexDirection:'row'
},
boton1_cat:{
width:'50%',
height:45,
backgroundColor:'transparent',
justifyContent:'center',
alignItems:'center'
},
boton2_cat:{
width:'50%',
height:45,
backgroundColor:'transparent',
justifyContent:'center',
alignItems:'center'
},

dentro_boton:{
width:'80%',
height:'auto',
backgroundColor:'#ebdfad',
alignItems:'center',
borderRadius:17,
overflow:'hidden',

},
texto_boton:{
textAlign:'center',
backgroundColor:'transparent',
width:'85%',
lineHeight: 15,
padding:3,
color:'#e39059',
fontWeight:'bold',
fontSize:13
},

dentro_boton2:{
width:'85%',
height:'auto',
backgroundColor:'transparent',
alignItems:'center',
borderRadius:17,
overflow:'hidden',


},
texto_boton2:{
textAlign:'center',
backgroundColor:'transparent',
width:'80%',
lineHeight: 15,
padding:3,
color:'#707B7C',
fontWeight:'bold',
fontSize:12
},

// SCROLL

scroll_horizontal:{
width:'100%',
height:32,
backgroundColor:'white',
flexDirection:'row'
},
text_scr:{
justifyContent:'center',
paddingEnd:13,
paddingStart:10

},
texto_horizontal_scroll:{
fontWeight:'bold',
color:'#707B7C',
fontSize:13
},


//contenido real

content: {
flex: 1,
width:'100%',
height:125,
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',
shadowColor: 'orange',
shadowOffset: { width: 0, height: 10 },
shadowOpacity: 0.2,
elevation: 20,

},


contenedor_general_ima:{
backgroundColor:'white',
width:'90%',
overflow:'hidden',   
},



contendor_cuadro:{
width:'100%',
height:'95%',
backgroundColor:'white',

borderColor:'transparent',
borderRadius:18,
overflow:'hidden',
...Platform.select({
    ios: {
      shadowColor: 'orange',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 5,
      shadowRadius: 50,
    },
    android: {
      elevation: 3,
      
      shadowColor: 'black',
      

    },

  }),
flexDirection:'row'
},

imagenEstilo:{
width:'100%',
height:'100%',
borderRadius:10
},

imagen_:{
width:'40%',
borderRadius:14
},
contenido_imagen:{
width:'58%',
height:'100%',
backgroundColor:'transparent',
justifyContent:'center',
alignItems:'center'
},
contenedor_l:{
backgroundColor:'transparent',
width:'80%'
},
imagenEstilo_contenedor:{
width:14,
height:14,
color:'#fadb10'
},
contenedor_informacion:{
backgroundColor:'transparent',
flexDirection:'row'
},

titulo_contenedor_imagen:{
fontSize:17,
color:'black'
},

color_texto:{
color:'black',
fontSize:12
},


});
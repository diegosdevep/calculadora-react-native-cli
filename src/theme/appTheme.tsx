import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'black',
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent:'flex-end'
    },
    resultado:{
        color: 'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10,
    },
    resultadoPequeno:{
        color: 'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',
    },
    fila:{
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    boton:{
        width: 80,
        height: 80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    },
    botonText:{
        textAlign:'center',
        padding: 10,
        fontSize:30,
        color: 'white',
        fontWeight:'500'
    },
});
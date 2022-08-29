import React from 'react'
import { Text, View } from 'react-native';
import BotonCalc from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        armarNumero,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora()
    

  return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior !== ('0') && (
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            ))
        }
        <Text 
            style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {numero}
        </Text>
    
        <View style={styles.fila}>
            <BotonCalc accion={limpiar} color='#9D9D9D' texto='C'/>
            <BotonCalc accion={positivoNegativo} color='#9D9D9D' texto='+/-'/>
            <BotonCalc accion={btnDel} color='#9D9D9D' texto='del'/>
            <BotonCalc accion={btnDividir} color='#FF9427' texto='/'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc accion={armarNumero} texto='7'/>
            <BotonCalc accion={armarNumero} texto='8'/>
            <BotonCalc accion={armarNumero} texto='9'/>
            <BotonCalc accion={btnMultiplicar} color='#FF9427' texto='X'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc accion={armarNumero} texto='4'/>
            <BotonCalc accion={armarNumero} texto='5'/>
            <BotonCalc accion={armarNumero} texto='6'/>
            <BotonCalc accion={btnRestar} color='#FF9427' texto='-'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc accion={armarNumero} texto='1'/>
            <BotonCalc accion={armarNumero} texto='2'/>
            <BotonCalc accion={armarNumero} texto='3'/>
            <BotonCalc accion={btnSumar} color='#FF9427' texto='+'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc accion={armarNumero} texto='0' ancho/>
            <BotonCalc accion={armarNumero} texto='.'/>
            <BotonCalc accion={calcular} color='#FF9427' texto='='/>
        </View>
    </View>
  )
}

export default CalculadoraScreen

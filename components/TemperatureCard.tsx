import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';


interface temperatureCardProps {
    temperature: [] | any
}
function TemperatureCard(props: temperatureCardProps) {
    const {temperature} = props
    const [tempMin, setTempMin] = useState(20)
    const [tempMax, setTempMax] = useState(30)
    const [temp, setTemp] = useState(25)
    return (
        <View style={styles.container}>
            <Text style={styles.mainTemp}>
                {parseInt(temperature?.temperature) || temp}°
            </Text>
            <View style={styles.tempContainer}>
                <Text style={[styles.temp, {fontWeight: 'bold'}]}>{parseInt(temperature?.temperature_min) || tempMin}°</Text>
                <Text style={styles.temp}>{parseInt(temperature?.temperature_max) || tempMax}°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        paddingLeft: 30,
        paddingTop: 30,
        justifyContent: 'space-between',
    },
    tempContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '20%',
        justifyContent: 'space-between',
    },
    mainTemp: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    temp: {
        fontSize: 15,
    }

});

export default TemperatureCard
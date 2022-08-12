import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';


interface locationProps {
    weath: [] | any
}
function LocationsCard(props: locationProps) {
    const {weath} = props
    const [city, setCity] = useState("tbilisi")
    const [weather, setWeather] = useState('cloud')
    return (
        <View style={styles.container}>
            <Text style={styles.city}>{weath.city || city}</Text>
            <Text style={styles.weather}>{weath.main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    city: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    weather: {
        fontSize: 16,
        margin: 13,
        fontWeight: 'bold',
    }

});

export default LocationsCard
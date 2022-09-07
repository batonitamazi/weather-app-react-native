import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
interface WeatherCardProps {
    weather: [] | any
}

function WeatherCard(props: WeatherCardProps) {
    const { weather } = props
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>{weather.city}</Text>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.temperatureText}>{Math.floor(weather.temperature)}°</Text>
                <Text style={styles.weatherText}>{weather.main}</Text>
                <View style={styles.minMaxContainer}>
                    <Text style={styles.minMaxText}>H:{Math.floor(weather.temperature_max)}°</Text>
                    <Text style={styles.minMaxText}>L:{Math.floor(weather.temperature_min)}°</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    cityText: {
        fontWeight: "400",
        fontSize: 34,
        color: '#FFFFFF',
    },
    temperatureText: {
        fontWeight: "200",
        fontSize: 96,
        color: '#FFFFFF',
    },
    weatherText: {
        fontWeight: "600",
        fontSize: 20,
        color: '#a9a9a9',
    },
    minMaxContainer: {
        flexDirection: 'row',
    },
    minMaxText: {
        fontWeight: "200",
        fontSize: 18,
        color: '#FFFFFF',
    }
})

export default WeatherCard
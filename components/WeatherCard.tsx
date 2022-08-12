import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
interface WeatherCardProps {
    weather: [] | any
}

function WeatherCard(props: WeatherCardProps) {
    const { weather } = props
    return (
        <View style={styles.skyContainer}>
            <View>
                {(() => {

                    switch (weather?.main) {
                        case 'Clouds':
                            return (
                                <FontAwesome name="cloud" size={104} color="white" style={{ zIndex: 100, }} />
                            )
                        case 'Clear':
                            return (
                                <Feather name="sun" size={104} color="orange" />
                            )
                        case 'Snow':
                            return (
                                <Feather name="cloud-snow" size={104} color="white" />
                            )
                        case 'Rain':
                            return (
                                <Feather name="cloud-rain" size={104} color="white" />
                            )
                        case 'Fog':
                            return (
                                <Fontisto name="fog" size={104} color="white" />
                            )
                        default:
                            return (
                                <Feather name="sun" size={104} color="orange" />
                            )
                    }

                })()}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    skyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '35%',
        position: 'relative',
        backgroundColor: '#00ced1',
        borderTopRightRadius: 110,
        borderTopLeftRadius: 200,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 170,
    },
    sunContainer: {
        width: '40%',
        height: '40%',
        backgroundColor: 'orange',
        borderRadius: 180,
    },
})

export default WeatherCard
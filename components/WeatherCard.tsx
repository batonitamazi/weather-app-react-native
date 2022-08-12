import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


function WeatherCard() {
    return (
        <View style={styles.skyContainer}>
            <View>
                <FontAwesome name="cloud" size={104} color="white" style={{zIndex: 100, }} />
                {/* <Ionicons name="md-sunny" size={104} color="orange" style={{zIndex: -1 }} /> */}
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
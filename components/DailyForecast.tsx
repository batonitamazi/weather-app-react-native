import React from 'react'
import { Feather, FontAwesome, Fontisto } from '@expo/vector-icons';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

interface dailyForecastProps{
    dailyForecast: [] | any
}
const DailyForecast = (props: dailyForecastProps)  => {
    const {dailyForecast} = props
    return(dailyForecast && dailyForecast.map((item: any, index: number) => {
                return (
                    <TouchableOpacity key={index} style={[styles.miniWeatherCard, styles.shadowProps]}>
                        <Text style={styles.hourlyText}>{item.hour.slice(11, 16)}</Text>
                        {(() => {
    
                            switch (item?.main) {
                                case 'Clouds':
                                    return (
                                        <FontAwesome name="cloud" size={30} color="white" style={{ zIndex: 100, }} />
                                    )
                                case 'Clear':
                                    return (
                                        <Feather name="sun" size={30} color="orange" />
                                    )
                                case 'Snow':
                                    return (
                                        <Feather name="cloud-snow" size={30} color="white" />
                                    )
                                case 'Rain':
                                    return (
                                        <Feather name="cloud-rain" size={30} color="cyan" />
                                    )
                                case 'Fog':
                                    return (
                                        <Fontisto name="fog" size={30} color="white" />
                                    )
                                default:
                                    return (
                                        <Feather name="sun" size={30} color="orange" />
                                    )
                            }
    
                        })()}
                        <Text style={styles.weatherText}>{Math.floor(item.temperature)}°</Text>
                    </TouchableOpacity>
                )
            })
    )
}



const styles = StyleSheet.create({
 
    textStyle: {
        color: '#a9a9a9',
        fontSize: 17,
    },
    hourlyText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    weatherText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    textContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    weatherContainer: {
        marginTop: 10,
        height: '32%',
        marginHorizontal: 5,
    },
    miniWeatherCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: 60,
        height: '90%',
        borderStyle: 'solid',
        borderColor: '#48319d',
        borderWidth: 1,
        margin: 7,
        borderRadius: 30,
    },
    shadowProps: {
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    


})
export default DailyForecast
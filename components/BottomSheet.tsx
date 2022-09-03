import React, { useCallback, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

interface bottomSheetProps {
    forecas: [] | any
}

function BottomSheetComponent(props: bottomSheetProps) {
    const { forecas } = props
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [hourlyForecast, setHourlyForecast] = useState(true)
    const [dailyForecast, setDailyForecast] = useState(false)
    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
    }, []);


    const showHourlyForecast = () => {
        setDailyForecast(false)
        setHourlyForecast(true)
    }
    const showDailyForecast = () => {
        setHourlyForecast(false)
        setDailyForecast(true)
    }
    
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={['70%', '100%']}
            onChange={handleSheetChanges}
        >
            <LinearGradient
                style={styles.bottomcontentContainer}
                colors={['#1C1B33', '#362A84']}
            >
                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={showHourlyForecast}
                    >
                        <Text style={styles.textStyle}>Hourly Forecast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={showDailyForecast}

                    >
                        <Text style={styles.textStyle}>Daily Forecast</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.weatherContainer}

                    >

                        {hourlyForecast && forecas.filter((item: any, index: number) => {
                            return index < 9;
                        }).map((item: any, index: number) => {
                            return (
                                <TouchableOpacity key={index} style={styles.miniWeatherCard}>
                                    <Text style={styles.hourlyText}>{item.hour.slice(11, 16)}</Text>
                                    <Image source={require('../assets/raining.png')} style={{ width: 50, height: 50 }} />
                                    <Text style={styles.weatherText}>{Math.floor(item.temperature)}°</Text>
                                </TouchableOpacity>
                            )
                        })}
                        {dailyForecast && forecas.map((item: any, index: number) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.miniWeatherCard}>
                                        <Text style={styles.hourlyText}>{item.hour.slice(11, 16)}</Text>
                                        <Image source={require('../assets/raining.png')} style={{ width: 50, height: 50 }} />
                                        <Text style={styles.weatherText}>{Math.floor(item.temperature)}°</Text>
                                    </TouchableOpacity>
                                )
                            }

                        )}

                    </ScrollView>
                </View>
            </LinearGradient>
        </BottomSheet>
    );
}


const styles = StyleSheet.create({
    bottomcontentContainer: {
        flex: 1,
    },
    textStyle: {
        color: '#a9a9a9',
        fontSize: 17,
        fontFamily: 'Al Nile',
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
        marginTop: 20,
        height: '35%',
        marginHorizontal: 5,
    },
    miniWeatherCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: 60,
        backgroundColor: '#48319D',
        height: '90%',
        borderStyle: 'solid',
        borderColor: '#C427FB',
        borderWidth: 1,
        margin: 7,
        borderRadius: 30
    },
})

export default BottomSheetComponent
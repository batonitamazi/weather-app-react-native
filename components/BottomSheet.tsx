import React, { useCallback, useMemo, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast'


interface bottomSheetProps {
    forecas: [] | any
}

const tabs = [
    {
        name: 'Hourly Forecast',
        label: 'Hourly Forecast',
        component: <HourlyForecast hourlyForecast={undefined} />
    },
    {
        name: 'Daily Forecast',
        label: 'Daily Forecast',
        component: <HourlyForecast hourlyForecast={undefined} />
    }
]


function BottomSheetComponent(props: bottomSheetProps) {
    const { forecas } = props
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [active, setActive] = useState(0)
    const handleSheetChanges = useCallback((index: number) => {
    }, []);
    const snapPoints = useMemo(() => ['70%', '100%'], []);

    const showHourlyForecast = () => {
        setActive(0)
    }
    const showDailyForecast = () => {
        setActive(1)
    }



    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{ flex: 1 }}
        >
            <LinearGradient
                style={styles.bottomcontentContainer}
                colors={['#2E335A', '#45278B']}
            >
                <View style={styles.textContainer}>
                    {tabs?.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity
                                key={index}
                            >
                                <Text style={styles.textStyle}>{item.label}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    {/* <TouchableOpacity
                        onPress={showHourlyForecast}
                    >
                        <Text style={styles.textStyle}>Hourly Forecast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={showDailyForecast}
                    >
                        <Text style={styles.textStyle}>Daily Forecast</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{
                    width: '100%', backgroundColor: '#5936B4', height: 1, flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <Animated.View style={{
                        width: '35%',
                        backgroundColor: active === 0 ? "#007aff" : '#5936B4',
                        height: active === 0 ? 3 : 1,
                        borderRadius: 10,
                        shadowColor: '#ffffff',
                        shadowOffset: { width: 4, height: -4 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                    }}
                    >
                    </Animated.View>
                    <Animated.View style={{
                        backgroundColor: active === 1 ? "#007aff" : '#5936B4',
                        width: '35%',
                        height: active === 1 ? 3 : 1,
                        borderRadius: 10,
                        shadowColor: active === 1 ? '#ffffff' : '#000000',
                        shadowOffset: { width: 4, height: -4 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                    }}
                    >
                    </Animated.View>
                </View>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.weatherContainer}
                    >
                        <DailyForecast dailyForecast={forecas} />
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
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        width: '100%',
        height: '10%',
    },
    bottomSheet: {
        flex: 1,
    },


})

export default BottomSheetComponent



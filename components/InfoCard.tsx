import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

interface infoCardProps {
  info: [] | any
}

function InfoCard(props: infoCardProps) {
  const [wind, setWind] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const {info} = props
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Feather name="wind" size={24} color="gray" />
        <Feather name="droplet" size={24} color="gray" />
        <Feather name="umbrella" size={24} color="gray"/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {info?.wind || wind}km/h
        </Text>
        <Text style={styles.textStyle}>
        {info?.humidity || humidity}%
        </Text>
        <Text style={styles.textStyle}>
        {info?.humidity/2-3 || saturation}%
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '65%',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20, 
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500'
  }
})

export default InfoCard
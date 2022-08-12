import { StyleSheet, RefreshControl, View, ScrollView, FlatList, ListView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'
import { QueryOptions } from './helpers/query.options';
import { environment } from './environment/environment';
import { weatherService } from './models/weather/service';
import { Weather } from './models/weather/weather';
import TemperatureCard from './components/TemperatureCard';
import LocationsCard from './components/LocationsCard';
import InfoCard from './components/InfoCard';
import WeatherCard from './components/WeatherCard';
import SearchCard from './components/SearchCard';

export default function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [weather, setWeather] = useState<Weather[]>([])
  const [lat, setLat] = useState(41.715147)
  const [lon, setLon] = useState(44.827137)
  const [refreshing, setRefreshing] = React.useState(false);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return;
    }
    let locations = await Location.getCurrentPositionAsync({});
    setLat(locations.coords.latitude)
    setLon(locations.coords.longitude)
  }
  const getWeather = () => {
    const options = new QueryOptions();
    options.lat = `${lat}`
    options.lon = `${lon}`
    options.appid = `${environment.key}`
    weatherService.list(options).then((r: any) => {
      setWeather(r)
    })
  }
  const getCurrentCityWeather = (city: string) => {
    const options = new QueryOptions();
    options.city = `${city}`
    options.appid = `${environment.key}`
    weatherService.list(options).then((result: any) => {
      setWeather(result)
    })
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getWeather();
      setRefreshing(false)
    }
    catch (error) {
      console.log(error)
    }
  }, [refreshing])

  useEffect(() => {
    getLocation();
    getWeather();
  }, [])
  console.log(searchPhrase)
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <SearchCard searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            />
          <LocationsCard weath={weather} />
          <WeatherCard />
          <TemperatureCard temperature={weather} />
          <InfoCard info={weather} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentContainer: {
    height: '100%'
  }
});

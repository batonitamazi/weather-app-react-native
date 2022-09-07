import 'react-native-gesture-handler'
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'
import { QueryOptions } from './helpers/query.options';
import { environment } from './environment/environment';
import { weatherService } from './models/weather/service';
import { Weather } from './models/weather/weather';
import WeatherCard from './components/WeatherCard';
import { Dimensions } from 'react-native';
import BottomSheetComponent from './components/BottomSheet';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


const windowHeight = Dimensions.get('screen').height;




export default function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [weather, setWeather] = useState<Weather[]>([])
  const [forecast, setForecast] = useState<Weather[]>([])



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
      setRefreshing(false)
      setWeather(r)
    })
  }
  const getForecast = () => {
    const options = new QueryOptions();
    options.lat = `41.7151`
    options.lon = `44.8271`
    options.appid = `${environment.key}`
    weatherService.forecastList(options).then((r: any) => {
      setForecast(r)
    })

  }
  // const getCurrentCityWeather = () => {
  //   const options = new QueryOptions();
  //   options.city = `${searchPhrase}`
  //   options.appid = `${environment.key}`
  //   weatherService.list(options).then((result: any) => {
  //     setWeather(result)
  //   })
  // }

  // const handleSearch = () => {
  //   getCurrentCityWeather();
  //   setClicked(false)
  //   setSearchPhrase("")
  // }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getWeather()
    }
    catch (error) {
      console.log(error)
    }
  }, [refreshing])

  useEffect(() => {
    getWeather();
    getForecast();
    getLocation();
    // if (searchPhrase !== "") {
    //   getCurrentCityWeather();
    // }
  }, [])
  return (
    <View style={styles.contentContainer}>
        <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <WeatherCard weather={weather} />
            <View style={styles.secondContainer}>
              <View style={styles.imageContainer}>
                <Image source={require('./assets/house.png')} style={styles.house} />
              </View>

              <View style={styles.bottomSheetView}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <BottomSheetComponent forecas={forecast} />
                  <View style={styles.footerContainer}>
                    <TouchableOpacity>
                      <Image source={require('./assets/location.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plusContainer}>
                      <Image source={require('./assets/plusIcon.png')} style={{ width: 80, height: 80 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('./assets/hamburger.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                  </View>
                </GestureHandlerRootView>
              </View>
            </View>
          </View>
        </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 50,
  },
  image: {
    flex: 1,
  },
  contentContainer: {
    height: '100%',
    backgroundColor: '#48319D',
  },
  house: {
    width: 300,
    height: 300,
  },
  secondContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center'
  },
  imageContainer: {
    height: '2%',
  },
  bottomSheetView: {
    width: '100%',
    height: '100%',
    opacity: 0.97,

  },
  footerContainer: {
    marginTop: windowHeight / 1.7,
    borderTopColor: '#48319d',
    borderTopWidth: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  plusContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

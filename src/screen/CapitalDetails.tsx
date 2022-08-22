import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComp from '../components/HeaderComp';
type props = {
  Screen?: (val: String) => void;
  CapitalName: String;
};
const CapitalDetails: React.FC<props> = ({Screen, CapitalName}) => {
  const [Data, setData] = useState(Object);
  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=f38245dc71cd63f4f15f78b1939bf49f&query=${CapitalName}`,
    )
      .then(res => res.json())
      .then(val => {
        setData(val);
      });
  }, []);
  return (
    <View style={styles.container}>
      <HeaderComp
        Screen={Screen}
        backScreen={'CountryDetailScreen'}
        screenName={'Capital Weather'}
      />
      <View style={{flex: 1}}>
        <View style={styles.ImageView}>
          <Image
            style={{height: '30%', width: '30%', borderRadius: 10}}
            source={{
              uri: Data?.current?.weather_icons[0],
            }}
          />
        </View>
        <View style={styles.cards}>
          <Text
            style={[
              styles.Textstyle,
              {
                alignSelf: 'flex-start',
                marginLeft: 40,
                color: '#000000',
                fontSize: 23,
                fontWeight: 'bold',
              },
            ]}>
            Capital Information :-
          </Text>

          <View style={styles.InfoView}>
            <Text style={styles.Textstyle}>
              <Text style={styles.InfoText}>Capital Name :- </Text>
              {CapitalName}
            </Text>
            <Text style={styles.Textstyle}>
              <Text style={styles.InfoText}>Temperature:- </Text>
              {Data?.current?.temperature}C°
            </Text>
            <Text style={styles.Textstyle}>
              <Text style={styles.InfoText}>Wind Speed:- </Text>
              {Data?.current?.wind_speed}
            </Text>
            <Text style={styles.Textstyle}>
              <Text style={styles.InfoText}>Precipitation:- </Text>
              {Data?.current?.precip}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CapitalDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  ImageView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flex: 1.2,
    backgroundColor: '#f3e3ff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoText: {fontSize: 20, fontWeight: 'bold'},
  InfoView: {
    marginBottom: 20,
    height: '70%',
    width: '90%',
    padding: 15,
    borderRadius: 10,
  },
  Textstyle: {color: '#000000', fontSize: 18, marginVertical: 15},
});

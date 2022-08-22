import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComp from '../components/HeaderComp';
type props = {
  Screen?: (val: String) => void;
  capitalName?: (val: String) => void;
  Data?: {
    capital: String;
    population: String;
    latlng: String;
    flags: String;
  };
};
const CountryDetailScreen: React.FC<props> = ({Screen, Data, capitalName}) => {
  return (
    <View style={styles.container}>
      <HeaderComp
        Screen={Screen}
        backScreen={'SearchScreen'}
        screenName={'Country Information'}
      />
      <View style={styles.ImageView}>
        <Image
          style={{height: '70%', width: '90%', borderRadius: 10}}
          source={{uri: Data?.flags.png}}
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
          Country Information :-
        </Text>

        <View style={styles.InfoView}>
          <Text style={styles.Textstyle}>
            <Text style={styles.InfoText}>Capital:- </Text>
            {Data?.capital[0]}
          </Text>
          <Text style={styles.Textstyle}>
            <Text style={styles.InfoText}>population:- </Text>
            {Data?.population}
          </Text>
          <Text style={styles.Textstyle}>
            <Text style={styles.InfoText}>Latitude:- </Text>
            {Data?.latlng[0]}
          </Text>
          <Text style={styles.Textstyle}>
            <Text style={styles.InfoText}>Longitude:- </Text>
            {Data?.latlng[1]}
          </Text>
          <TouchableOpacity
            style={styles.CWbutton}
            onPress={() => {
              Screen('CapitalDetails');
              capitalName(Data?.capital[0]);
            }}>
            <Text style={{fontSize: 23, fontWeight: 'bold', color: '#ffff'}}>
              Capital Weather
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CountryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
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
  InfoView: {
    marginBottom: 20,
    height: '70%',
    width: '90%',
    padding: 15,
    borderRadius: 10,
  },
  ImageView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textstyle: {color: '#000000', fontSize: 18, marginVertical: 15},
  CWbutton: {
    backgroundColor: '#410E68',
    borderRadius: 7,
    width: '60%',
    minHeight: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  InfoText: {fontSize: 20, fontWeight: 'bold'},
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

type props = {
  Screen?: (val: String) => void;
  country?: (val: Object) => void;
};

const SearchScreen: React.FC<props> = ({Screen, country}) => {
  const [countryNameFocus, setCountryNameFocus] = useState(Boolean);
  const [countryName, setCountryName] = useState(String);

  const SearchDeatils = () => {
    console.log('countryNameFocus', countryNameFocus);
    let url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
      .then(res => res.json())
      .then(val => {
        country(val[1]);
        if (val[1]) {
          Screen('CountryDetailScreen');
        } else {
          Alert.alert('No Data', 'Please Enter Correct country name.');
        }
      });
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../utils/Assest/SearchpageBackground.jpg')}
        style={{flex: 1}}
        resizeMode="cover">
        <KeyboardAvoidingView style={Styles.keyboardAvoid}>
          <View style={Styles.weatherName}>
            <Text style={Styles.weatherNameText}>Weather</Text>
          </View>
          <View style={Styles.headingtext}>
            <View style={{width: '100%', marginBottom: 50}}>
              <Text style={{fontSize: 32, color: '#fff', fontWeight: '700'}}>
                Hello Brice
              </Text>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Check the weather by the country
              </Text>
            </View>
            <View style={Styles.InputFieldStyle}>
              <Image
                style={{height: 28, width: 28, marginRight: 5}}
                tintColor={'#CFCFCF'}
                source={require('../utils/Assest/location.png')}
              />
              <TextInput
                style={{width: '100%', fontSize: 16}}
                placeholder={'Enter Country Name...'}
                onChangeText={(val: string) => setCountryName(val)}
                onBlur={(
                  event: NativeSyntheticEvent<TextInputFocusEventData>,
                ) => setCountryNameFocus(true)}
                color={'#ffffff'}
              />
            </View>
          </View>

          <View style={Styles.subContainer}>
            <TouchableOpacity
              style={[
                Styles.LoginButtonStyle,
                {
                  opacity: countryNameFocus && countryName.length > 0 ? 1 : 0.5,
                },
              ]}
              activeOpacity={0.5}
              disabled={
                countryNameFocus && countryName.length > 0 ? false : true
              }
              onPress={() => {
                if (countryName.length > 0) {
                  SearchDeatils();
                } else {
                  Alert.alert('TextFiled', 'Please enter country name!');
                }
              }}>
              <Text style={Styles.LoginButtonTextStyle}>Search</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#707070',
    marginBottom: 14,
  },
  weatherName: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherNameText: {fontSize: 56, color: '#fff', fontWeight: '700'},
  keyboardAvoid: {
    flex: 1,
    paddingHorizontal: 40,
  },
  headingtext: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputFieldStyle: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    height: 40,
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  ForgotTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#707070',
  },
  LoginButtonTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '700',
    color: '#410E68',
    justifyContent: 'center',
    position: 'absolute',
  },
  LoginButtonStyle: {
    backgroundColor: '#fff',
    borderRadius: 7,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SearchScreen from './src/screen/SearchScreen';
import CountryDetailScreen from './src/screen/CountryDetailScreen';
import CapitalDetails from './src/screen/CapitalDetails';

const App = () => {
  const [screen, setScreen] = useState('SearchScreen');
  const [countryData, setCountryData] = useState();
  const [CapitalName, setCapitalName] = useState(String);

  return (
    <SafeAreaView style={Styles.container}>
      {screen == 'SearchScreen' ? (
        <SearchScreen
          country={(val: any[]) => setCountryData(val)}
          Screen={(val: String) => setScreen(val)}
        />
      ) : screen == 'CountryDetailScreen' ? (
        <CountryDetailScreen
          Screen={(val: String) => setScreen(val)}
          capitalName={(val: String) => setCapitalName(val)}
          Data={countryData}
        />
      ) : screen == 'CapitalDetails' ? (
        <CapitalDetails
          Screen={(val: String) => setScreen(val)}
          CapitalName={CapitalName}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

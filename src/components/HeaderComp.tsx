import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
type props = {
  Screen?: (val: String) => void;
  backScreen: String;
  screenName: String;
};
const HeaderComp: React.FC<props> = ({Screen, backScreen, screenName}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Screen(backScreen);
        }}>
        <Image
          style={{height: 28, width: 28}}
          source={require('../utils/Assest/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.headerName}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#410E68',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  button: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  headerName: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  headerText: {fontSize: 23, fontWeight: 'bold', color: '#ffff'},
});

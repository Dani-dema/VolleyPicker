import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import DeviceInfo from 'react-native-device-info';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Teams from './src/Teams'

interface AppState {
  selectedName: any;
}

const name = [
  'Blerion',
  'Ramadan',
  'Kristian',
  'Klevis',
  'Tito',
  'Mile',
  'Joni',
  'Sindi',
  'Ejada',
  'Visi',
  'Emi',
  'Kosta',
  'Oli',
  'Erisa',
  'Ersa',
  'Iridion',
  'Miki',
  'Turi',
  'Bilishti',
];

const OfferContent = (props: any) => (
  <View style={styles.emrat}>
    <View style={styles.emriVecanti}>
      <Text style={styles.emri}>{props.data}</Text>
    </View>
  </View>
);

const Stack = createStackNavigator();

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedName: [],
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Perzgjidh lojtaret" component={Home} />
          <Stack.Screen name="Ekipet" component={Teams} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

const styles: any = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 24,
    color: '#2754ba',
  },
  btnActions: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payBtn: {
    backgroundColor: '#738C88',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 0,
  },
  payBtnText: {
    color: '#fff',
    fontSize: 17,
  },
  gridRow: {
    flexDirection: 'row',
    margin: 35,
    marginTop: 20,
    marginBottom: 0,
    borderWidth: 1.5,
    borderColor: '#738C88',
    borderRadius: 10,
  },
  gridCol: {
    margin: '10%',
    marginTop: '6%',
    marginBottom: '6%',
    flexDirection: 'column',
  },
  ekipet: {
    marginBottom: 10,
  },
  emrat: {
    borderColor: '#72bcd4',
    borderWidth: 1.5,
    padding: 1,
    marginBottom: 5,
  },
  emri: {
    fontSize: 20,
  },
  emriVecanti: {
    margin: 5,
  },
});

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Teams from './src/Teams'

const Stack = createStackNavigator();

class App extends React.Component {
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


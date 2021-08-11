import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Teams from './src/Teams';
import FirstScreen from './src/FirstScreen';

const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator  >
            <Stack.Screen name="Volley Picker" component ={FirstScreen}   options={{
          headerTitleStyle: {
          textAlign:'center'
          },
        }}  />
            <Stack.Screen name="Zgjidhni lojtaret" component={Home}   />
            <Stack.Screen name="Ekipet" component={Teams} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
export default App;


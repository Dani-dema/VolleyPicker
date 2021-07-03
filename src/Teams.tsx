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

interface teamsState {
  selectedName: any;
}

const OfferContent = (props: any) => (
  <View style={styles.emrat}>
    <View style={styles.emriVecanti}>
      <Text style={styles.emri}>{props.data}</Text>
    </View>
  </View>
);

function Teams({route, navigation}) {
    return (
      <View>
        <View style={styles.gridRow}>
          <View style={styles.gridCol}>
            <Text style={{marginBottom: 10, color: '#AA4D4B', fontSize: 20}}>
              EKIPI 1:
            </Text>
            <FlatList
              data={route.params.ekipi1}
              renderItem={({item}) => <OfferContent data={item} />}
              keyExtractor={(item: any, index: any) => index.toString()}
              extraData={route.params.ekipi1}
            />
          </View>
          <View style={styles.gridCol}>
            <Text style={{marginBottom: 10, color: '#4F997A', fontSize: 20}}>
              EKIPI 2:
            </Text>
            <FlatList
              data={route.params.ekipi2}
              renderItem={({item}) => <OfferContent data={item} />}
              keyExtractor={(item: any, index: any) => index.toString()}
              extraData={route.params.ekipi2}
            />
          </View>
        </View>
        <View style={styles.btnActions}>
          <TouchableHighlight
            style={styles.payBtn}
            onPress={route.params.selekto}
            activeOpacity={0.7}
            underlayColor={'#738C88'}>
            <Text style={styles.payBtnText}>Perzi</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
}
export default Teams;

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

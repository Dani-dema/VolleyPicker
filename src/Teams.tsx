import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  AsyncStorage
} from 'react-native';

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

const Teams: any = ({route, navigation}) => {
    useEffect(() => {
      try {
        const value = AsyncStorage.getItem('LOJTARET');
        if (value !== null) {
          console.log("KEMI LOJTAR", value);
        }
      } catch (error) {
        console.log("ERROR IN RETRIEVING STORAGE", error)
      }
    }, [])

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

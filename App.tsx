import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight, ScrollView, FlatList, Image } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import DeviceInfo from 'react-native-device-info';

interface AppState {
  selectedName: any;
}

const name = ['Blerion', 'Ramadan', 'Kristian', 'Klevis', 'Tito', "Mile", "Joni", "Sindi", "Ejada", "Visi", "Emi", "Kosta", "Oli", "Erisa", "Ersa", "Iridion", "Miki", "Turi", "Bilishti"];

const OfferContent = (props: any) => (
  <View style={styles.emrat}>
    <View style={styles.emriVecanti}>
      <Text style={styles.emri}>{props.data}</Text>
    </View>
  </View>
);

class App extends React.Component<any, AppState> {
  teams1: any;
  teams2: any;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedName: [],
    };

    this.selectedTeams = this.selectedTeams.bind(this);
    this.teams1 = [];
    this.teams2 = [];
  }

  onSelectionsChange = (selectedName: any) => {
    this.setState({selectedName});
  };

  renderLabel = (label: any, style: any) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 20, color: '#304249'}}>{label}</Text>
        </View>
      </View>
    );
  };

  selectedTeams() {
    this.setState({selectedName: this.state.selectedName});
    this.state.selectedName.sort(() => Math.random() - 0.5);
    let ekipet = this.state.selectedName;
    console.log('EKIPETTTT', ekipet);

    let teams: any = [];

    {
      ekipet.map((item: any, key: any) => {
        teams.push(item.label);
      });
    }

    this.teams1 = teams.slice(0, 6);
    this.teams2 = teams.slice(6, 13);
    console.log('team1', this.teams1);
    console.log('team2', this.teams2);
  }

  render() {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              margin: 30,
              marginBottom: 10,
              fontSize: 27,
              color: '#293D39',
              marginTop:
                DeviceInfo.getModel() === 'iPhone 12' ||
                DeviceInfo.getModel() === 'iPhone 12 Pro' ||
                DeviceInfo.getModel() === 'iPhone 12 Pro Max'
                  ? 50
                  : 10,
            }}>
            Perzgjidh lojtaret
          </Text>
        </View>
        <ScrollView>
          <SelectMultiple
            style={{marginTop: 10, height: 260}}
            items={name}
            renderLabel={this.renderLabel}
            selectedItems={this.state.selectedName}
            onSelectionsChange={this.onSelectionsChange}
          />
        </ScrollView> 
        <View style={styles.btnActions}>
          <TouchableHighlight
            style={styles.payBtn}
            onPress={this.selectedTeams}
            activeOpacity={0.7}
            underlayColor={'#738C88'}>
            <Text style={styles.payBtnText}>Perzgjidh {this.state.selectedName.length}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridCol}>
            <Text style={{marginBottom: 10, color: '#AA4D4B', fontSize: 20}}>
              EKIPI 1:
            </Text>
            <FlatList 
              data={this.teams1}
              renderItem={({item}) => <OfferContent data={item} />}
              keyExtractor={(item: any, index: any) => index.toString()}
              extraData={this.state}
            />
            </View>
          <View style={styles.gridCol}>
            <Text style={{marginBottom: 10, color: '#4F997A', fontSize: 20}}>
              EKIPI 2:
            </Text>
            <FlatList 
              data={this.teams2}
              renderItem={({item}) => <OfferContent data={item} />}
              keyExtractor={(item: any, index: any) => index.toString()}
              extraData={this.state}
            />
            </View>
          </View>
      </View>
    );
  }
}
export default App

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
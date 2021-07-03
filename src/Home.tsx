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

interface HomeState {
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

class Home extends React.Component<any, HomeState> {
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
    console.log('EKIPETTTT', ekipet.length);

    let teams: any = [];

    {
      ekipet.map((item: any, key: any) => {
        teams.push(item.label);
      });
    }

    if (ekipet.length >= 12) {
      this.teams1 = teams.slice(0, 6);
      this.teams2 = teams.slice(6, 12);
    } else {
      let mesi = ekipet.length / 2;
      this.teams1 = teams.slice(0, mesi);
      this.teams2 = teams.slice(mesi, ekipet.length);
    }
    console.log('team1', this.teams1);
    console.log('team2', this.teams2);

    console.log("FUTUUU", this.state.selectedName)
    this.props.navigation.navigate('Ekipet', {ekipi1: this.teams1, ekipi2: this.teams2, selekto: this.selectedTeams});
  }

  render() {
    return (
          <View>
            <ScrollView>
              <SelectMultiple
                style={{marginTop: 10, height: 600}}
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
                <Text style={styles.payBtnText}>
                  Perzgjidh {this.state.selectedName.length}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
    );
  }
}
export default Home;

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

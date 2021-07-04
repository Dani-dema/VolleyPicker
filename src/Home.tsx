import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import {Icon} from 'react-native-elements';
import AddModal from './AddModal'

interface HomeState {
  selectedName: any;
  names: any;
}

class Home extends React.Component<any, HomeState> {
  teams1: any;
  teams2: any;
  name: any;
  AddModalRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedName: [],
      names: [
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
      ],
    };

    this.selectedTeams = this.selectedTeams.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.teams1 = [];
    this.teams2 = [];
  }

  setAddModalRef = (element: any) => {
    this.AddModalRef = element;
  };

  onSelectionsChange = (selectedName: any) => {
    this.setState({selectedName});
  };

  renderLabel = (label: any) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 20, color: '#304249'}}>{label}</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            right: 25,
          }}>
          <TouchableOpacity
            onPress={() => this.deleteMember(label)}
            activeOpacity={0.65}>
            <Icon name="delete" color="#738C88"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  deleteMember(lojtari: any) {
    console.log('Lojtari', lojtari);
    const index = this.state.names.indexOf(lojtari);
    if (index > -1) {
      this.state.names.splice(index, 1);
    }
    this.setState({names: this.state.names});

    const ndodhet = this.state.selectedName.findIndex(
      (x: any) => x.label === lojtari,
    );
    if (ndodhet > -1) {
      this.state.selectedName.splice(ndodhet, 1);
    }
    this.setState({selectedName: this.state.selectedName});
  }

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

    console.log('FUTUUU', this.state.selectedName);
    this.props.navigation.navigate('Ekipet', {
      ekipi1: this.teams1,
      ekipi2: this.teams2,
      selekto: this.selectedTeams,
    });
  }

  addMember() {
    this.AddModalRef.openModal();
  }

  //te rregullohet pse del error kur ruhet emer i ri
  submitName(emri: any) {
    console.log("EMRI", emri);
    this.AddModalRef.closeModal();
    this.setState({names: this.state.names.push(emri)})
    this.state.names.push(emri);
  }

  render() {
    return (
      <View>
        <AddModal
          ref={this.setAddModalRef}
          func={this.submitName}
        />
        <ScrollView>
          <SelectMultiple
            style={{marginTop: 10, height: 600}}
            items={this.state.names}
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
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => this.addMember()}
            activeOpacity={0.65}>
            <Icon name="add" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;

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
  addBtn: {
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    right: 80,
    bottom: -4,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0000008c',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 4,
  },
});

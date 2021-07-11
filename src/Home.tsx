import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import {Icon} from 'react-native-elements';
import AddModal from './AddModal';
import {MMKV} from 'react-native-mmkv';

interface HomeState {
  selectedName: any;
  names: any;
  vlersimet: any;
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
      names: MMKV.getString('lojtaret')
        ? JSON.parse(MMKV.getString('lojtaret'))
        : [
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
      vlersimet: MMKV.getString('vlersimet')
        ? JSON.parse(MMKV.getString('vlersimet'))
        : [
            5,
            4,
            4,
            3,
            5,
            5,
            3,
            3,
            3,
            1,
            3,
            4,
            4,
            1,
            2,
            4,
            3,
            4,
            3,
          ],
    };

    this.selectedTeams = this.selectedTeams.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.submitName = this.submitName.bind(this);
    this.teams1 = [];
    this.teams2 = [];
  }

  componentDidMount() {
    //ckomentoje ne rast resetimi i local storage
    // MMKV.delete('lojtaret');
    // MMKV.delete('vlersimet');
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

  selectedTeams() {
    this.setState({selectedName: this.state.selectedName});

    //bejme shuffle arrayn
    this.state.selectedName.sort(() => Math.random() - 0.5);
    let ekipet = this.state.selectedName;

    let teams: any = [];
    let valutat: any = [];

    //mbushim arrayn e emrave dhe vlerat perkatese
    {
      ekipet.forEach((item: any, key: any) => {
        teams.push(item.label);
        //gjejme vleren perkatese
        const index = this.state.names.indexOf(item.label);
        valutat.push(this.state.vlersimet[index]);
      });
    }

    //gjejme totalin e vlerave te selektuarve
    let total=0;
    for (let i=0; i<ekipet.length; i++) {
      total+=valutat[i];
    }

    //gjejme vleren totale te gjysmes se pare te selektuarve
    let mesi = ekipet.length / 2;
    let shuma=0;
    for (let i=0; i<mesi; i++) {
      shuma+=valutat[i];
    }

    //shofim nese kjo shume e gjysmes se pare bie ne rangun ±1 te gjysmes totale
    if ((shuma<(total/2)+1) && (shuma>(total/2)-1)) {
      //nese po atehere ndahen ekipet dhe behet kalimi ne screenin tjeter
      this.teams1 = teams.slice(0, mesi);
      this.teams2 = teams.slice(mesi, ekipet.length);

      this.props.navigation.navigate('Ekipet', {
        ekipi1: this.teams1,
        ekipi2: this.teams2,
        selekto: this.selectedTeams,
      });
    } else {
      //nese jo therrasim perseri ne menyre rekursive funksionin per ta provuar serish
      this.selectedTeams();
    }
  }

  _storeData = async (emrat: any, vlersimet: any) => {
    try {
      MMKV.set('lojtaret', JSON.stringify(emrat));
      MMKV.set('vlersimet', JSON.stringify(vlersimet));
    } catch (error) {
      console.log("STORAGE ERROR", error)
    }
  };

  addMember() {
    this.AddModalRef.openModal();
  }

  submitName(emri: any, vlersimi: any) {
    this.AddModalRef.closeModal();
    this.state.names.push(emri);
    this.state.vlersimet.push(vlersimi.parseInt());

    this.setState({names: this.state.names});
    this.setState({vlersimet: this.state.vlersimet});

    this._storeData(this.state.names, this.state.vlersimet);
  }

  deleteMember(lojtari: any) {
    const index = this.state.names.indexOf(lojtari);
    if (index > -1) {
      this.state.names.splice(index, 1);
      this.state.vlersimet.splice(index, 1);
    }
    this.setState({names: this.state.names});
    this.setState({vlersimet: this.state.vlersimet});
    this._storeData(this.state.names, this.state.vlersimet);

    const ndodhet = this.state.selectedName.findIndex(
      (x: any) => x.label === lojtari,
    );
    if (ndodhet > -1) {
      this.state.selectedName.splice(ndodhet, 1);
    }
    this.setState({selectedName: this.state.selectedName});
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

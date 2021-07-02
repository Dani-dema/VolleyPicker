import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

interface AppState {
  selectedName: any;
}

const name = ['Blerion', 'Ramadan', 'Kristian', 'Klevis', 'Tito', "Mile", "Joni", "Sindi", "Ejada", "Oli", "Emi", "Kosta"];

// const OfferContent = (props: any) => (
//   <TouchableOpacity activeOpacity={0.75} onPress={() => props.onClick(props.data )}>
//       <View style={styles.singleOffer}>
//           <View style={styles.itemData}>
//               <Text style={styles.offername}>{props.data}</Text>
//           </View>
//       </View>
//   </TouchableOpacity>
// );

// const ekipi = (ekipi: any) => {
//   {ekipi.map((item: any, key: any) => 
//     {
//         return(
//         <View>
//           <Text> {item} </Text>
//         </View>
//       )
//   })}
// }

class App extends React.Component<any, AppState>  {

  teams1: any;
  teams2: any;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedName: []
    };

    this.selectedTeams = this.selectedTeams.bind(this)
    this.teams1 = [];
    this.teams2 = [];

  }
  // const ekipi = (ekipi: any) => {
  //   {ekipi.map((item: any, key: any) => 
  //     {
  //         return(
  //         <View>
  //           <Text> {item} </Text>
  //         </View>
  //       )
  //   })}
  // }
  

  onSelectionsChange = (selectedName: any) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedName })
  }

  selectedTeams() {

    this.state.selectedName.sort(() => Math.random() - 0.5);

    this.teams1 = this.state.selectedName.slice(0, 6);
    this.teams2 = this.state.selectedName.slice(6, 13)
    console.log("team1", this.teams1)
    console.log("team2", this.teams2);
  }

  render() {
    return (
      <ScrollView>
        <Text style={{ margin: 30, fontSize: 20 }}>Perzgjidh lojtaret</Text>
        <ScrollView>
          <SelectMultiple
            style={{height: 300}}
            items={name}
            selectedItems={this.state.selectedName}
            onSelectionsChange={this.onSelectionsChange} />
          </ScrollView>
        <View style={styles.btnActions}>
            <TouchableHighlight
              style={styles.payBtn}
              onPress={this.selectedTeams}
              activeOpacity={0.7}
              underlayColor={"blue"}>
              <Text style={styles.payBtnText}>Perzgjidh</Text>
            </TouchableHighlight>
        </View>
        <View>
          {/* <FlatList
                        data={this.state.teams1}
                        renderItem={({ item }) => <OfferContent data={item}/>}
                        keyExtractor={(item: any, index: any) => index.toString()}
                        extraData={this.state}
                        /> */}
          {/* <this.ekipi> */}
          {this.teams1.map((member: any) => {
                <View>
                  <Text> {member.label} </Text>
                </View>
              
          })}
        </View>
      </ScrollView>
    )
  }
}
export default App

const styles: any = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 24,
    color: '#2754ba'
  },
  btnActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payBtn: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  payBtnText: {
    color: '#fff',
    fontSize: 17,
  },
});
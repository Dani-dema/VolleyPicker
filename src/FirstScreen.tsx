
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import RNShake from 'react-native-shake';

interface FirstScreenState {
  show: boolean;
}

class FirstScreen extends React.Component<any, FirstScreenState>{

   constructor(props: any) {
    super(props);
    this.state = {
      show: false ,
    }
  }
  //  componentDidMount() {
  //   RNShake.addListener(() => {
  //     this.setState({show:true})
  //       });
  // }

  // componentWillUnmount() {
  //      RNShake.removeListener(() => {});
  // }
  render() {

    return (
       <View  style={{backgroundColor:'white',width:'100%' ,height:'100%'}}>
           <Image source={require("./assets/logo.jpg")} style={{width: '100%', height: '70%', alignSelf:'center', marginTop:'10%'}} />
        <View  style={styles.btnActions}>
           <TouchableOpacity
           style={styles.payBtn}
            onPress={() =>  this.props.navigation.navigate('Zgjidhni lojtaret')}
            activeOpacity={0.65} >
             <Text style= {styles.payBtnText}>Procedojme</Text>
           </TouchableOpacity>
        </View>
        {/* {this.state.show && (
             <Text>Procedojme</Text>
         )}; */}


      </View>
    );
  }
}
export default FirstScreen;

const styles: any = StyleSheet.create({
 btnActions: {
    marginTop: -30,
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
});

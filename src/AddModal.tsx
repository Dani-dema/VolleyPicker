import React from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

interface LoadingModalState {
  loading: boolean;
  open: boolean;
  name: string;
}
interface LoadingModalProps {
  func(emri: any): any
}
class AddModal extends React.Component<LoadingModalProps, LoadingModalState> {
  constructor(props: LoadingModalProps) {
    super(props);
    this.state = {
      loading: false,
      open: false,
      name: '',
    };
  }
  componentDidMount() {}

  toggleModal = () => {
    this.setState({open: !this.state.open});
  };

  openModal = () => {
    this.setState({open: true});
  };

  closeModal = () => {
    this.setState({open: false});
  };

  updateName = (value: string) => {
    this.setState({name: value});
  };

  render() {
    return (
      <Modal
        style={styles.bottomModal}
        isVisible={this.state.open}
        backdropTransitionOutTiming={0}
        onBackButtonPress={() => this.closeModal()}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>
              {' '}
              {'Shkruaj emrin e lojtarit'}
            </Text>
          </View>
          <View style={styles.modalBody}>
            <TextInput
              style={styles.descriptionInput}
              onChangeText={this.updateName}
              value={this.state.name}
              autoCompleteType="off"
              autoCorrect={false}
              placeholder={'Emri'}
              //onSubmitEditing={() => this.props.func(this.state.name)}
            />
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  this.closeModal();
                }}
                activeOpacity={0.75}>
                <Text style={styles.modalBtnText}>Anullo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalBtn, styles.modalBtnActive]}
                onPress={() => this.props.func(this.state.name)}
                disabled={this.state.loading}
                activeOpacity={0.75}>
                <Text style={[styles.modalBtnText, styles.modalBtnTextActive]}>
                  Ruaj
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    marginHorizontal: 5,
  },
  modalHeader: {
    backgroundColor: '#738C88',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#738C88',
  },
  modalHeaderTitle: {
    color: '#f0f0f5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContent: {
    backgroundColor: '#f0f0f5',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalBody: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  // modal footer

  modalFooter: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  modalBtn: {
    flex: 0.475,
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#738C88',
  },
  modalBtnActive: {
    backgroundColor: '#738C88',
  },
  modalBtnText: {
    color: '#738C88',
    fontSize: 15,
    textAlign: 'center',
  },
  modalBtnTextActive: {
    color: '#fff',
  },
  descriptionInput: {
    height: 40,
    backgroundColor: '#f4f4f4',
    paddingLeft: 15,
    paddingRight: 45,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});

export default AddModal;

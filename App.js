import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar,  } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Modal
        animationType="fade"
        transparent={false}
        statusBarTranslucent ={false}
        visible={modalVisible}
        
        onRequestClose={() => {
         // Alert.alert('Modeli suljettu.'); // ei pyydetty mutta voi tehdä
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <StatusBar backgroundColor="gray" barStyle="dark-content" />
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle1}>Show modal message</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.50,
    shadowRadius: 6,
    elevation: 20,
    top: 150, // näyttää olevan oikealla kohalla
    width: '100%', 
    position: 'absolute',

    
  },
 
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
    
  },
  textStyle1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20
    
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 17

  },
});
export default App;

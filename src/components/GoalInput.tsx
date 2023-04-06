import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const GoalInput = props => {
  const [input, setInput] = useState('');

  const inputHandler = text => {
    setInput(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    setInput('');
    props.onClose();
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your goal"
          onChangeText={inputHandler}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              color={'#5e0acc'}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color={'#5e0acc'} onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#210062',
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
  },
  input: {
    width: '90%',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  button: {width: '43%', margin: 10},
});

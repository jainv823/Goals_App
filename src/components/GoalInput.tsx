import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const GoalInput = props => {
  const [input, setInput] = useState('');

  const inputHandler = text => {
    setInput(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    setInput('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        onChangeText={inputHandler}
        value={input}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});

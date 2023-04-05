import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoalItem = props => {
  return (
    <View>
      <Text style={styles.goals}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goals: {
    fontSize: 20,
    color: '#FFFFFFFF',
    fontWeight: '600',
    marginVertical: 10,
    backgroundColor: '#5e0acc',
    padding: 10,
    borderRadius: 5,
  },
});

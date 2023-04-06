import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210062'}}
        onPress={props.onRemoveGoal.bind(this, props.id)}>
        <Text style={styles.goals}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  },
  goals: {
    fontSize: 20,
    padding: 10,
    color: '#FFFFFFFF',
    fontWeight: '600',
  },
});

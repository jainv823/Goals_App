import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

function App(): JSX.Element {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = input => {
    setGoals(currentGoal => [
      ...currentGoal,
      {text: input.toUpperCase(), id: Math.random().toString()},
    ]);
  };

  const removeGoalHandler = id => {
    setGoals(currentGoal => {
      return currentGoal.filter(goal => goal.id !== id);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={({item}) => {
            return (
              <GoalItem
                text={item.text}
                id={item.id}
                onRemoveGoal={removeGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 17,
    marginHorizontal: 10,
  },
  listContainer: {
    flex: 4,
    paddingTop: 10,
  },
});

export default App;

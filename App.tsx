import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

function App(): JSX.Element {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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

  const modalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModelHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add New Goal" color={'#5e0acc'} onPress={modalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onClose={closeModelHandler}
      />
      <View>
        <Text style={styles.heading}>
          {goals.length > 0 ? 'Your Current Goals' : 'No Goals'}
        </Text>
      </View>
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
    paddingTop: 17,
    paddingHorizontal: 10,
    backgroundColor: '#210062',
  },
  heading: {
    fontSize: 24,
    paddingVertical: 10,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  listContainer: {
    flex: 4,
    paddingTop: 10,
  },
});

export default App;

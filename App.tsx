import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your goal" />
        <Button title="PRRSS ME" />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>List of goals...</Text>
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
  listContainer: {
    flex: 4,
    paddingTop: 10,
  },
  listTitle: {
    fontSize: 20,
    color: '#FFFFFFFF',
    fontWeight: '600',
  },
});

export default App;

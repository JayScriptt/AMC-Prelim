
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [goals, setGoals] = useState([]);
const Colors = ['lightblue', 'lightgreen', 'royalblue', 'gold', 'plum', 'skyblue', 'lightyellow', 'peachpuff', 'mistyrose'];

  const submitGoal = () => {
    if (enterGoal.trim().length === 0) return;
    setGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: enterGoal }]);
    setEnterGoal("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="My Goal"
        style={styles.input}
        onChangeText={setEnterGoal}
        value={enterGoal}
      />
      <Button title="ADD" onPress={submitGoal} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  marginTop: '20%',
  padding: 50,
flex: 1,
},
  input: {
       height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  goalItem: {
    backgroundColor: "aqua",
    padding: 10,
    marginVertical: 5,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});

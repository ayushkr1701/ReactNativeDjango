import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from '@rneui/themed';

export default function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    async function getAllTasks() {
      try {
        const todos = await axios.get('http://10.0.2.2:8000/api/todo/')
        console.log(todos.data)
        setTodos(todos.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllTasks()
  }, [])

  const renderTodo = ({ item }) => {
    return (
      <Card>
        <Card.Title>{item.taskname}</Card.Title>
        <Card.Divider/>
        <Text>{item.deadline}</Text>
      </Card>
    );
  };

  return (
    <View >
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

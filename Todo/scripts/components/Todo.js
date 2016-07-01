import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export class Todo extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange (text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress () {
    fetch('http://localhost:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      const todos = [...this.state.todos, data]
      this.setState({ todos, newTodo: ''})
    })
  }

  componentWillMount () {
    fetch('http://localhost:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: data
      })
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Todos</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.text}>Create</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.todoList}>Todo List</Text>
        {this.state.todos.map((todo, index) => (
          <Text style={{color: '#CCDAE9', marginTop: 5, marginLeft: 10}} key={index}>{index + 1}: {todo.name}</Text>
        ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#46549E',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    color: '#CCDAE9',
    backgroundColor: '#31419e',
    height: 45,
    margin: 15,
    borderBottomWidth: 10,
    borderBottomColor: '#CCDAE9'
  },
  button: {
    backgroundColor: '#89CBF0',
    borderRadius: 3
  },
  text: {
    margin: 10,
    color: 'white'
  },
  title: {
    color: '#CCDAE9',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 100,
    marginTop: 100
  },
  todoList: {
    textDecorationLine: 'underline',
    marginLeft: 10,
    color: '#CCDAE9',
    fontSize: 30,
    paddingTop: 50
  }
})

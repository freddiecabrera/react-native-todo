import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
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
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({
      todos,
      newTodo: ''
    })
  }

  render () {
    return (
      <View>
        <TextInput
          style={{backgroundColor: 'red', height: 25, marginTop: 50}}
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Create</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, index) => (
            <Text key={index}>{todo}</Text>
          ))}
        </View>
      </View>
    )
  }
}

import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styled } from './styles'

export const AddTask = () => {
  return (
    <View style={styled.form}>
      <TextInput style={styled.input} placeholder="Adicionar uma nova tarefa" placeholderTextColor={'#808080'} />
      <TouchableOpacity style={styled.button}>
        <Text style={styled.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

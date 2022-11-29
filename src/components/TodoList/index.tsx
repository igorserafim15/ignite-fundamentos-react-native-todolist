import { Text, View } from 'react-native'
import { Task } from '../Task'

export const TodoList = () => {
  return (
    <View>
      <View>
        <Text>Criadas</Text>
        <Text>Concluidas</Text>
      </View>
      <View>
        <Text>Você ainda não tem tarefas cadastradas</Text>
        <Text>Crie tarefas e organize seus itens a fazer</Text>
      </View>
      <View>
        <Task />
      </View>
    </View>
  )
}

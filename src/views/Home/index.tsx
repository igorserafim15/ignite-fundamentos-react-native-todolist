import { View, StatusBar } from "react-native"
import { AddTask } from "../../components/AddTask"
import { Header } from "../../components/Header"
import { TodoList } from "../../components/TodoList"
import { styled } from "./styles"

export const Home = () => {
  return (
    <View style={styled.wrapper}>
      <StatusBar translucent backgroundColor={'#0000'} />
      <Header />
      <AddTask />
      <TodoList />
    </View>
  )
}

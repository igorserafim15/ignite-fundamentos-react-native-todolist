import { Image, View } from "react-native"
import { styled } from "./styles"

export const Header = () => {
  return (
    <View style={styled.header}>
      <Image source={require('./logo.png')} />
    </View>
  )
}

import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  form: {
    marginTop: -20,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 52,
    padding: 16,
    fontSize: 16,
    borderRadius: 6
  },
  button: {
    height: 52,
    width: 52,
    marginLeft: 8,
    backgroundColor: "#1e6f9f",
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 28,
    color: 'white',
  }
})
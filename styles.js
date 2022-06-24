import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#29b6f6',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-75
  },
  imageContainer: {
    flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgreen',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    color: '#29b6f6',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
})

export default styles

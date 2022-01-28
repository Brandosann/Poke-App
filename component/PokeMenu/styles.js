import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  PokeContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;

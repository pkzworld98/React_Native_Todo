import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: '700',
    fontSize: 60,
    color: 'white',
    marginTop: 80,
    letterSpacing: 3,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default style;

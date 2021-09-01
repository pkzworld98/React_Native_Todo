import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  message: {
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 10,
    paddingTop: 10,
    fontWeight: '900',

    color: 'white',

    width: '80%',
  },
  checkBox: {
    alignSelf: 'center',
  },
  completedTask: {
    color: 'white',
    letterSpacing: 1,
    fontSize: 15,
  },
  uncompletedTask: {
    color: 'white',
    textDecorationLine: 'line-through',
    textDecorationColor: 'black',
    letterSpacing: 1,
    fontSize: 15,
  },
});

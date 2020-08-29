import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 60,
    fontFamily: 'BalooDa2-Bold',
  },
  signIn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 20,
  },
  signInTextSpan: {
    color: '#00AEF9',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;

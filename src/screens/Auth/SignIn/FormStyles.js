import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 30,
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 60,
    fontFamily: 'BalooDa2-Bold',
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
  },
  submitError: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;

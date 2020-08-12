import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 40,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  desc: {
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: COLORS.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;

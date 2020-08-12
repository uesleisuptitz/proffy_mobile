import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  white: {},
  title: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
    color: 'white',
  },
  subtitle: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  button: {
    height: 130,
    width: '48%',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: COLORS.secondary,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  totalConnections: {
    marginTop: 20,
    color: COLORS.primaryOpacity,
  },
});

export default styles;

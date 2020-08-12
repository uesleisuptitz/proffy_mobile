import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: COLORS.primary,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 20,
  },
});

export default styles;

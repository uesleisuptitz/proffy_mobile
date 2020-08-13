import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grayLight,
  },
  scroll: {
    marginTop: -20,
    paddingHorizontal: 20,
  },
  searchForm: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.primaryOpacity,
  },
  input: {
    height: 54,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  filter: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    backgroundColor: COLORS.secondary,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;

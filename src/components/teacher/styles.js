import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  name: {
    color: COLORS.grayActive,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subject: {
    color: COLORS.primarySubject,
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.primarySubject,
  },
  footer: {
    backgroundColor: COLORS.grayOpacity,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    color: COLORS.primarySubject,
    fontSize: 14,
  },
  priceValue: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  contactButton: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  favorited: {
    backgroundColor: COLORS.red,
  },
});

export default styles;

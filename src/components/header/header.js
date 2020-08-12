import React from 'react';
import {View, Text, Image} from 'react-native';
import s from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import {ICONS, IMAGES} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const {navigate} = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.topBar}>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={ICONS.back} resizeMode="contain" />
        </BorderlessButton>
        <Image source={IMAGES.logo} resizeMode="contain" />
      </View>
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

export default Header;

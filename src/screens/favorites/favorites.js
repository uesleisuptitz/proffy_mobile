import React from 'react';
import {View, Text} from 'react-native';
import s from './styles';
import {Header} from '../../components';

const Favorites = () => {
  return (
    <View style={s.container}>
      <Header title={'Meus Proffys favoritos'} />

      <Text>Tudo bem</Text>
    </View>
  );
};

export default Favorites;

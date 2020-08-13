import React from 'react';
import {View, ScrollView} from 'react-native';
import s from './styles';
import {Header, Teacher} from '../../components';

const Favorites = () => {
  return (
    <View style={s.container}>
      <ScrollView>
        <Header title={'Meus Proffys favoritos'} />
        <View style={s.scroll}>{/* <Teacher />
        <Teacher /> */}</View>
      </ScrollView>
    </View>
  );
};

export default Favorites;

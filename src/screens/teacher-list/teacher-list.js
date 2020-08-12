import React from 'react';
import {View, Text} from 'react-native';
import s from './styles';
import {Header} from '../../components';

const TeacherList = () => {
  return (
    <View style={s.container}>
      <Header title={'Proffys disponíveis'} />
      <Text>Tudo bem</Text>
    </View>
  );
};

export default TeacherList;

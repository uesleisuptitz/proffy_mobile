import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import s from './styles';
import {IMAGES} from '../../assets';
import {RectButton} from 'react-native-gesture-handler';

const GiveClasses = ({navigation}) => {
  return (
    <View style={s.container}>
      <ImageBackground
        source={IMAGES.giveClassesBackground}
        style={s.bg}
        resizeMode="contain">
        <Text style={s.title}>Quer ser um Proffy?</Text>
        <Text style={s.desc}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton style={s.okButton} onPress={() => navigation.goBack()}>
        <Text style={s.okText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;

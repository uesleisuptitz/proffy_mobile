import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import s from './styles';
import {IMAGES, ICONS} from '../../assets';
import {RectButton} from 'react-native-gesture-handler';
import {api} from '../../services';

const Landing = ({navigation}) => {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(({data}) => setConnections(data.total));
  }, [navigation]);

  return (
    <View style={s.container}>
      <Image source={IMAGES.landing} style={s.banner} />
      <Text style={s.title}>
        Seja bem vindo(a), {'\n'}
        <Text style={s.subtitle}>O que deseja fazer?</Text>
      </Text>
      <View style={s.buttonsContainer}>
        <RectButton
          style={s.button}
          onPress={() => navigation.navigate('Study')}>
          <Image source={ICONS.study} />
          <Text style={s.textButton}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[s.button, s.buttonPrimary]}
          onPress={() => navigation.navigate('GiveClasses')}>
          <Image source={ICONS.giveClasses} />
          <Text style={s.textButton}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={[s.totalConnections]}>
        Total de {connections} conexões {'\n'}já realizadas{' '}
        <Image source={ICONS.heart} />
      </Text>
    </View>
  );
};

export default Landing;

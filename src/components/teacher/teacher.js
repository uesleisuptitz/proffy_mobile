import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import s from './styles';
import {RectButton} from 'react-native-gesture-handler';
import {ICONS} from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

const Teacher = ({teacher, favorited}) => {
  const {avatar, bio, cost, name, subject, whatsapp} = teacher;

  const linkWhatsApp = () =>
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);

  const favorite = () => {
    AsyncStorage.getItem('favorites').then((value) => {
      console.log('value', value);
    });
  };

  return (
    <View style={s.container}>
      <View style={s.profile}>
        <Image style={s.avatar} source={{uri: avatar}} />
        <View style={s.profileInfo}>
          <Text style={s.name}>{name}</Text>
          <Text style={s.subject}>{subject}</Text>
        </View>
      </View>
      <Text style={s.bio}>{bio} </Text>
      <View style={s.footer}>
        <Text style={s.price}>
          {'Preço/hora '}
          <Text style={s.priceValue}>R${cost},00</Text>
        </Text>
        <View style={s.buttonsContainer}>
          <RectButton
            style={[s.favoriteButton, s.favorited]}
            onPress={favorite}>
            {/* <Image source={ICONS.heartOutline} /> */}
            <Image source={ICONS.unfavorite} />
          </RectButton>
          <RectButton style={s.contactButton} onPress={linkWhatsApp}>
            <Image source={ICONS.whatsapp} />
            <Text style={s.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default Teacher;

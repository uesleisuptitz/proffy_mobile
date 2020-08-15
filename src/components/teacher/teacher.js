import React, {useState} from 'react';
import {View, Text, Image, Linking} from 'react-native';
import s from './styles';
import {RectButton} from 'react-native-gesture-handler';
import {ICONS} from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import {api} from '../../services';

const Teacher = ({teacher, favorited}) => {
  const {avatar, bio, cost, name, subject, whatsapp, id} = teacher;

  const [Favorited, setFavorited] = useState(favorited);

  const linkWhatsApp = () => {
    api.post(`connections`, {user_id: id});
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  };

  const favorite = async () => {
    let favoriteds = [];
    await AsyncStorage.getItem('favorites').then((resp) => {
      if (resp) favoriteds = [...JSON.parse(resp)];
    });
    if (Favorited) {
      let favIndex = favoriteds.findIndex((fav) => fav.id === id);
      favoriteds.splice(favIndex, 1);
      setFavorited(false);
    } else {
      favoriteds.push(teacher);
      setFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoriteds));
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
            style={[s.favoriteButton, Favorited ? s.favorited : null]}
            onPress={favorite}>
            {Favorited ? (
              <Image source={ICONS.unfavorite} />
            ) : (
              <Image source={ICONS.heartOutline} />
            )}
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

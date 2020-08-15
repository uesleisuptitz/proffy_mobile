import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import s from './styles';
import {Header, Teacher} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then((value) => {
      if (value !== null) setFavorites(JSON.parse(value).map((v) => v));
    });
  }, []);

  return (
    <View style={s.container}>
      <ScrollView>
        <Header title={'Meus Proffys favoritos'} />
        <View style={s.scroll}>
          {favorites.map((p) => (
            <Teacher teacher={p} key={p.id + '-favoritos'} favorited={true} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorites;

import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import s from './styles';
import {Header, Teacher} from '../../components';
import {ICONS} from '../../assets';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {api} from '../../services';

const TeacherList = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [subject, setSubject] = useState(false);
  const [week_day, setWeek_day] = useState(false);
  const [time, setTime] = useState(false);
  const [proffys, setProffys] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then((value) => {
      if (value !== null) setFavorites(JSON.parse(value.map((v) => v.id)));
    });
  }, []);

  const filterSubmit = async () => {
    let params = {
      subject: subject.trim(),
      week_day: Number(week_day),
      time,
    };
    await api
      .get('/classes', {params})
      .then(({data}) => {
        setShowFilters(false);
        setProffys(data);
      })
      .catch(() => alert('Ocorreu um erro ao filtrar!'));
  };
  return (
    <View style={s.container}>
      <ScrollView>
        <Header
          title={'Proffys disponíveis'}
          right={
            <BorderlessButton
              onPress={() => setShowFilters(!showFilters)}
              style={s.filter}>
              <Image source={ICONS.filter} />
            </BorderlessButton>
          }>
          {showFilters && (
            <View style={s.searchForm}>
              <Text style={s.label}>Matéria</Text>
              <TextInput
                style={s.input}
                placeholder="Qual a matéria?"
                value={subject || ''}
                onChangeText={(v) => setSubject(v)}
              />
              <View style={s.inputGroup}>
                <View style={s.inputBlock}>
                  <Text style={s.label}>Dia da semana</Text>
                  <TextInput
                    style={s.input}
                    placeholder="Qual o dia?"
                    value={week_day || ''}
                    onChangeText={(v) => setWeek_day(v)}
                  />
                </View>
                <View style={s.inputBlock}>
                  <Text style={s.label}>Horário</Text>
                  <TextInput
                    style={s.input}
                    placeholder="Qual horário?"
                    value={time || ''}
                    onChangeText={(v) => setTime(v)}
                  />
                </View>
              </View>
              <RectButton style={s.submit} onPress={filterSubmit}>
                <Text style={s.submitText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </Header>
        <View style={s.scroll}>
          {proffys.map((p) => (
            <Teacher
              teacher={p}
              key={p.id}
              favorited={favorites.includes(p.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherList;

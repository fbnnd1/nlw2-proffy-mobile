import React, { useState } from 'react';
import { View,  Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import api from '../../services/api'
import styles from './styles';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(
            response => {
                if (response) {
                    const favoritedTeachers = JSON.parse(response);
                    const favoritedTeachersIds = favoritedTeachers.map(
                        (teacher:Teacher) => { return teacher.id; }
                    );
                    setFavorites(favoritedTeachersIds);
                }
            }
        )
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    const [isFiltersVisible, setIsFiltersVisible ] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {

        /*Correção temporária para dia da semana*/
        let week_day_value_submit = parseInt(week_day.trim());

        if (["0","1","2","3","4","5","6"].indexOf(week_day.trim())  == -1) {
        
            const arr_week_day = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    
            const week_day_value = week_day.trim().toLowerCase().replace("-feira", "");
    
            week_day_value_submit = arr_week_day.indexOf(week_day_value);
        }
        /*Fim correção*/
        
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: week_day_value_submit,
                time,
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >

                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput style={styles.input} placeholder="Qual a matéria?" placeholderTextColor="#c1bccc"  value={subject} onChangeText={text => setSubject(text)} />
               

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc" value={week_day} onChangeText={text => setWeekDay(text)} />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>horário</Text>
                            <TextInput style={styles.input} placeholder="Qual o horário?" placeholderTextColor="#c1bccc" value={time} onChangeText={text => setTime(text)} />
                        </View>

                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>Pesquisar</Text>

                    </RectButton>
                </View>
                )}
                
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={
                    {
                        paddingHorizontal: 16,
                        paddingBottom: 16, 
                    }
                }    
            >
                {teachers.map((teacher:Teacher) => 
                {
                    return (<TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />);
                }

                )}

            </ScrollView>

        </View>
    );
}

export default TeacherList;
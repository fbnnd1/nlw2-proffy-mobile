import React, {useState, useEffect} from 'react';
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(
            response => {
                if (response) {
                    const favoritedTeachers = JSON.parse(response);
                    setFavorites(favoritedTeachers);
                }
            }
        )
    }

    /* Erro -> Loop infinito
    useFocusEffect(() => {
        loadFavorites();
    });
    */

   useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={
                    {
                        paddingHorizontal: 16,
                        paddingBottom: 16, 
                    }
                }    
            >

                {favorites.map((teacher:Teacher) => 
                {
                    return (<TeacherItem key={teacher.id} teacher={teacher} favorited={true} />);
                }

                )}

                
            </ScrollView>

        </View>
    );
}

export default Favorites;
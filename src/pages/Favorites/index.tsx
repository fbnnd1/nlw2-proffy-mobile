import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys disponíveis"/>
        </View>
    );
}

export default TeacherList;
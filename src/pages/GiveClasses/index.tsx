import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

function Landing() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={giveClassesBgImage} 
                style={styles.content}
                resizeMode="contain"
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para comneçar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>

            </RectButton>
        </View>
    );

 }

 export default GiveClasses;
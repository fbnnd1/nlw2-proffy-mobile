import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,

    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold : {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecundary: {
        backgroundColor: '#34D361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color:'#FFF',
        fontSize: 20,
    },

    connections : {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 148,
        marginTop: 48
    }

});

export default styles;
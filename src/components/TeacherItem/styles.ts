import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
 
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },

    profileInfo:{
        marginLeft: 16
    },

   name : {
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 20
   },

   subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4
   },

    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
        lineHeight: 24,  
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },
    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },
    buttonsContainer : {
        flexDirection: 'row',
        marginTop: 16
    },

    favoriteButton: {
        backgroundColor:'#8257e5',
        width: 56,
        height: 56,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited: {
        backgroundColor:'#e33d3d',
    }, 

    contactButton: {
        backgroundColor:'#04d361',
        flex: 1,
        flexDirection: 'row',
        height: 56,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,
        marginLeft: 16,
    },

 



});

export default styles;
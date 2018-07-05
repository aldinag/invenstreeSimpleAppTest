import {
    StyleSheet,
    Platform,
} from 'react-native';
import Colors from '../../app/color';
export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: Colors.white.absolut,
    },
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    image: {
      flex: 0,
      width: 300,
      height: 80,
      marginBottom: 45
    },
    textButton: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: Colors.white.absolut,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row'
    },
    button: {
      width: 150,
      height: 45,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      borderColor: Colors.black.absolut,
      backgroundColor: Colors.gradient.peachy,
    },
    buttonLeft: {
      backgroundColor: Colors.blue.ribbon,
    },
});
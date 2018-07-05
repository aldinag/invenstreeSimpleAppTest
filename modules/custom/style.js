import {
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';
import Colors from '../../app/color';
export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: Colors.white.absolut,
    },
    contentContainer: {
      flex: 1,
      paddingTop: 55,
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerFlatlistContent: {
        paddingHorizontal: 20,
        marginBottom: 50,
    },
    containerNavBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
    },
    navBottomContainer: {
        width: Dimensions.get('window').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.white.absolut,
    },
    navBottomActive: {
        backgroundColor: Colors.blue.ribbon,
    },
});
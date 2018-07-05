import {
    StyleSheet,
    Platform,
} from 'react-native';
import Colors from '../../app/color';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
	container: {
        paddingHorizontal: 2,
        flex: 0,
		flexDirection: 'row',
		width: Dimensions.get('window').width,
		paddingVertical: 8,
		minHeight: 36,
		paddingLeft: 9,
        paddingRight: 9,
        position: 'absolute',
        zIndex: 1,
        top: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.black.shadow,
        backgroundColor: Colors.white.dim,
	},
	buttonContainerLeft: {
		height: 36,
		minWidth: 36,
        marginRight: 9,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
	},
	buttonContainerRight: {
		height: 36,
		minWidth: 36,
        marginLeft: 8,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
	},
	bgAnimation: {
		backgroundColor: Colors.white.absolut,
		flex: 0,
		overflow: 'hidden',
		height: 32,
	},
	title: {
        paddingVertical: 9,
        justifyContent: 'center',
        alignItems: 'center',
	},
	titleText: {
        fontSize: 12,
		textAlign:'center',
    },
    textMidle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
	leftWrapper: {
        flex: 0,
	},
	rightWrapper: {
        flex: 0,
	},
	textButton: {
		textAlign: 'left',
		paddingHorizontal: 6,
		color: Colors.grey.storm,
	},
	textActive: {
		color: Colors.red.coral,
	},
	icon: {
		// color: Colors.grey.haze,
	},
	greyText: {
		color: Colors.grey.haze,
		fontSize: 12,
		lineHeight: 20,
	},
	containerIcon: {
		width: 36,
		height: 36,
		borderRadius: 18,
	},
	bagText: {
		marginTop: 5,
		fontSize: 10,
		lineHeight: 16,
	},
	backgroundRose: {
		backgroundColor: Colors.red.rose,
	},
	backgroundBright: {
		backgroundColor: Colors.grey.titanium,
	},
	colorWhite: {
		color: Colors.white.absolut,
	},
	colorBright: {
		color: Colors.grey.titanium,
	},
	button: {
		marginRight: 0,
	},
});

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Platform,
    ActivityIndicator,
} from 'react-native';

import Styles from './style';

export default class HeaderComponent extends Component {

    static defaultProps = {
		title: 'JANCUK',
		leftActions: [{
            text: ' '
        }],
		rightActions: [{
            text: ' '
        }],
	}

    render() {
      console.log(this.props);
      
      return (
        <View unflex centering style={Styles.container}>
            <View unflex style={Styles.leftWrapper}>
					{ this.props.leftActions.map((action, index) => {
                        console.log(action);
                        
						return (
							<TouchableOpacity
								enlargeHitSlop
								key={ index }
								style={Styles.buttonContainerLeft}
								onPress={ action.onPress }>
								<Text
                                    numberOfLines={1}
                                    style={[Styles.titleText, this.props.styleMiddle]}>
                                    { action.text && action.text.toUpperCase() || ' ' }
                                </Text>
							</TouchableOpacity>
						)
					}) }
				</View>
				<View style={Styles.title}>
					<Text
						numberOfLines={1}
						style={[Styles.titleText, Styles.textMidle]}>
						{ this.props.title && this.props.title.toUpperCase() || ' ' }
					</Text>
				</View>
				<View key={this.props.rightActions} style={Styles.rightWrapper}>
					{ this.props.rightActions.map((action, index) => {
						return (
							<TouchableOpacity
								enlargeHitSlop
								key={ index }
								style={Styles.buttonContainerRight}
								onPress={ action.onPress }>
								<Text
                                    numberOfLines={1}
                                    style={[Styles.titleText, this.props.styleMiddle]}>
                                    { action.text && action.text.toUpperCase() || ' ' }
                                </Text>
							</TouchableOpacity>
						)
					}) }
				</View>
        </View>
      );
    }
  }
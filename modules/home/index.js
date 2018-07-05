import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
    StyleSheet,
    Platform,
    ActivityIndicator,
} from 'react-native';

import {
  iconLogo,
} from '../../assets/images';

import Styles from './style';
import Header from '../header';

const mapStateToProps = (state) => ({
  ...state
});

const home = class HomePage extends Component {

  constructor(props){
    super(props)
  }
    render() {
      return (
        <View style={Styles.container}>
          <View style={Styles.contentContainer}>
            <Image source={iconLogo} style={Styles.image}/>
              <TouchableOpacity
                style={Styles.button}
                onPress={this.props.navigation.navigate.bind(this, 'User', {
                  type: 'modal',
                })}
              >
                <Text style={Styles.textButton}>USERS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.button, Styles.buttonLeft]}
                onPress={this.props.navigation.navigate.bind(this, 'Custom')}
              >
                <Text style={Styles.textButton}>CUSTOME</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

export default connect(mapStateToProps)(home);
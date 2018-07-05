import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import {
    iconLogo,
} from '../../assets/images';
import * as Actions from '../../app/action';

import Styles from './style';
import Header from '../header';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    writeUsername: (users) => dispatch({
        type: Actions.WRITE_USERNAME,
        payload: users
    }),
});


const user = class UserPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: props.users.users,
            activeIndex: 0,
            isLoading: true,
        }
    }

    componentWillMount() {
        if(this.state.users.length) {
            this.setState({
                isLoading: false,
            })
        } else {
            fetch('https://asia-northeast1-miniserver-208702.cloudfunctions.net/api')
                .then(response => {
                    if(response.status === 200) {
                        response.json().then(res => {
                            const users = res.map((user) => {
                                let status = ''
                                if(user.age >= 15 && user.age < 25) {
                                    status = 'MENCARI ILMU'
                                } else if (user.age >= 25 && user.age < 35) {
                                    status = 'MENCARI PENGALAMAN'
                                } else {
                                    status = 'BERPENGALAMAN'
                                }
                                return {
                                    id: user._id,
                                    name: user.name,
                                    age: user.age,
                                    status,
                                }
                            })
                            this.props.writeUsername(users)
                            // dispatch({
                            //     type: Actions.WRITE_USERNAME,
                            //     payload: users,
                            // })
                            this.setState({
                                isLoading: false,
                                users: users,
                            })
                        })
                    }
                })
        }
    }

    _onPressNavBar(index) {
        this.setState({
            activeIndex: index,
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <Header
                    title="Users"
                    leftActions={[{
                        text: 'BACK',
                        onPress: () => {this.props.navigation.goBack()}
                    }]}
                />
                {this.state.isLoading ? (
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <ActivityIndicator/>
                    </View>
                ) : (
                    <View style={Styles.contentContainer}>
                        <FlatList
                            contentContainerStyle= {Styles.containerFlatlistContent}
                            data={this.state.users.filter((item) => {
                                if(this.state.activeIndex === 1) {
                                    return item.status === 'MENCARI ILMU'
                                } else if(this.state.activeIndex === 2) {
                                    return item.status === 'MENCARI PENGALAMAN'
                                } else if(this.state.activeIndex === 3) {
                                    return item.status === 'BERPENGALAMAN'
                                } else {
                                    return true
                                }
                            })}
                            extraData={this.state}
                            removeClippedSubviews={false}
                            keyExtractor={(item, index) => item.name}
                            renderItem={({item, index}) => {
                                return (
                                    <View key={index} style={Styles.containerCard}>
                                        <Image source={iconLogo} style={{width: 80, height: 20, marginRight: 15}}/>
                                        <View style={{flex: 1}}>
                                            <Text numberOfLines={1} ellipsizeMode={'tail'}>Name : <Text>{item.name}</Text></Text>
                                            <Text>Age : <Text>{item.age}</Text></Text>
                                            <Text>Status : <Text>{item.status}</Text></Text>
                                        </View>
                                    </View>
                                )  
                            }}
                        />
                        <View style={{flex: 0}}>
                            <FlatList
                                contentContainerStyle= {Styles.containerNavBottom}
                                data={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}
                                keyExtractor={(item, index) => index}
                                renderItem={(data) => {
                                    return (
                                        <TouchableOpacity
                                            key={data.index}
                                            style={[Styles.navBottomContainer, this.state.activeIndex === data.index && Styles.navBottomActive]}
                                            onPress={this._onPressNavBar.bind(this, data.index)}
                                        >
                                            <Text style={{textAlign:'center'}}>{data.item}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                )}
                
            </View>
        );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(user);
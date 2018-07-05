import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    Alert,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
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


const custom = class custom extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: props.users.users,
            activeIndex: 0,
            isLoading: true,
            results: [],
            isEnd: false
        }
    }

    componentWillMount() {

    }

    _search(count = 10) {
        const term = this.state.text.split(' ').join('+')
        console.log(count);
        
        fetch(`https://itunes.apple.com/search?term=${term}&country=ID&limit=${count}&media=software`)
            .then(response => {
                if(response.status === 200) {
                    response.json().then(res => {
                        const results = res.results.map((item) => {
                            return {
                                image: item.screenshotUrls[0],
                                title: item.trackName,
                                studio: item.artistName,
                                genre: item.primaryGenreName,
                                rating: item.averageUserRating,
                                description: item.description,
                            }
                        })
                        console.log(res);
                        this.setState({
                            isLoading: false,
                            results: results,
                            isLoadingNext: false,
                            isEnd: count > res.resultCount,
                        })
                    })
                }
            })
    }

    _showDetail(index) {
        const desc = this.state.results[index].description
        Alert.alert(
            'Description',
            desc,
            [{
                text: 'OK'
            }]
          )
    }

    render() {
        return (
            <View style={Styles.container}>
                <Header
                    title="Custom"
                    leftActions={[{
                        text: 'BACK',
                        onPress: () => {this.props.navigation.goBack()}
                    }]}
                />
                    <View style={Styles.contentContainer}>
                        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                            <TextInput
                                style={{height: 40, width: 310, marginRight: 5, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="write the keywords..."
                                value={this.state.text}
                            />
                            <TouchableOpacity
                                onPress={this._search.bind(this, 10)}
                                style={{backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}
                            >
                                <Text style={{color: 'white', fontSize: 20}}>GO</Text>
                            </TouchableOpacity>
                        </View>
                        {this.state.results.length ? (
                            <FlatList
                                contentContainerStyle= {Styles.containerFlatlistContent}
                                data={this.state.results}
                                extraData={this.state}
                                removeClippedSubviews={false}
                                onEndReached={(length) => {
                                    if(!this.state.isLoadingNext && !this.state.isEnd) {
                                        this.setState({
                                            isLoadingNext: true
                                        }, () => {
                                            this._search(this.state.results.length + 10)
                                        })
                                    }
                                }}
                                ListFooterComponent={this.state.isLoadingNext ? (
                                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", height: 60}}>
                                        <ActivityIndicator/>
                                    </View>
                                ) : false}
                                keyExtractor={(item, index) => item.title}
                                renderItem={({item, index}) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={this._showDetail.bind(this, index)}
                                            style={Styles.containerCard}>
                                            <Image source={{uri: item.image}} style={{width: 80, height: 80, marginRight: 15}}/>
                                            <View style={{flex: 1}}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize: 14, fontWeight: 'bold'}}>{item.title} - {item.genre}</Text>
                                                <Text style={{fontSize: 10}}>{item.rating}/5</Text>
                                                <Text>{item.studio}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )  
                                }}
                        />
                        ) : (
                            <View style={{paddingTop: 120, flex: 1, paddingHorizontal: 20,}}>
                                <Text style={{textAlign: 'left', fontSize: 36, color: 'blue', marginBottom: 5}}>OOOPsss...</Text>
                                <Text>{`It's empty,\nplease use different keywords`}</Text>
                                <Text style={{fontSize: 10, marginTop: 25, color: 'grey'}}>This results will show you top 20 softwares in Apple Store</Text>
                            </View>
                        )}
                        
                        
                    </View>
                )}
                
            </View>
        );
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(custom);
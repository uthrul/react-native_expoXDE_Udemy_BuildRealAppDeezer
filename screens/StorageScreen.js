import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

export default class StorageScreen extends React.Component {
    static navigationOptions = {
        title: 'Storage',
    };

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    async storeData() {
        const data = {
            value: 'Some Testing Data!'
        }
        const value = await actions.storeData('someKey', data);
        if (value) {
        }
    }

    async retreiveData() {
        this.setState({
            value: ''
        });
        const data = await actions.retrieveData('someKey');
        if (data) {
            this.setState({
                value: data.value
            })
        }
    }

    async removeData() {
        const success = await actions.clearStorage();
        if (success) {
            this.setState({value: ''})
        }
    }

  render() {
    const {value} = this.state;

    return (
        <ScrollView style={styles.container}>
            <Text>I am a Storage Screen!!!!</Text>

            <Button title='store data!' onPress={ () => { this.storeData() }} />
            <Button title='retreive data!' onPress={ () => { this.retreiveData() }} />
            <Button title='remove data!' onPress={ () => { this.removeData() }} />

            <Text>{value}</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

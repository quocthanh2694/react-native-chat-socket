import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import io from "socket.io-client/dist/socket.io.js";

var e;
export class App extends Component {
    constructor(props) {
        super(props);
        e = this;
        this.socket = io("http://10.88.111.28:3000", { jsonp: false });
        this.state = {
            background: 'green',
            text: ''
        };
        this.socket.on("server-send-bgcolor", function(data) {
            e.setState({
                background : data
            });
        });
    }

    clickme() {
        this.socket.emit("client-send-bgcolor", this.state.text);
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 50, backgroundColor: this.state.background }}>
                <Text>Socket IO</Text>
                <TextInput
                    style={{ height: 40, padding: 5, borderColor: 'white', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    />
                <TouchableOpacity
                    style={{ height: 30 }}
                    onPress={() => this.clickme()}
                    >
                    <Text>Change color bg</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
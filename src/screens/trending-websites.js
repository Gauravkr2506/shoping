import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, TouchableNativeFeedback, Image } from "react-native";
import { websites } from "./../data/websites.js";

export default class Main extends React.Component {
	_renderItem = ({ item }) => <MyListItem item={item} navigation={this.props.navigation} />;
	render() {
		return (
			
				<View style={{backgroundColor: "#efefef" }}>
					<FlatList  data={websites} renderItem={this._renderItem} contentContainerStyle={{flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10,flexWrap:"wrap" }} />
				</View>
			
		);
	}
}

export class MyListItem extends Component {
	showWebPage(url, name) {
		this.props.navigation.navigate("WebViewScreen", { url: url, name: name });
	}
	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.showWebPage(this.props.item.url, this.props.item.title)} style={{ flex: 1}}>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin:10 }}>
					<View style={{ borderWidth: 2, backgroundColor: "white", borderColor: "#CC2B37", width: 150, height: 64, alignItems: "center", justifyContent: "center" }}>
						<Image source={this.props.item.image} resizeMode="center" style={{ width: 106, height: 60 }} />
					</View>
					<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "#CC2B37", width: 150, alignItems: "center", justifyContent: "center" }}>
						<Text numberOfLines={1}>{this.props.item.title}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

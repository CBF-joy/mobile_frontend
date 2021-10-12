import * as React from 'react';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delay_splash() {
	await SplashScreen.preventAutoHideAsync();
	await sleep(3000);
	await SplashScreen.hideAsync();
}

export default class App extends React.Component {
	state = {
		isLoading: true,
	};

	componentDidMount = async () => {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 3000);
	};
	
	render() {
		if (this.state.isLoading) {
			return (
				<ImageBackground
					source={require('./assets/splash.png')}
					style={{ width: '100%', height: '100%' }}
				></ImageBackground>
			);
		} else {
			return (
				<WebView
					source={{ uri: 'http://34.122.110.59:3000/' }}
					style={{ marginTop: 30 }}
				/>
			);
		}
	}
}
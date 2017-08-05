import React,{Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { Router,Scene} from 'react-native-router-flux'
import store from "./src/store";
import TabsComponent from './src/components/TabsComponent';
import ChatComponent from './src/components/ChatComponent';
import OtherProfileComponent from './src/components/OtherProfileComponent';
import AuthComponent from './src/components/AuthComponent';

import GroupChatBoxComponent from './src/components/chats/GroupChatBoxComponent';
import ChatBoxComponent from './src/components/chats/ChatBoxComponent';
import RevealedChatBoxComponent from './src/components/chats/RevealedChatBoxComponent';

import SearchPostsComponent from './src/components/search/SearchPostsComponent';
import SearchProfileComponent from './src/components/search/SearchProfileComponent';
import SearchGroupComponent from './src/components/search/SearchGroupComponent';
import CreatePostComponent from './src/components/search/CreatePostComponent';
import CreateGroupChatComponent from './src/components/search/CreateGroupChatComponent';

import LogoComponent from './src/components/LogoComponent';

export default class App extends Component {
	render=()=>{
		return (
			<Provider store={store}>
        <Router >
          
          <Scene key='root' style={styles.container}>
            
            <Scene key='logo' component={LogoComponent}/>
            <Scene key='auth' component={AuthComponent}/>
            
            <Scene key='tabs' component={TabsComponent} hideNavBar ={true}  />
            
            <Scene key='profile' component={OtherProfileComponent}  />
            
            
            <Scene key='searchpost' component={SearchPostsComponent}  />
            <Scene key='searchprofile' component={SearchProfileComponent}  />
            <Scene key='searchgroup' component={SearchGroupComponent}  />
            
            <Scene key='createpost' component={CreatePostComponent}  />
            <Scene key='creategroupchat' component={CreateGroupChatComponent}  />

            <Scene key='groupchat' component={GroupChatBoxComponent}  />
            <Scene key='allchat' component={ChatBoxComponent}  />
            <Scene key='revealedchat' component={RevealedChatBoxComponent}  />
            {/*
            <Scene key='post' component={PostComponent}  />
            
            
            
            */}
            
          </Scene>
        </Router>
        
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20
	},
});

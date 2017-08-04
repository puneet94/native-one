import React,{Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { Router,Scene} from 'react-native-router-flux'
import store from "./src/store";
import TabsComponent from './src/components/TabsComponent';
import ChatComponent from './src/components/ChatComponent';
import OtherProfileComponent from './src/components/OtherProfileComponent';
import AuthComponent from './src/components/AuthComponent';
import SearchPostsComponent from './src/components/SearchPostsComponent';
import SearchProfileComponent from './src/components/SearchProfileComponent';
import SearchGroupComponent from './src/components/SearchGroupComponent';
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
            <Scene key='chat' component={ChatComponent}  />
            <Scene key='searchpost' component={SearchPostsComponent}  />
            <Scene key='searchprofile' component={SearchProfileComponent}  />
            <Scene key='searchgroup' component={SearchGroupComponent}  />
            
            {/*
            <Scene key='post' component={PostComponent}  />
            <Scene key='createpost' component={CreatePostComponent}  />
            <Scene key='groupchat' component={GroupChatComponent}  />
            <Scene key='creategroupchat' component={CreateGroupChatComponent}  />
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

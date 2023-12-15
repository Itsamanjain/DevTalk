import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StoryList from "./components/StoryList";
import ChatList from "./components/ChatList";

export default function App() {
  return (
    <SafeAreaView style={styles.App} >
      <ScrollView>
        <View>
          <Navbar />
          <SearchBar />
          <StoryList />
          <ChatList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  App:{
    backgroundColor:'#1a2828',
  }
});


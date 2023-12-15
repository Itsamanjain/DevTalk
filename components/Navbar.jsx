import { SafeAreaView, StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.Navbar}>
        <Image 
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png'}}
        style={styles.logo}/>
        <Text style={styles.HeadingText}>DevTalk</Text>
        <Text style={styles.threedot}>⋮</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
    Navbar:{
        marginTop:40,
        margin:10,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor:'#1a2828',
        height:70,
        borderRadius:10,
    },
    logo:{
        height:40,
        borderRadius:40/2,
        width:40,
    },

    HeadingText:{
        fontSize:22,
        color:'#45CE30',
        fontWeight:'600',
        paddingRight:30,
    },
    threedot:{
        fontSize:22,
        
    }
});

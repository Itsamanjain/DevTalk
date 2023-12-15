import { ScrollView, StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const StoryList = () => {
  return (
    <ScrollView horizontal={true} style={styles.mainStoryBar}>

    <View style={styles.container}>
    <View style={styles.div}>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/112370476?v=4'}} 
    style={styles.storyImg}/>
    <Text>  Aman</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/11613311?v=4'}} 
    style={styles.storyImg}/>
    <Text>  Hitesh</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/122222243?v=4'}} 
    style={styles.storyImg}/>
    <Text>  Neeraj</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/123539815?v=4'}} 
    style={styles.storyImg}/>
    <Text>   Aryan</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/709451?v=4'}} 
    style={styles.storyImg}/>
    <Text>Bun's CEO  </Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/624760?v=4'}} 
    style={styles.storyImg}/>
    <Text>     Eddie</Text>
    </View>
    
    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/112370476?v=4'}} 
    style={styles.storyImg}/>
    <Text>  Aman</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/11613311?v=4'}} 
    style={styles.storyImg}/>
    <Text>  Hitesh</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/122222243?v=4'}} 
    style={styles.storyImg}/>
    <Text> Ezsnippets</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/123539815?v=4'}} 
    style={styles.storyImg}/>
    <Text>   Aryan</Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/709451?v=4'}} 
    style={styles.storyImg}/>
    <Text>Bun's CEO  </Text>
    </View>

    <View>
    <Image
    source={{uri:'https://avatars.githubusercontent.com/u/624760?v=4'}} 
    style={styles.storyImg}/>
    <Text>     Eddie</Text>
    </View>
    </View>
    
    
    </ScrollView>
  )
}

export default StoryList

const styles = StyleSheet.create({
    mainStoryBar:{
        flex:1,
        flexDirection:'row',
        margin:10,
        
    },
    container:{
        flex:1,
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
    },
    div:{
        margin:10,
    },
    storyImg:{
        height:60,
        width:60,
        borderRadius:60/2,
    },
})
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const ChatList = () => {
    const list = [
        {
            uid: 1,
            name: 'Aman Jain',
            status: 'Js is love',
            imgUrl: 'https://avatars.githubusercontent.com/u/112370476?v=4',
        },
        {
            uid: 2,
            name: 'Hitesh Choudhary',
            status: 'Chai Or Code',
            imgUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4', // Example random image URL
        },
        {
            uid: 3,
            name: 'Eddie Jaoude',
            status: 'BioDrop',
            imgUrl: 'https://avatars.githubusercontent.com/u/624760?v=4', // Example random image URL
        },
        {
            uid: 4,
            name: 'Neeraj Walia',
            status: 'Ezsnippets',
            imgUrl: 'https://avatars.githubusercontent.com/u/122222243?v=4', // Example random image URL
        },
        {
            uid: 5,
            name: 'Jarred Sumner',
            status: 'Bun Co-founder',
            imgUrl: 'https://avatars.githubusercontent.com/u/709451?v=4', // Example random image URL
        },
        {
            uid: 6,
            name: 'Aryan Jain',
            status: 'frontend developer',
            imgUrl: 'https://avatars.githubusercontent.com/u/123539815?v=4', // Example random image URL
        },
        {
            uid:7,
            name:'Sharadha Khapra',
            status:'Co-founder Apna College',
            imgUrl:'https://avatars.githubusercontent.com/u/34954810?v=4',
        },
        {
            uid:8,
            name:'Kunal Kushwaha',
            status:'Devrel @civo',
            imgUrl:'https://avatars.githubusercontent.com/u/42698533?v=4',
        },
        {
            uid:9,
            name:'Code With Harry   ',
            status:'Channel-CODE WITH HARRY',
            imgUrl:'https://avatars.githubusercontent.com/u/48705673?v=4',
        },
        {
            uid:10,
            name:'ShadCN',
            status:'Creator of ShadCn ',
            imgUrl:'https://avatars.githubusercontent.com/u/124599?v=4',
        }


    ];

    return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={true} >
            {list.map(({ uid, name, status, imgUrl }) => (
                <View key={uid} style={styles.userCard}>
                    <Image source={{ uri: imgUrl }} style={styles.userImg} />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.useInfo}>{status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 15,
    },
    userImg: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    useInfo: {
        fontSize: 15,
        color: '#303a3a',
        fontWeight: '500',
    },
});

export default ChatList;

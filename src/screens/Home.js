import {SafeAreaView, View, StyleSheet, FlatList, Pressable, TextInput} from 'react-native'
import Text from '../components/text/text'
import React, { useState } from 'react'
import PlanetHeader from '../components/Planet-header'
import {colors} from '../theme/colors'
import {PLANET_LIST} from '../data/planet-list'
import {spacing} from '../theme/spacing'
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const PlanetItem = ({ item }) => {
    const { name, color }=item
    const navigation=useNavigation();
    return (
        <Pressable onPress={() => {navigation.navigate('Details', { planet: item });
    }}
            style={styles.item}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <View
                    style={[
                        styles.circle, {
                            backgroundColor: color
                        }
                    ]}></View>
                <Text style={styles.itemName} preset='h3'>{name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white"/>
        </Pressable>
    )
}

export default function Home({navigation}) {
    const [list, setList] =useState(PLANET_LIST);
    const renderItem = ({item}) => {
        return (<PlanetItem item={item} />
        );
    }
    const searchFilter =(text)=>{
        const filteredList=PLANET_LIST.filter(item =>{
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })
        setList(filteredList);
        console.log("filteredList -->", filteredList);
    }
    return (
        <SafeAreaView style={styles.safearea}>
            <PlanetHeader backBtn={false}/>
            <TextInput
             placeholder='Tpye the planet name'
             placeholderTextColor={colors.white}
             autoCorrect={false}
             style={styles.searchInput}
             onChangeText={(text)=> searchFilter(text)}
             />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>
                }
            />
        </SafeAreaView>
    )
}













const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.black
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[3],
        justifyContent: "space-between"
    },
    circle: {
        top: spacing[1],
        width: 30,
        height: 30,
        borderRadius: 30
    },
    itemName: {
        textTransform: 'uppercase',
        left: spacing[4]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5,
        padding: spacing[1]

    },
    list: {
        padding: spacing[6]
    },
    searchInput: {
        padding:spacing[4],
        color:colors.white,
        borderBottomColor:colors.white,
        borderBottomWidth:1,
        margin:spacing[5],
        fontSize:18
    }
})
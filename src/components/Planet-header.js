import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({backBtn, title='THE PLANETS'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable onPress={()=>{navigation.goBack()}}><AntDesign name="left" size={30} color="white" style={{marginRight:spacing[5]}} /></Pressable>

      )}
      <Text preset='h1'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:spacing[5],
        marginTop:spacing[8],
        borderBottomWidth:0.2,
        borderBottomColor:colors.white,
        flexDirection:'row',
        alignItems:'center',
    }
})
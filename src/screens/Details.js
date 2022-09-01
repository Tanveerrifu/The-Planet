import { View, StyleSheet, ScrollView, Pressable, Linking} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/Planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { processFontFamily } from 'expo-font'


const PlanetSection=({title, value})=>{
  return (
    <View style={styles.planetSection}>
      <Text  style={{ textTransform:'uppercase' }}>
        {title}
      </Text>
      <Text preset='h2'>
        {value}
      </Text>
    </View>
  )
}

export default function Details({ navigation, route }) {
  const {planet}=route.params;
  const  { name, description, rotationTime,revolutionTime, radius, avgTemp, wikiLink } = planet
  // console.log("PLANET-->",planet);
  
  const renderImage=()=>{
    switch(name){
        case 'mercury':
        return <MercurySvg />;
        case 'earth':
        return <EarthSvg />;
        case 'jupiter':
        return <JupiterSvg />;
        case 'mars':
        return <MarsSvg />;
        case 'neptune':
        return <NeptuneSvg />;
        case 'saturn':
        return <SaturnSvg />;
        case 'uranus':
        return <UranusSvg />;
        case 'venus':
        return <VenusSvg />;
    }
  }

  const onPressLink=()=>{
    Linking.openURL(wikiLink);
  }

  return (
    <View style={styles.container}>
      <PlanetHeader backBtn= {true} />
      <ScrollView>
        <View style={styles.imageView}>
            {renderImage(name)}
        </View>
        <View style={styles.detailsView}> 
          <Text style={styles.name} preset='h3'>{name}</Text>
        </View>
        <View style={styles.detailsView}> 
          <Text style={styles.description} >{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text  style={styles.wikipedia}>Wikipedia</Text>
          </Pressable>
        </View>
        <View style={{ height:40 }} />
        <PlanetSection title='ROTATION TIME'  value={rotationTime}/>
        <PlanetSection title='REVOLUTION TIME' value={revolutionTime} />
        <PlanetSection title='RADIUS' value={radius}/>
        <PlanetSection title='AVERAGE TEMP.' value={avgTemp}/>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,  
    },
    imageView: {
      padding:spacing[5],
      alignItems:'center',
      justifyContent:'center',
      
    },
    detailsView:{
      marginTop:spacing[8],
      marginHorizontal:spacing[6],
      alignItems:'center'
    },
    name:{
      textTransform:'uppercase',
      fontSize:30
    },
    description:{
      textAlign:'center',
      lineHeight:20,
      fontSize:18,
    },
    source: {
      flexDirection:'row',
      alignItems:'center',
      marginTop:spacing[4],
    },
    wikipedia:{
      textDecorationLine:'underline',
      fontWeight:'bold',
      fontSize:18,
    },
    planetSection: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-between",
      paddingHorizontal:spacing[5],
      paddingVertical:spacing[4],
      borderWidth:1,
      borderColor:colors.grey,
      marginHorizontal:spacing[5],
      marginBottom:spacing[4],
      fontSize:18
      
    }
})
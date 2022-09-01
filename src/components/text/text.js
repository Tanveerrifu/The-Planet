import { View, Text as RNtext, StyleSheet} from 'react-native'
import React from 'react'
import { presets } from './text.preset'

export default function text({children, preset='default', style}) {
    const textStyles= StyleSheet.compose(presets[preset], style)
  return <RNtext style={textStyles}>{children}</RNtext>
  
}
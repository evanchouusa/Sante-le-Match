import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const ImageContainer = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={source} />
    </View>
  )
}

export default ImageContainer

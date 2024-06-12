import { StyleSheet, Image } from "react-native";

interface Props {
  placeholderImageSource: any;
  selectedImage: any;
}

export default function ImageViewer({ placeholderImageSource, selectedImage  }: Props) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

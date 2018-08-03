import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Share
} from "react-native";
// import RNFetchBlob from "rn-fetch-blob";

class CardDetailsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Хатты көру</Text>
        </View>
      ),
      headerRight: (
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>ASHYQ</Text>
          <Text style={{ fontSize: 5 }}> </Text>
          <Text style={styles.headerText}>HATTAR</Text>
        </View>
      )
    };
  };

  onClick = photoUrl => {
    Share.share(
      {
        message: photoUrl,
        // url: photoUrl,
        title: "Бұл сурет Ashyq Hattar қосымшасынан алынған"
      },
      {
        // Android only:
        dialogTitle: "Share BAM goodness",
        // iOS only:
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
      }
      //+ " Бұл сурет Ashyq Hattar қосымшасынан алынған"
    );
  };

  render() {
    const { navigation } = this.props;
    const photoUrl = navigation.getParam("url", null);

    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: photoUrl.toString()
          }}
        />
        <Button title="Бөлісу!" onPress={() => this.onClick(photoUrl)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center"
  },
  titleText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "#FF473A"
  },
  headerText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 10
  },
  headerTextContainer: {
    width: 45,
    height: 40,
    marginRight: 10
  },
  mainContainer: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});

export default CardDetailsScreen;

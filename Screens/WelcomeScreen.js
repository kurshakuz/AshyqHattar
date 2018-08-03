import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground
} from "react-native";
// import { AppLoading, Font } from "expo";

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     "Montserrat-Regular": require("../assets/fonts/Montserrat/Montserrat-Regular.ttf")
  //   });
  //   this.setState({ loading: false });
  // }

  goToSearch = () => {
    this.props.navigation.navigate("Search");
  };

  goToCreateCard = () => {
    console.log("Pressed");
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/bkgrd.jpg")}
          style={{ width: "100%", height: "100%" }}
          blurRadius={1}
        >
          <View style={styles.mainContainer}>
            <View style={styles.firContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>ASHYQ HATTAR</Text>
                <Text style={styles.additionalText}>
                  Барлық ашық хаттар мен құттықтаулар бір жерде!
                </Text>
              </View>

              <Button
                color="#FF473A"
                title="Іздеу!"
                onPress={this.goToSearch}
              />
            </View>
            <View style={styles.secContrainer}>
              <Text style={styles.additionalText}>
                Немесе өзің жеке дизайнды құрастыру!
              </Text>
              <Button
                color="#FFC820"
                title="Жасау!"
                onPress={this.goToCreateCard}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  firContainer: {
    flex: 1,
    width: 270,
    justifyContent: "center"
  },
  textContainer: {
    width: 220
  },
  mainText: {
    color: "white",
    fontFamily: "Montserrat-Regular",
    fontSize: 36,
    marginBottom: 20
  },
  additionalText: {
    marginBottom: 20,
    color: "white",
    fontFamily: "Montserrat-Regular",
    fontSize: 12
  },
  secContrainer: {
    marginBottom: 50,
    width: 270,
    justifyContent: "center"
  }
});

export default WelcomeScreen;

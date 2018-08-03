import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import GridView from "react-native-gridview";

class SearchDetailsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Нәтиже</Text>
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

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      url: "",
      isLoading: true,
      links: []
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const favorite = navigation.getParam("favorite", null);

    if (favorite) {
      this.setState({
        links: favorite.links,
        isLoading: false
      });
    }
  }

  viewImage = URL => {
    return this.props.navigation.navigate("CardDetails", {
      url: URL
    });
  };

  renderPhotos = () => {
    return (
      <GridView
        data={this.state.links}
        itemsPerRow={3}
        renderItem={listItem => (
          <TouchableOpacity onPress={() => this.viewImage(listItem)}>
            <Image
              style={{ height: 120, width: 120 }}
              source={{ uri: listItem }}
            />
          </TouchableOpacity>
        )}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text> is loading... </Text>
        </View>
      );
    }
    return this.renderPhotos();
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
  }
});

export default SearchDetailsScreen;

import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

import RNFetchBlob from "rn-fetch-blob";
import Share from "react-native-share";

export default class TempScreen extends Component {
  state = {
    loading: false
  };

  _downloadImageAndShare(title, message, url) {
    this.setState({ loading: true });

    var self = this;

    RNFetchBlob.config({ fileCache: true })
      .fetch("GET", url)
      .then(resp => {
        console.log("here start ", resp.path());
        return resp.readFile("base64").then(base64 => {
          //   console.log("base64", base64);
          return { resp, base64 };
        });
      })
      .then(obj => {
        var headers = obj.resp.respInfo.headers;
        var type = headers["Content-Type"];
        var dataUrl = "data:" + type + ";base64," + obj.base64;
        return { title, message, url: dataUrl };
      })
      .then(opts => {
        self.setState({ loading: false });

        console.log("final opts: ", opts);

        Share.open(opts);
      })
      .catch(err => {
        self.setState({ loading: false });
        console.log(err);
      });
  }

  constructor(props) {
    super(props);
    this._downloadImageAndShare = this._downloadImageAndShare.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          disabled={this.state.loading}
          onPress={() =>
            this._downloadImageAndShare(
              "My image",
              "Check out my image!",
              "http://35.185.176.191:8001/images/medias/1521806024.png"
            )
          }
          title={this.state.loading ? "Loading image..." : "Share image"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

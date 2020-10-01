import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import NewPage from "./loginPage";

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <NewPage />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

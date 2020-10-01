import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

function TextInputWithHeader(props: any) {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.smallText}>{props.title}</Text>
        {props.showMaskedValue && (
          <TouchableOpacity
            onPress={() => setPasswordVisibility(!passwordVisibility)}
          >
            <Text style={styles.smallText}>
              {passwordVisibility ? "HIDE" : "SHOW"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        style={styles.textInput}
        value={props.value}
        secureTextEntry={props.showMaskedValue && !passwordVisibility}
        onChangeText={(text: any) => props.onChangeText(text)}
      ></TextInput>
      {props.error && <Text style={styles.errorText}>{props.errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  smallText: {
    fontSize: 12,
    color: "white",
    marginTop: 10,
    marginBottom: 10
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    color: "#fff"
  },
  errorText: {
    fontSize: 12,
    color: "white"
  }
});

export default TextInputWithHeader;

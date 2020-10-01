import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard
} from "react-native";
import TextInputWithHeader from "./textHeaderComponent";

function LoginPage() {
  const [username, setUserName] = React.useState({
    value: "",
    error: false,
    errorMsg: ""
  });
  const [password, setPassword] = React.useState({
    value: "",
    error: false,
    errorMsg: ""
  });
  const [confirmPassword, setCnfPass] = React.useState({
    value: "",
    error: false,
    errorMsg: ""
  });

  const [registrationVisibility, setRegVisibility] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const re1 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validateLogin = () => {
    clearDataValidation();
    if (registrationVisibility) {
      setRegVisibility(false);
    } else {
      if (validation()) {
        setSuccessMsg("Login Success");
      }
    }
  };

  const clearDataValidation = () => {
    Keyboard.dismiss();
    setSuccessMsg("");
    setUserName({ ...username, error: false, errorMsg: "" });
    setPassword({ ...password, error: false, errorMsg: "" });
    setCnfPass({ ...confirmPassword, error: false, errorMsg: "" });
  };

  const validation = () => {
    let isValid = true;
    if (!re.test(String(username.value).toLowerCase())) {
      setUserName({
        ...username,
        error: true,
        errorMsg: "Enter correct email"
      });
      isValid = false;
    }

    if (!re1.test(password.value)) {
      setPassword({
        ...password,
        error: true,
        errorMsg:
          "Enter password with min 8 letter , at least a symbol, a uppercase, a lower case and a number "
      });
      isValid = false;
    }

    if (registrationVisibility && confirmPassword.value !== password.value) {
      setCnfPass({
        ...confirmPassword,
        error: true,
        errorMsg: "Password and confirm password must be same"
      });
      isValid = false;
    }
    return isValid;
  };

  const validateRegistration = () => {
    clearDataValidation();
    if (registrationVisibility) {
      if (validation()) {
        setSuccessMsg("Registration Success");
      }
    } else {
      setRegVisibility(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.largeText}>
          {registrationVisibility ? "Register" : "Login"}
        </Text>
        <TextInputWithHeader
          title={"EMAIL ADDRESS"}
          showMaskedValue={false}
          onChangeText={(text: any) =>
            setUserName({ value: text, error: false, errorMsg: "" })
          }
          value={username.value}
          error={username.error}
          errorMsg={username.errorMsg}
        />

        <TextInputWithHeader
          title={"PASSWORD"}
          showMaskedValue={true}
          onChangeText={(text: any) =>
            setPassword({ value: text, error: false, errorMsg: "" })
          }
          value={password.value}
          error={password.error}
          errorMsg={password.errorMsg}
        />

        {registrationVisibility && (
          <TextInputWithHeader
            title={"CONFIRM PASSWORD"}
            showMaskedValue={true}
            onChangeText={(text: any) =>
              setCnfPass({ value: text, error: false, errorMsg: "" })
            }
            value={confirmPassword.value}
            error={confirmPassword.error}
            errorMsg={confirmPassword.errorMsg}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={() => validateLogin()}>
          <Text style={styles.mediumText}>
            {registrationVisibility ? "Go to Login" : "Login"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => validateRegistration()}
        >
          <Text style={styles.mediumText}>
            {registrationVisibility ? "Register" : "Go to Registration"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.largeText}>{successMsg}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 16
  },
  mediumText: {
    fontSize: 20,
    color: "green"
  },
  largeText: {
    fontSize: 30,
    color: "white",
    marginBottom: 30
  },
  button: {
    marginTop: 30,
    width: "100%",
    minHeight: 40,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0
  }
});
export default LoginPage;

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "./constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <NavigationContainer>
          <View style={NavBarstyles.container}>
            <ScreenHeaderBtn iconsUrl={icons.menu} dimension={"60%"} />
            <ScreenHeaderBtn iconsUrl={images.profile} dimension={"100%"} />
          </View>
        </NavigationContainer>
        <Welcome />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={NavBarstyles.scrollView}
        >
          <Popularjobs />
          <Nearbyjobs />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const NavBarstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    padding: 5,
    width: 50,
    height: 50,
  },
  scrollView: {
    height: "100%",
    marginTop:10
  },
});

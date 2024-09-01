import { useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home({ navigation }) {
  const [serachTerm, setSearchTerms] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <View style={NavBarstyles.container}>
          <ScreenHeaderBtn iconsUrl={icons.menu} dimension={"60%"} />
          <ScreenHeaderBtn iconsUrl={images.profile} dimension={"100%"} />
        </View>

        <Welcome
          navigation={navigation}
          serachTerm={serachTerm}
          setSearchTerms={setSearchTerms}
          handleClick={() => {
            if (serachTerm) {
              navigation.navigate("job-search", {
                params: serachTerm,
                navigation:navigation
              });
            }
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={NavBarstyles.scrollView}
        >
          <Popularjobs navigation={navigation} />
          <Nearbyjobs navigation={navigation} />
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
    marginTop: 10,
  },
});

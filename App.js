import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/index";
import JobDetails from "./app/job-details/JobDetails";
import JobSearch from "./app/search/JobSearch";

import { COLORS, icons } from "./constants";
import { ScreenHeaderBtn } from "./components";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, headerLeft: () => {} }}
        ></Stack.Screen>

        <Stack.Screen
          name="job-details"
          component={JobDetails}
          // Access the navigation prop
          options={({ navigation }) => ({
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerLeft: () => (
              <ScreenHeaderBtn
                iconsUrl={icons.left}
                dimension="60%"
                handlePress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconsUrl={icons.share}
                dimension="60%"
                handlePress={() => {}}
              />
            ),
          })}
        />
        <Stack.Screen
          name="job-search"
          component={JobSearch}
          // Access the navigation prop
          options={({ navigation }) => ({
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerLeft: () => (
              <ScreenHeaderBtn
                iconsUrl={icons.left}
                dimension="60%"
                handlePress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

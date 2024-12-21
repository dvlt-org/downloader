import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/Home.js"
import DownloadingScreen from "./screens/Downloading.js"
import UploadedScreen from "./screens/Uploaded.js"
import Icon from "react-native-vector-icons/FontAwesome"

const bottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <bottomTab.Navigator initialRouteName="Home" screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, size, color }) => {
            let iconName
            if (route.name === "Home") {
              iconName = "home"
            } else if (route.name === "Downloading") {
              iconName = "download"
            }
            else {
              iconName = "upload"
            }
            return (
              <Icon name={iconName} size={size} color={color} />
            )
          },
          headerShown: false,
          tabBarActiveTintColor: "#6A92BB",
          tabBarStyle: {
            marginHorizontal: 20,
            marginVertical: 20,
            borderRadius: 10,
          },
        }
      }}>
        <bottomTab.Screen name="Home" component={HomeScreen} />
        <bottomTab.Screen name="Downloading" component={DownloadingScreen} />
        <bottomTab.Screen name="Uploaded" component={UploadedScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}
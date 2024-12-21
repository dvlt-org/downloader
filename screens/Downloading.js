import React from "react"
import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/MaterialIcons"
import Video from "../components/Video.js"


const Downloading = () => {
    return (
        <SafeAreaView>
            <View style={{
                marginHorizontal: 10,
            }}>
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    backgroundColor: "lightgray",
                    padding: 10,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>DAVOM ETMOQDA...</Text>
                    <Icon style={{
                        marginLeft: 100,
                    }} name="menu" size={20} />
                </View>
                <ScrollView>
                    <Video />
                    <Video />
                    <Video />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Downloading
import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/MaterialIcons"
import FontIcon from "react-native-vector-icons/FontAwesome"

const Home = () => {
    return (
        <SafeAreaView>
            <View style={{
                marginHorizontal: 10,
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 10,
                }}>
                    <View>
                        <Icon name="add" size={30} />
                    </View>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <Icon name="none" size={15} style={{
                            backgroundColor: "black",
                            width: 20,
                            color: "#fff",
                            borderRadius: 10,
                            textAlign: 'center',
                        }} />
                        <Icon name="settings" size={20} style={{ marginHorizontal: 10, }} />
                        <Icon name="menu" size={20} />
                    </View>
                </View>
                <View style={styles.homeInput}>
                    <TextInput placeholder="Enter your url" />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                }}>
                    <View style={{
                        width: 75,
                        marginRight: 5
                    }}>
                        <FontIcon name="youtube-play" size={40} color={"red"} />
                        <Text>Youtube</Text>
                    </View>
                    <View style={{
                        width: 80,
                        marginRight: 5
                    }}>
                        <FontIcon name="facebook-square" size={40} color="blue" />
                        <Text>Facebook</Text>
                    </View>
                    <View style={{
                        width: 75,
                        marginRight: 5
                    }}>
                        <FontIcon name="instagram" size={40} color="purple" />
                        <Text>Instagram</Text>
                    </View>
                    <View style={{
                        width: 75,
                        marginRight: 5
                    }}>
                        <Icon name="tiktok" size={40} color={"#000"} />
                        <Text>TikTok</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#1C83FD",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    marginVertical: 20,
                }}>
                    <Text style={{ color: "white" }}>
                        Qanday videolarni yuklab olish mumkin ?
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 100,
                }}>
                    <Image source={{
                        uri: "https://i.pinimg.com/originals/34/c4/4b/34c44b321268000b8f7a1982365d40b9.png"
                    }} width={100} height={100} style={{ objectFit: "contain" }} />
                    <Text style={{ marginLeft: 10, color: '#FC3B3D', fontSize: 50, fontWeight: "bold", fontStyle: "italic", }}>300 M/S</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    homeInput: {
        marginTop: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: "gray",
        borderStyle: "solid"
    }
})

export default Home;

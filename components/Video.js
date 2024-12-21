import React from "react"
import { View, Text, Image, Button, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const Video = () => {
    const [paused, setPaused] = React.useState(false)
    return (
        <View style={{
            flexDirection: "row",
            marginVertical: 10,
        }}>
            <Image source={{
                uri: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67661aa03f13fa34f1aec4bf_67661aa03f13fa34f1aec4c0/smart_crop_516x290"
            }} width={100} height={100} style={{ objectFit: "cover" }} />
            <View style={{
                marginLeft: 20,
                width: "100%",
            }}>
                <Text style={{
                    marginVertical: 5,
                    fontSize: 16,
                    fontWeight: "bold"
                }}>Video nomi.mp4</Text>
                <View style={{
                    width: "100%",
                    backgroundColor: "gray",
                    height: 10,
                    borderRadius: 5,
                    position: "relative"
                }}>
                    <View style={{
                        position: "absolute",
                        left: 0,
                        width:"80%"
                    }}></View>
                </View>
                <View>
                    <View>
                        <Text>
                            42.12mb/21.02mb
                        </Text>
                        <Text>42 MB/s</Text>
                    </View>
                    <TouchableWithoutFeedback >
                        <Icon name={paused ? "play" : "pause"} size={20} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default Video
import { Header } from "@shared/ui/header";
import { Image } from "expo-image";
import { styles } from "./chat-list.styles";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Icons } from "@shared/ui/icons";
import { COLORS } from "@shared/constants/colors";


export function ChatList() {
    return(
        <View style={styles.container}>
            <View style={styles.usersMessage}>
                <Text style={styles.usersMessageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis impedit necessitatibus quaerat atque, fuga hic aliquid! Culpa, magnam animi? Doloremque commodi odit earum unde magnam aperiam praesentium qui aliquam.</Text>
                <Text style={styles.usersMessageDate}>20:10 \(\checkmark\checkmark\) </Text>
            </View>
            <View style={styles.myMessage}></View>
                <Text style={styles.myMessageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis dignissimos veniam repellendus vel, ipsam perferendis! Quis commodi labore, ea, cum quibusdam, rem rerum magnam minima odio autem unde id.</Text>
                <Text style={styles.myMessageDate}>20:11 \(\checkmark\checkmark\) </Text>
        </View>
    )
}
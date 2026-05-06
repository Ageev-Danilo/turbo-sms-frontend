import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        flexDirection: "column",
        gap: 10

    },
    usersMessage: {
        flexDirection: "row",
        width: 350,
        minHeight: 30,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: COLORS.bisqueSecondary
    },
    myMessage: {
        flexDirection: "row",
        width: 350,
        minHeight: 30,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "#DFCFCF"

    },
    myMessageContent:{
        fontSize: FONT_SIZE.large,
        color: "#000000"
    },
    usersMessageContent:{
        fontSize: FONT_SIZE.large,
        color: "#000000"
    },
    myMessageDate:{
        fontSize: FONT_SIZE.small,
        color: "#000000"
    },
    usersMessageDate:{
        fontSize: FONT_SIZE.small,
        color: "#000000"
    }


})
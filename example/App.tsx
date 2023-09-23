import { useRef, useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, Alert } from "react-native";

import { GyroView } from "expo-sample-gyro-view";

export default function App() {
  const [isTracking, setIsTracking] = useState(false);
  const isModalVisible = useRef(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GyroView
        onGyroEvent={({ nativeEvent: { y } }) => {
          if (y > 0 && !isModalVisible.current) {
            isModalVisible.current = true;
            Alert.alert("Oops!", "You are upside down 😱", [
              {
                text: "OK",
                style: "default",
                onPress: () => {
                  isModalVisible.current = false;
                }
              }
            ])
          }
        }}
        placeholderText="START"
        track={isTracking}
        style={{ flex: 1 }}
      />

      <TouchableOpacity
        style={{
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
          marginHorizontal: 20,
          borderRadius: 8,
        }}
        onPress={() => {
          setIsTracking(!isTracking);
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          Track
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
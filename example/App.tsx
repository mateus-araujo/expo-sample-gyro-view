import { useRef, useState } from "react";
import { TouchableOpacity, SafeAreaView, Text } from "react-native";

import { GyroView } from "expo-sample-gyro-view";

export default function App() {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GyroView
        placeholderText="START"
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
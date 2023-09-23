import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ViewProps } from "react-native";

export type OnGyroEvent = {
  y: number;
};

export type Props = {
  onGyroEvent?: (event: { nativeEvent: OnGyroEvent }) => void;
  placeholderText?: string;
  track: boolean;
} & ViewProps;

const NativeView: React.ComponentType<Props> =
  requireNativeViewManager("ExpoSampleGyroView");

export default function ExpoGyroView(props: Props) {
  return <NativeView {...props} />;
}

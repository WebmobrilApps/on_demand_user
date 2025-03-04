import { StyleSheet, ViewStyle } from "react-native";
import { showMessage, MessageType,Position  } from "react-native-flash-message";

interface ToastOptions {
  message: string;
  description?: string;
  type?: MessageType; // 'success' | 'danger' | 'info' | 'warning' | 'default'
  position?:  Position
  backgroundColor?: string | null;
  duration?: number;
  color?: string | null;
  mainContainer?: ViewStyle;
}

const CustomToast = ({
  message,
  description,
  type = "success",
  position = "bottom",
//   backgroundColor = null,
  duration = 3000,
  color = "#FFFFFF",
  mainContainer,
}: ToastOptions) => {
  showMessage({
    message,
    description,
    type,
    // backgroundColor,
    position,
    duration,
    textStyle: { textAlign: "left" },
    titleStyle: { textAlign: "left" },
    // color,
    animated: true,
    style: [styles.container, mainContainer],
  });
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});

export default  CustomToast;

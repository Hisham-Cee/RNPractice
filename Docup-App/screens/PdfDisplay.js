import { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as FileSystem from "expo-file-system";
import { WebView } from "react-native-webview";

function PdfDisplay({ route }) {
  const { uri } = route.params;
  const [pdfBase64, setPdfBase64] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      if (Platform.OS === "web") return; // skip reading base64 on web
      try {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setPdfBase64(base64);
      } catch (error) {
        console.error("Error reading PDF file:", error);
      }
    };

    loadPdf();
  }, [uri]);

  if (Platform.OS === "web") {
    return (
      <View style={styles.rootContainer}>
        <iframe
          src={uri}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ borderWidth: 0 }}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.rootContainer}>
        {pdfBase64 ? (
          <WebView
            originWhitelist={["*"]}
            source={{
              uri: `data:application/pdf;base64,${pdfBase64}`,
            }}
            style={styles.pdf}
          />
        ) : (
          <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />
        )}
      </View>
    </>
  );
}

export default PdfDisplay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pdf: {
    flex: 1,
  },
});

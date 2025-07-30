import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';

export default function PdfDisplay({ route }) {
  const { pdfUri } = route.params;
  const [base64Pdf, setBase64Pdf] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readPdfAsBase64 = async () => {
      try {
        if (!pdfUri) {
          setError('No PDF URI provided.');
          return;
        }

        console.log('PDF URI:', pdfUri);

        const base64 = await FileSystem.readAsStringAsync(pdfUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        setBase64Pdf(`data:application/pdf;base64,${base64}`);
      } catch (err) {
        console.error('Error reading PDF:', err);
        setError('Failed to load PDF.');
      }
    };

    readPdfAsBase64();
  }, [pdfUri]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
      </View>
    );
  }

  if (!base64Pdf) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={{ marginTop: 10 }}>Loading PDF...</Text>
      </View>
    );
  }

  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: base64Pdf }}
      style={{ flex: 1 }}
      startInLoadingState
      renderLoading={() => (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet, View, Dimensions, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

function PdfDisplay({ route }) {
    const { uri } = route.params;

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.rootContainer}>
                {Platform.OS === 'web' ? (
                    <iframe
                        src={uri}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                        title="PDF Viewer"
                    />
                ) : (
                    <WebView
                        source={{ uri }}
                        style={styles.pdf}
                        startInLoadingState
                        scalesPageToFit
                        javaScriptEnabled
                    />
                )}
            </View>
        </>
    );
}
export default PdfDisplay;
// ...existing styles...
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    // text:{
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#aaa'
    // },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }

});
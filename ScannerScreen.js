import React, { useState, useEffect } from 'react';
import { Layout, Text, Button, Card } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTabBarCode } from './hooks/useTabBarCode';

function BarCodeList({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </>
  );
}

function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [tabBarCode, setTabBarCode] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setMessage(`Bar code with type ${type} and data ${data} has been scanned!`);

    setTabBarCode(useTabBarCode(data, tabBarCode));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Layout style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <Card style={{ marginBottom: 20 }}>
        <Text category="h1" appearance="hint">
          CodeScanner
        </Text>
        <Text category="p1" appearance="hint">
          {message}
        </Text>
      </Card>

      <BarCodeList data={tabBarCode} />

      {scanned && (
        <Button onPress={() => setScanned(false)}>Tap to Scan Again</Button>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScannerScreen;

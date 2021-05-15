import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { render } from 'react-dom';


export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'

        }
    }
}

getCameraPermissions = async () =>{
    const {status} = await Permissions.askAsync(Permissions>CAMERA);
    this.setState ({
        hasCameraPermissions: status === 'granted'
    })
    
    };
    
    handleBarcodeScanned = async({type, data})=>{
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        });
    }
    
    
    
    if(buttonState === "clicked" && hasCameraPermissions){
        return(
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
        );
        
    }



render(){
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.displayText}>Dummy QR code output</Text>
            <TouchableOpacity
            style={StyleSheet.scanButton}>
                <Text style={StyleSheet.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
        </View>
    )
}
    


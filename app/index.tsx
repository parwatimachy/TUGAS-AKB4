import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProyekAkhirParwati() {
  return (
    <SafeAreaView style={gayaVisual.latarBelakang}>
      <ScrollView contentContainerStyle={gayaVisual.isiKonten}>
        <Text style={[gayaVisual.teksJudul, { fontFamily: 'Anton-Regular' }]}>
          Proyek Akhir - Parwati
        </Text>
        <Text style={gayaVisual.teksSubJudul}>
          Referensi Stambuk: 105841100622
        </Text>
        <View style={gayaVisual.garisPemisah} />

        {/* --- 5 NAMA DENGAN FONT STATIS --- */}
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Anton-Regular' }]}>
          Muliana{'\n'}(105841103822)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Merriweather-Regular', fontSize: 20 }]}>
          Ahmad Fathir{'\n'}(105841102922)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Nunito-Light', color: '#333' }]}>
          Muhammad Faturrachman Iswan{'\n'}(105841103322)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'PlayfairDisplay-Regular', fontStyle: 'italic' }]}>
          Nurmisba{'\n'}(105841103422)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'SourceCodePro-Regular' }]}>
          Alvian Syah Burhani{'\n'}(105841103522)
        </Text>

        <View style={gayaVisual.garisPemisah} />

        {/* --- 5 NAMA DENGAN FONT VARIABEL --- */}
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Recursive-VariableFont', fontWeight: '300' }]}>
          Hamdani{'\n'}(105841103722)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Epilogue-VariableFont', fontWeight: '400', fontSize: 20 }]}>
          Muliana{'\n'}(105841103822)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Jost-VariableFont', fontWeight: '500', color: '#333' }]}>
          Yusri Ali{'\n'}(105841117222)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'WorkSans-VariableFont', fontWeight: '700', fontStyle: 'italic' }]}>
          Nur Muhammad Ashman{'\n'}(105841103122)
        </Text>
        <Text style={[gayaVisual.teksNama, { fontFamily: 'Lexend-VariableFont', fontWeight: '900' }]}>
          Arif Rahman{'\n'}(105841100921)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const gayaVisual = StyleSheet.create({
  latarBelakang: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  isiKonten: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  teksJudul: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 5,
  },
  teksSubJudul: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  teksNama: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    backgroundColor: '#FFF',
    lineHeight: 30,
  },
  garisPemisah: {
    height: 1,
    backgroundColor: '#CCC',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { COLORS } from '../theme/theme';

export default class Chart extends Component {
  render() {
    const widthAndHeight = 200; // Adjust for proper size

    const series = [
      { value: 430, color: COLORS.categoryGreen },
      { value: 321, color: COLORS.categoryOrange },
      { value: 185, color: COLORS.categoryBlack },
      { value: 123, color: COLORS.categoryRed },
    ]

    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Gastos Totales</Text>
          <Text style={styles.subtitle}>Octubre</Text>
          <View style={styles.hairline} />

          <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.75} />

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: COLORS.categoryGreen }]} />
              <Text>Ahorro: ₡200,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: COLORS.categoryOrange }]} />
              <Text>Renta: ₡50,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: COLORS.categoryBlack }]} />
              <Text>Comida: ₡105,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: COLORS.categoryRed }]} />
              <Text>Compras: ₡13,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: '#D63031' }]} />
              <Text>Transporte: ₡50,000.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2D3436',
  },
  subtitle: {
    fontSize: 16,
    color: '#636E72',
    marginBottom: 20,
  },
  legend: {
    marginTop: 20,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  colorBox: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 10,
  },
  hairline: {
    backgroundColor: COLORS.lines,
    height: 1,
    margin: 10,
    width: 300,
  },
});

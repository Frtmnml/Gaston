import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { COLORS } from '../theme/theme';

export default class Chart extends Component {
  render() {
    const widthAndHeight = 240; // Adjust for proper size

    const series = [
      { value: 430, color: COLORS.categoryGreen },
      { value: 123, color: COLORS.primary },
      { value: 321, color: COLORS.categoryOrange },
      { value: 185, color: COLORS.categoryBlack },
      { value: 123, color: COLORS.categoryRed },
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.subtitle}>Gastos Totales</Text>
            <Text style={styles.subtitle}>Octubre</Text>
          </View>
          <View style={styles.hairline} />

          <View style={styles.chartContainer}>
            <PieChart 
              style={styles.pieChart}
              widthAndHeight={widthAndHeight}
              series={series}
              cover={0.78}
            />
            <View style={styles.chartTitle}>
              <Text style={styles.chartTitleText}>Total</Text>
              <Text style={styles.chartTitleAmount}>₡ 850,000.00</Text>
            </View>
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View
                style={[styles.colorBox, { backgroundColor: COLORS.categoryGreen }]}
              />
              <Text style={styles.legendItemText}>Ahorro</Text>
              <Text style={styles.amountText}>₡200,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.colorBox, { backgroundColor: COLORS.categoryOrange }]}
              />
              <Text style={styles.legendItemText}>Renta</Text>
              <Text style={styles.amountText}>₡50,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.colorBox, { backgroundColor: COLORS.categoryBlack }]}
              />
              <Text style={styles.legendItemText}>Comida</Text>
              <Text style={styles.amountText}>₡105,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.colorBox, { backgroundColor: COLORS.categoryRed }]}
              />
              <Text style={styles.legendItemText}>Compras</Text>
              <Text style={styles.amountText}>₡13,000.00</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.colorBox, { backgroundColor: '#D63031' }]}
              />
              <Text style={styles.legendItemText}>Transporte</Text>
              <Text style={styles.amountText}>₡50,000.00</Text>
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
    backgroundColor: '#071A15',
    padding: 26,
  },
  card: {
    backgroundColor: '#F5F1EC',
    borderRadius: 24,
    padding: 25,
    alignItems: 'center',
  },
  pieChart: {
    margin: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C3A2D',
  },
  hairline: {
    backgroundColor: COLORS.lines,
    height: 1,
    marginVertical: 10,
    width: '100%',
  },
  chartContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C3A2D',
  },
  chartTitleAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C3A2D',
  },
  legend: {
    marginTop: 20,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  legendItemText: {
    fontSize: 12,
    flex: 1,
    marginLeft: 8,
    color: '#0C3A2D',
  },
  amountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0C3A2D',
  },
  colorBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Line } from 'chart.js';
  
  const chartCanvas = ref(null);
  let chart;
  
  onMounted(() => {
    renderChart();
  });
  
  const renderChart = () => {
    const ctx = chartCanvas.value.getContext('2d');
  
    const chartConfig = {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 15],
            borderWidth: 3, // Set line width for the chart line
          },
          // Add more datasets with different borderWidth if needed
        ],
      },
      options: {
        // Create a custom legend using the legendCallback option
        legend: {
          display: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          customLegend: {
            labels: ['Dataset 1'], // Customize labels here
          },
        },
      },
    };
  
    chart = new Line(ctx, chartConfig);
  };
  
  const customLegend = `
    <ul class="custom-legend">
      <li><span class="legend-marker"></span>Dataset 1</li>
      <!-- Add more legend items if needed -->
    </ul>
  `;
  </script>
  
  <style scoped>
  /* Customize the legend styles */
  .custom-legend {
    list-style: none;
    padding: 0;
  }
  
  .custom-legend li {
    margin-bottom: 10px;
  }
  
  /* Customize the legend square marker */
  .legend-marker {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #000; /* Fixed border width for legend square */
    margin-right: 5px;
    vertical-align: middle;
  }
  </style>
<template>
    <div class="overflow-hidden rounded-lg shadow-lg">
      <div
        class=" py-3 px-5 dark:bg-neutral-700 dark:text-neutral-200"
      >
        Service Requests last year
      </div>
      <!-- <div class="canvas-wrapper">
          <canvas ref="chart"></canvas>
        </div> -->
      <canvas ref="chart" class="p-10 canvas"  @resize="handleResize" style="height:200px;width:600px;background-color:white;margin-left: 10px;margin-right: 10px;"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  const chart = ref(null);
  
  onMounted(() => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
          {
          label: "Products",
          backgroundColor: "hsl(217, 57%, 51%)",
          borderColor: "hsl(217, 57%, 51%)",
          data: [0,10,16,15,2,3],
        },
        {
          label: "Orders",
          backgroundColor: "hsl(45, 100%, 50%)",
          borderColor: "hsl(45, 100%, 50%)",
          data: [0, 5, 5,27],
        },
      ],
    };
  
    const config = {
      type: "line",
      data,
      options: {},
    };
  
    chart.value = new Chart(chart.value, config);
  });
  
  function handleResize() {
      chart.value.resize();
    }
  </script>
  
  <style>
  /* Optional styles to center the chart */
  @media (min-width: 640px) {
      .canvas {
        width: 50%;
      }
    }
    
    @media (min-width: 768px) {
      .canvas {
        width: 33.33333%;
      }
    }
  </style>
  
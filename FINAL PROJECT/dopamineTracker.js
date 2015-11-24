var lineChartData = [
  // First Stimuli
  {
    label: "Dark Chocolate",
    values: [ {time: 1370044800, y: 100}, {time: 1370044801, y: 1000}, ... ]
  },

  // Second Stimuli
  {
    label: "Sex",
    values: [ {time: 1370044800, y: 250}, {time: 1370044801, y: 98}, ... ]
  },

// Third Stimuli
  {
    label: "Bike Ride",
    values: [ {time: 1370044800, y: 100}, {time: 1370044801, y: 1000}, ... ]
  },
  // Fourth Stimuli
  {
    label: "Workout",
    values: [ {time: 1370044800, y: 55}, {time: 1370044801, y: 1000}, ... ]
  },
  // Fifth Stimuli
  {
    label: "Ice Cream",
    values: [ {time: 1370044800, y: 100}, {time: 1370044801, y: 1000}, ... ]
  },
  // Sixth Stimuli
  {
    label: "Food",
    values: [ {time: 1370044800, y: 200}, {time: 1370044801, y: 1000}, ... ]
  },
  // Seventh Stimuli
  {
    label: "Porn",
    values: [ {time: 1370044800, y: 115}, {time: 1370044801, y: 1000}, ... ]
  },
  // Eighth Stimuli
  {
    label: "Coffee",
    values: [ {time: 1370044800, y: 115}, {time: 1370044801, y: 1000}, ... ]
  },
   // Ninth Stimuli
  {
    label: "Alcohol",
    values: [ {time: 1370044800, y: 75}, {time: 1370044801, y: 1000}, ... ]
  },
];



<div id="lineChart" style="width: 800px; height: 200px"></div>
<script>
  $('#lineChart').epoch({
    type: 'time.line',
    data: lineChartData
  });
</script>

// When Stimuli has been selected then gets plotted
$(function() {
    var data = new RealTimeData(4);

    var chart = $('#real-time-area').epoch({
        type: 'time.area',
        data: data.history(),
        axes: ['left', 'bottom', 'right']
    });
    
    setInterval(function() { chart.push(data.next()); }, 1000);
    chart.push(data.next());
});

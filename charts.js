function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of patient IDs to populate the select options
  d3.json("samples.json").then((data) => {
     var sampleNames = data.patients;

      sampleNames.forEach((sample) => {
       selector
         .append("option")
         .text(sample)
         .property("value", sample);
     });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}  
  
// Symptoms Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var symptoms = data.symptoms;
    // Filter the data for the object with the desired patient ID
    var resultArray = symptoms.filter(sampleObj => sampleObj.Patient_Id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key} : ${value}`);
    });
  });
}

//1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the sample.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the lifestyle array. 
    var bar_data = data.lifestyle;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filterSample = bar_data.filter(sampleObj => sampleObj.Patient_Id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var firstSample = filterSample[0];

    var x_keys = Object.keys(firstSample);
    var y_values = Object.values(firstSample);
    var x_ticks = x_keys.slice(1,11);
    var y_ticks = y_values.slice(1,11);

    // 7. Create the trace for the bar chart. 
    var barData = [
      {
        y: y_ticks,
        x: x_ticks,
        type: "bar",
      }
    ];
    // 8. Create the layout for the bar chart. 
    var barLayout = {
     title: "Lifestyle Choices Scored",
     titlefont: {
      family: "Arial Black",
      size: 24
     },
     paper_bgcolor: "rgba(245,246,249,1)",
     yaxis: {title: "Score (1-5)"},
     xaxis: {
      title: "Lifestyle Choice",
      tickangle : 45,
      tickfont: {
        size: 12,
        color: 'black'
      }
     },
     autosize: false,
     width: 650,
     height: 500,
     margin: {
        l: 50,
        r: 50,
        b: 150,
        t: 100,
        pad: 3
      }
    };
    // 9. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    
    var severity = firstSample.Cancer_Severity;
    var gaugeData = [
      {
       value: severity,
       type: "indicator",
       mode: "gauge+number",
       title: {text: "<br>Cancer Severity<br>"},
       gauge: {
         axis: {range: [null,3], 'tickcolor': "darkblue"},
         bar: {color:"black"},
         steps: [
           {range: [0,1], color: "yellow"},
           {range: [1,2], color: "orange"},
           {range: [2,3], color: "red"}
         ]
       }
      }
     ];
     var gaugeLayout = { 
      width: 500,
      height: 400,
      paper_bgcolor: "rgba(245,246,249,1)"
     };
 
     // 6. Use Plotly to plot the gauge data and layout.
     Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });
}

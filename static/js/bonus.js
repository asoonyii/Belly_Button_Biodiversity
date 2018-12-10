
/**
 * BONUS Solution
 * */
    // buildGauge(data.WFREQ);
    d3.json(`/samples/${sample}`).then((response) => {
      console.log(response.WFREQ)    
  
        // Enter a speed between 0 and 180
        // var level = response.WFREQ;
        // Enter a speed between 0 and 180
        var level = response.WFREQ;
  
        var nb_div = 10;
        var val_max = 9;
  
        // Trig to calc meter point
        var degrees = 180*(1 - 1/nb_div*(0.5 + level)), // 180 - level*180*/nb_div + 10),
            radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
  
        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);
  
  
        // console.log(Array(nb_div).fill(50/nb_div).concat(50))
        var data = [
          { type: 'scatter',
          x: [0], y:[0],
            marker: {size: 28, color:'850000'},
            showlegend: false,
            name: 'WashFreq',
            text: level,
            hoverinfo: 'text+name'},
          { values: Array(nb_div).fill(50/nb_div).concat(50),
          rotation: 90,
          text: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ''],
          textinfo: 'text',
          textposition:'inside',
          marker: {colors:['rgba(0, 230, 0,     0.8)', 
                           'rgba(0, 255, 0,     0.8)',
                           'rgba(26, 255, 26,   0.8)',
                           'rgba(51, 255, 51,   0.8)',
                           'rgba(77, 255, 77,   0.8)',
                           'rgba(102, 255, 102, 0.8)', 
                           'rgba(153, 255, 153, 0.8)',
                           'rgba(179, 255, 179, 0.8)',
                           'rgba(204, 255, 204, 0.8)',
                           'rgba(230, 255, 230, 0.8)',
                          'rgba(255, 255, 255, 0)',
                          ]},
          labels: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ''],
          hoverinfo: 'label',
          hole: .5,
          type: 'pie',
          showlegend: false
        }];
  
        var layout = {
          shapes:[{
              type: 'path',
              path: path,
              fillcolor: '850000',
              line: {
                color: '850000'
              }
            }],
          title: 'Belly button Washin frequency <br> Scrubs per week',
          // height: 1000,
          // width: 1000,
          xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
          yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]}
        };
  
        Plotly.newPlot('gauge', data, layout);
  
  
    })
  
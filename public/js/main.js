$(document).ready(function() {
    var basic_choropleth = new Datamap({
      element: document.getElementById("container"),
      projection: 'mercator',
      fills: {
        defaultFill: "#ABDDA4",
        authorHasTraveledTo: "#fa0fa0"
      },
      data: {
        USA: { fillKey: "authorHasTraveledTo" },
        JPN: { fillKey: "authorHasTraveledTo" },
        ITA: { fillKey: "authorHasTraveledTo" },
        CRI: { fillKey: "authorHasTraveledTo" },
        KOR: { fillKey: "authorHasTraveledTo" },
        DEU: { fillKey: "authorHasTraveledTo" },
      }
    });
    /*
    var colors = d3.scale.category10();
    window.setInterval(function() {
      basic_choropleth.updateChoropleth({
        USA: colors(Math.random() * 10),
        RUS: colors(Math.random() * 100),
        AUS: { fillKey: 'authorHasTraveledTo' },
        BRA: colors(Math.random() * 50),
        CAN: colors(Math.random() * 50),
        ZAF: colors(Math.random() * 50),
        IND: colors(Math.random() * 50),
      });
    }, 2000);
    */
    basic_choropleth.arc([
      {
          origin: {
              latitude: 40.639722,
              longitude: -73.778889
          },
          destination: {
              latitude: 37.618889,
              longitude: -122.375
          }
      },
      {
          origin: {
              latitude: 30.194444,
              longitude: -97.67
          },
          destination: {
              latitude: 25.793333,
              longitude: -80.290556
          },
          options: {
            strokeWidth: 2,
            strokeColor: 'rgba(100, 10, 200, 0.4)'
          }
      },
      {
          origin: {
              latitude: 39.861667,
              longitude: -104.673056
          },
          destination: {
              latitude: 35.877778,
              longitude: -78.7875
          }
      }
    ],  {strokeWidth: 1, arcSharpness: 1.4});
});

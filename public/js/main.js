$(document).ready(function() {
    /*
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
    });*/

    var places = [
        {
            name: "Longo, England",
            location: {
                latitude: 51.5,
                longitude: -0.116667
            }
        },
        {
            name: "Dublin, Irland",
            location: {
                latitude: 53.428590,
                longitude: -6.188024
            }
        }
    ]

    var margin = {top: 10, left: 10, bottom: 10, right: 10};
    var width = parseInt(d3.select('#map').style('width'));
    width = width - margin.left - margin.right;
    var mapRatio = 1;
    var height = width * mapRatio;

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.json("data/uk.json", function(error, uk) {
        if (error) return console.error(error);

        var subunits = topojson.feature(uk, uk.objects.subunits);

        var projection = d3.geo.mercator()
            .center([0, 55.4])
            .rotate([4.4, 0])
            .scale(500)
            .translate([width / 2, height / 2]);

        var path = d3.geo.path()
            .projection(projection);

        svg.append("path")
            .datum(subunits)
            .attr("d", path)
            .attr("class", "subunit-boundary IRL");

        svg.selectAll(".subunit")
            .data(topojson.feature(uk, uk.objects.subunits).features)
            .enter().append("path")
            .attr("class", function(d) { return "subunit " + d.id; })
            .attr("d", path);

        svg.selectAll(".pin")
            .data(places)
            .enter()
            .append('image')
            .attr('class', 'datamaps-pin')
            .attr('xlink:href', 'http://a.tiles.mapbox.com/v3/marker/pin-m+7e7e7e@2x.png')
            .attr('height', 40)
            .attr('width', 40)
            .attr("transform", function(d) {
                return "translate(" + projection([
                        d.location.longitude,
                        d.location.latitude
                    ]) + ")"
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
    */
});

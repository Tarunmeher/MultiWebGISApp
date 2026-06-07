const layerConfig = {
  wmsURL: "http://localhost:8888/geoserver/wms",
  wmsLayers: [
    {
      layerName: "Training:india_outline",
      layerTitle: "India Boundary",
      visible: true,
      groupName: "adminLayer",
    },
    {
      layerName: "Training:india_state_boundary",
      layerTitle: "State Boundary",
      visible: true,
      groupName: "adminLayer",
    },
    {
      layerName: "Training:india_district_boundary",
      layerTitle: "District Boundary",
      visible: true,
      groupName: "adminLayer",
    },
  ],
};

const pointFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Gateway of India, Mumbai", "amenity": "monument", "state": "Maharashtra" },
      "geometry": { "type": "Point", "coordinates": [72.8347, 18.922] }
    },
    {
      "type": "Feature",
      "properties": { "name": "India Gate, New Delhi", "amenity": "monument", "state": "Delhi" },
      "geometry": { "type": "Point", "coordinates": [77.2295, 28.6129] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Taj Mahal, Agra", "amenity": "monument", "state": "Uttar Pradesh" },
      "geometry": { "type": "Point", "coordinates": [78.0421, 27.1751] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Howrah Bridge, Kolkata", "amenity": "infrastructure", "state": "West Bengal" },
      "geometry": { "type": "Point", "coordinates": [88.3476, 22.5851] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Marina Beach, Chennai", "amenity": "beach", "state": "Tamil Nadu" },
      "geometry": { "type": "Point", "coordinates": [80.2824, 13.05] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Charminar, Hyderabad", "amenity": "monument", "state": "Telangana" },
      "geometry": { "type": "Point", "coordinates": [78.4744, 17.3616] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Cubbon Park, Bengaluru", "amenity": "park", "state": "Karnataka" },
      "geometry": { "type": "Point", "coordinates": [77.592, 12.9734] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sabarmati Ashram, Ahmedabad", "amenity": "historical_site", "state": "Gujarat" },
      "geometry": { "type": "Point", "coordinates": [72.5804, 23.0605] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hawa Mahal, Jaipur", "amenity": "palace", "state": "Rajasthan" },
      "geometry": { "type": "Point", "coordinates": [75.8267, 26.9239] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Dal Lake, Srinagar", "amenity": "lake", "state": "Jammu and Kashmir" },
      "geometry": { "type": "Point", "coordinates": [74.8722, 34.1112] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Rock Garden, Chandigarh", "amenity": "park", "state": "Chandigarh" },
      "geometry": { "type": "Point", "coordinates": [76.8055, 30.7525] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Calangute Beach, Goa", "amenity": "beach", "state": "Goa" },
      "geometry": { "type": "Point", "coordinates": [73.7553, 15.5442] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Fort Kochi, Kochi", "amenity": "historical_site", "state": "Kerala" },
      "geometry": { "type": "Point", "coordinates": [76.2443, 9.9658] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kamakhya Temple, Guwahati", "amenity": "place_of_worship", "state": "Assam" },
      "geometry": { "type": "Point", "coordinates": [91.7049, 26.1664] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Jagannath Temple, Puri", "amenity": "place_of_worship", "state": "Odisha" },
      "geometry": { "type": "Point", "coordinates": [85.8179, 19.8049] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Sanchi Stupa, Sanchi", "amenity": "monument", "state": "Madhya Pradesh" },
      "geometry": { "type": "Point", "coordinates": [77.7399, 23.4811] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Golden Temple, Amritsar", "amenity": "place_of_worship", "state": "Punjab" },
      "geometry": { "type": "Point", "coordinates": [74.8765, 31.62] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Mahabodhi Temple, Bodh Gaya", "amenity": "place_of_worship", "state": "Bihar" },
      "geometry": { "type": "Point", "coordinates": [84.9914, 24.6959] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Hussain Sagar Lake, Hyderabad", "amenity": "lake", "state": "Telangana" },
      "geometry": { "type": "Point", "coordinates": [78.4674, 17.4239] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Vizag Beach, Visakhapatnam", "amenity": "beach", "state": "Andhra Pradesh" },
      "geometry": { "type": "Point", "coordinates": [83.3328, 17.7164] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Rani ki Vav, Patan", "amenity": "historical_site", "state": "Gujarat" },
      "geometry": { "type": "Point", "coordinates": [72.1022, 23.8589] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Shimla Mall Road, Shimla", "amenity": "tourist_spot", "state": "Himachal Pradesh" },
      "geometry": { "type": "Point", "coordinates": [77.1742, 31.1048] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Tawang Monastery, Tawang", "amenity": "place_of_worship", "state": "Arunachal Pradesh" },
      "geometry": { "type": "Point", "coordinates": [91.8594, 27.5861] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Nathu La Pass, Gangtok", "amenity": "mountain_pass", "state": "Sikkim" },
      "geometry": { "type": "Point", "coordinates": [88.8307, 27.3865] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Loktak Lake, Moirang", "amenity": "lake", "state": "Manipur" },
      "geometry": { "type": "Point", "coordinates": [93.8018, 24.5249] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Vivekananda Rock Memorial, Kanyakumari", "amenity": "monument", "state": "Tamil Nadu" },
      "geometry": { "type": "Point", "coordinates": [77.5553, 8.0781] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Victoria Memorial, Kolkata", "amenity": "monument", "state": "West Bengal" },
      "geometry": { "type": "Point", "coordinates": [88.3426, 22.5448] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Chhatrapati Shivaji Terminal, Mumbai", "amenity": "transit_station", "state": "Maharashtra" },
      "geometry": { "type": "Point", "coordinates": [72.8354, 18.9401] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Bara Imambara, Lucknow", "amenity": "historical_site", "state": "Uttar Pradesh" },
      "geometry": { "type": "Point", "coordinates": [80.9127, 26.8693] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Meenakshi Temple, Madurai", "amenity": "place_of_worship", "state": "Tamil Nadu" },
      "geometry": { "type": "Point", "coordinates": [78.1193, 9.9195] }
    }
  ]
};

const lineFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "NH 44 (North-South Corridor Segment)",
        "route": "Srinagar to Jammu",
        "type": "National Highway",
        "length_approx_km": 260
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [74.7973, 34.0837], // Srinagar
          [75.0163, 33.7297], // Anantnag
          [75.1492, 33.5165], // Qazigund
          [75.2031, 33.2778], // Ramban
          [74.9663, 32.9155], // Udhampur
          [74.8643, 32.7266]  // Jammu
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Delhi-Mumbai Expressway (NE 4 Segment)",
        "route": "Delhi to Jaipur Border",
        "type": "Expressway",
        "length_approx_km": 180
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.0266, 28.4595], // Gurugram (Start)
          [77.0315, 28.1482], // Sohna
          [76.9152, 27.8943], // Nuh
          [76.6854, 27.5611], // Alwar Interchange
          [76.3684, 26.9155]  // Dausa (Near Jaipur)
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mumbai-Pune Expressway",
        "route": "Kalamboli to Kiwale",
        "type": "Expressway",
        "length_approx_km": 94
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.1118, 19.0232], // Kalamboli (Navi Mumbai)
          [73.1741, 18.9115], // Panvel
          [73.3112, 18.7563], // Khalapur Toll Plaza
          [73.4116, 18.7501], // Lonavala
          [73.6553, 18.6942], // Talegaon
          [73.7548, 18.6419]  // Kiwale (Pune)
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Yamuna Expressway",
        "route": "Greater Noida to Agra",
        "type": "Expressway",
        "length_approx_km": 165
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.5354, 28.4670], // Greater Noida
          [77.6205, 28.1631], // Dankaur
          [77.8105, 27.7712], // Jewar Area
          [77.8931, 27.5218], // Mathura Interchange
          [78.0094, 27.2215]  // Agra Ring Road
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "NH 66 (Konkan Coastal Route)",
        "route": "Panaji to Margao",
        "type": "National Highway",
        "length_approx_km": 35
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [73.8278, 15.4909], // Panaji (Goa)
          [73.8640, 15.4345], // Cortalim (Zuari Bridge)
          [73.9295, 15.3524], // Verna
          [73.9582, 15.2755]  // Margao
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Atal Setu (Trans Harbour Link)",
        "route": "Sewri to Chirle",
        "type": "Sea Bridge Expressway",
        "length_approx_km": 21.8
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [72.8572, 19.0012], // Sewri (Mumbai Side)
          [72.9150, 18.9950], // Mid-sea segment 1
          [72.9720, 18.9810], // Mid-sea segment 2
          [73.0110, 18.9550], // Shivaji Nagar Interchange
          [73.0450, 18.9480]  // Chirle (Navi Mumbai Side)
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "NH 27 (East-West Corridor Segment)",
        "route": "Porbandar to Rajkot",
        "type": "National Highway",
        "length_approx_km": 180
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [69.6093, 21.6417], // Porbandar Port
          [69.9145, 21.7582], // Kutiyana
          [70.1652, 21.7941], // Upleta
          [70.4583, 21.9705], // Jetpur Junction
          [70.7936, 22.3039]  // Rajkot
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "NH 16 (Golden Quadrilateral East)",
        "route": "Chennai to Nellore",
        "type": "National Highway",
        "length_approx_km": 175
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [80.2707, 13.0827], // Chennai
          [80.1245, 13.3421], // Gummidipoondi
          [80.0214, 13.5932], // Tada (Andhra Border)
          [79.9851, 13.9854], // Naidupeta
          [79.9868, 14.4426]  // Nellore
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bengaluru-Mysuru Expressway (NH 275)",
        "route": "Kengeri to Mysuru Ring Road",
        "type": "Expressway",
        "length_approx_km": 118
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.4612, 12.8912], // Kengeri (Bengaluru)
          [77.2145, 12.7160], // Ramanagara
          [77.1420, 12.6214], // Channapatna
          [76.8845, 12.5228], // Mandya
          [76.6950, 12.3610], // Srirangapatna
          [76.6436, 12.3420]  // Mysuru Outer Ring Road
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Leh-Manali Highway (Scenic High-Altitude Route)",
        "route": "Manali to Keylong via Atal Tunnel",
        "type": "Strategic Highway",
        "length_approx_km": 75
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.1887, 32.2396], // Manali
          [77.1645, 32.3612], // Solang Valley
          [77.1312, 32.4014], // Atal Tunnel (South Portal)
          [77.1610, 32.4820], // Atal Tunnel (North Portal / Sissu)
          [77.2014, 32.5310], // Tandi (Chandra-Bhaga Confluence)
          [77.1702, 32.5714]  // Keylong
        ]
      }
    }
  ]
};



const polygonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Odisha",
        "type": "State",
        "capital": "Bhubaneswar"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [83.7500, 22.3500], // North-West border near Chhattisgarh
            [86.5000, 22.5000], // North-East border near Jharkhand/West Bengal
            [87.4500, 21.6000], // Northern Coastline (Baleshwar)
            [86.7000, 20.2500], // Eastern Coastline (Paradip)
            [85.2000, 19.3000], // Southern Coastline (Ganjam/Chilika)
            [84.7500, 19.0000], // Coastal border with Andhra Pradesh
            [82.5000, 18.0000], // South-West corner (Malkangiri)
            [81.4000, 18.2500], // Western tip
            [82.6500, 21.0000], // Western border running north
            [83.7500, 22.3500]  // Loop closed back to start
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Maharashtra",
        "type": "State",
        "capital": "Mumbai"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.6500, 20.1500], // North Konkan Coast (near Gujarat border)
            [74.5000, 22.0000], // Northern border along Satpura range
            [76.0000, 21.5000], // North-Central border (near MP)
            [78.5000, 21.7500], // North-Eastern boundary
            [80.9000, 21.4000], // Far East boundary (Gondia region)
            [80.3000, 18.7500], // South-East border (Gadchiroli/Telangana bound)
            [77.8000, 17.5000], // Southern border with Karnataka
            [74.1000, 15.8000], // South Konkan Coast (near Goa border)
            [73.3000, 17.0000], // Coastline going north (Ratnagiri)
            [72.8000, 19.0000], // Coastline near Mumbai
            [72.6500, 20.1500]  // Loop closed back to start
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kolkata",
        "type": "Metropolitan City / District",
        "state": "West Bengal"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [88.3500, 22.6500], // North (Cossipur/Baranagar area)
            [88.4300, 22.6000], // North-East (Salt Lake/New Town bounds)
            [88.4100, 22.4800], // South-East (Bypass/Garia bounds)
            [88.3400, 22.4500], // South (Jadavpur/Behala bounds)
            [88.2800, 22.5000], // South-West (Garden Reach area along Hooghly river)
            [88.3200, 22.5800], // West (Riverfront / Howrah Bridge side)
            [88.3500, 22.6500]  // Loop closed back to start
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Chennai",
        "type": "Metropolitan City / District",
        "state": "Tamil Nadu"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [80.3000, 13.2500], // North Coast (Ennore area)
            [80.3300, 13.1500], // East Coastline (Marina Beach / Bay of Bengal)
            [80.2700, 12.9000], // South-East Coast (Sholinganallur / ECR)
            [80.1800, 12.9300], // South-West (Tambaram / Perungalathur bounds)
            [80.1200, 13.0500], // West (Poonamallee / Ambattur bounds)
            [80.2000, 13.2000], // North-West (Madhavaram boundary)
            [80.3000, 13.2500]  // Loop closed back to start
          ]
        ]
      }
    }
  ]
};

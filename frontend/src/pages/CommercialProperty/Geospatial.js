import React, { useEffect, useRef, useState } from 'react';
import { Checkbox, Radio, Button, Card, Input } from 'antd';
import {
    Container,
    ContentWrapper,
    LabelRow,
    Label,
    TextSection,
    Sidebar,
    ButtonRow,
} from "../../styles/components/FormControl/index";
const { TextArea } = Input;

const WildfireRiskDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('map');
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // References to store map elements
  const mapInstanceRef = useRef(null);
  const countyCirclesRef = useRef([]);
  const countyLabelsRef = useRef([]);
  const claimMarkersRef = useRef([]);
  const eventsMarkersRef = useRef([]);
  const eventCirclesRef = useRef([]);
  const totalSummaryMarkerRef = useRef(null);
  const totalImpactRef = useRef(0);

  useEffect(() => {
    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWaSzhNVYhvg3EGSaWSzqMlj8xyCSE9qM&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Define global initMap function
      window.initMap = () => {
        setMapLoaded(true);
      };

      return () => {
        document.head.removeChild(script);
        delete window.initMap;
      };
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      initializeMap();
    }
  }, [mapLoaded]);

  const initializeMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 39.8283, lng: -98.5795 },
      zoom: 4
    });
    
    mapInstanceRef.current = map;
    
    // Reference to counters for initialization states
    let countiesReady = false;
    let claimsReady = false;
    let eventsReady = false;
    
    const ns = "http://www.opengis.net/kml/2.2";
    const countyKML = 'https://mycrewaikmlfiles.s3.us-east-1.amazonaws.com/generated_kml/State_County.kml';
    const eventsKML = 'https://mycrewaikmlfiles.s3.us-east-1.amazonaws.com/generated_kml/events.kml';
    const claimsKML = 'https://mycrewaikmlfiles.s3.us-east-1.amazonaws.com/generated_kml/State_County_Claims.kml';

    // Load Events
    fetch(eventsKML)
      .then(res => res.text())
      .then(kmlText => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, 'text/xml');
        const placemarks = kml.getElementsByTagNameNS(ns, "Placemark");

        for (let p of placemarks) {
          const name = p.getElementsByTagNameNS(ns, "name")[0]?.textContent || "Unnamed Event";	
          const link = p.getElementsByTagNameNS(ns, "link")[0]?.textContent || "No link";	 
          const summary = p.getElementsByTagNameNS(ns, "summary")[0]?.textContent || "No summary";
          const Topic_level = p.getElementsByTagNameNS(ns, "Topic_level")[0]?.textContent || "No Topic";
          const styleUrl = p.getElementsByTagNameNS(ns, "styleUrl")[0]?.textContent || "#SevereStorms";
          
          const extendedData = p.getElementsByTagNameNS(ns, "ExtendedData")[0];
          let impact = " ";
          let claimCount = "0";		

          if (extendedData) {
            const dataTags = extendedData.getElementsByTagName("Data");
            for (let i = 0; i < dataTags.length; i++) {
              const nameAttr = dataTags[i].getAttribute("name");
              const valueNode = dataTags[i].getElementsByTagName("value")[0];

              if (nameAttr === "Impact" && valueNode) {
                impact = valueNode.textContent.trim();
              }
              
              if (nameAttr === "Impact" && valueNode) {
                const impactText = valueNode.textContent.trim();
                const match = impactText.match(/\$([\d.]+)\s*(M|B|million|billion)/i);

                if (match) {
                  let value = parseFloat(match[1]);
                  let unit = match[2].toLowerCase();

                  if (unit === "b" || unit === "billion") value *= 1000;
                  totalImpactRef.current += value;
                }
              }
              
              if (nameAttr === "claimCount" && valueNode) {
                claimCount = valueNode.textContent.trim();
              }
            }
          }

          const coordsText = p.getElementsByTagNameNS(ns, "coordinates")[0]?.textContent.trim();
          if (!coordsText) continue;

          const coordPairs = coordsText.split(/\s+/).map(c => {
            const [lng, lat] = c.split(',').map(Number);
            return { lat, lng };
          });

          const avgLat = coordPairs.reduce((sum, pt) => sum + pt.lat, 0) / coordPairs.length;
          const avgLng = coordPairs.reduce((sum, pt) => sum + pt.lng, 0) / coordPairs.length;

          const event = styleUrl.includes("Hurricane") ? "Hurricane"
                      : styleUrl.includes("Tornado") ? "Tornado"
                      : styleUrl.includes("Thunderstorm") ? "Thunderstorm"
                      : "Low";
          
          const fillColor = "grey";
          
          const radius = Topic_level === "Nation wide" ? 400000
                      : Topic_level === "Multiple states" ? 200000
                      : Topic_level === "State wide" ? 100000
                      : Topic_level === "County wide" ? 12000
                      : 12000;

          const eventcircle = new window.google.maps.Circle({
            center: { lat: avgLat, lng: avgLng },
            radius: radius,
            strokeColor: fillColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35,
            clickable: true
          });

          const eventMarker = new window.google.maps.Marker({
            position: { lat: avgLat, lng: avgLng },
            label: {
              text: ` `,
              color: "white"
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 20,
              fillColor: fillColor,
              fillOpacity: 0.8,
              strokeColor: "white",
              strokeWeight: 1,
              labelOrigin: new window.google.maps.Point(0, 0)
            },
            title: `${name} \nSource Link:${link}\nloss reported: ${impact}`,
            zIndex: window.google.maps.Marker.MAX_ZINDEX + 1
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <strong>${name}</strong><br/><br/>
              <strong><span style="color: red;">Impacted Areas: ${Topic_level}</span></strong><br/><br/>
              <strong><span style="color: teal;">${summary}</span></strong><br/><br/>
              <a href="${link}" target="_blank">${link}</a><br/><br/>
              <strong>Loss reported: ${impact}</strong>
            `
          });

          eventMarker.addListener("click", () => infoWindow.open(map, eventMarker));
          eventMarker.setMap(null);

          eventsMarkersRef.current.push(eventMarker);
          eventCirclesRef.current.push(eventcircle);      
        }

        eventsReady = true;
        if (countiesReady && claimsReady) {
          setupZoomHandler(map);
        }
      });

    // Load Counties
    fetch(countyKML)
      .then(res => res.text())
      .then(kmlText => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, 'text/xml');
        const placemarks = kml.getElementsByTagNameNS(ns, "Placemark");

        for (let p of placemarks) {
          const styleUrl = p.getElementsByTagNameNS(ns, "styleUrl")[0]?.textContent || "#Medium";
          const policyCount = parseInt(p.getElementsByTagName("policyCount")[0]?.textContent || "1");
          const name = p.getElementsByTagNameNS(ns, "name")[0]?.textContent || "";

          const coordsText = p.getElementsByTagNameNS(ns, "coordinates")[0]?.textContent.trim();
          if (!coordsText) continue;

          const coordPairs = coordsText.split(/\s+/).map(c => {
            const [lng, lat] = c.split(',').map(Number);
            return { lat, lng };
          });

          const avgLat = coordPairs.reduce((sum, pt) => sum + pt.lat, 0) / coordPairs.length;
          const avgLng = coordPairs.reduce((sum, pt) => sum + pt.lng, 0) / coordPairs.length;

          const impact = styleUrl.includes("VeryHigh") ? "Very High" : styleUrl.includes("High") ? "High" : "Medium";
          const fillColor = impact === "Very High" ? "#FF0000" : impact === "High" ? "#FFD700" : "#00CC66";

          const circle = new window.google.maps.Circle({
            center: { lat: avgLat, lng: avgLng },
            radius: 15000,
            strokeColor: fillColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.35,
            clickable: true,
            label: {
              text: `${policyCount}`,
              color: "white"
            }
          });

          const labelMarker = new window.google.maps.Marker({
            position: { lat: avgLat, lng: avgLng },
            label: {
              text: `${policyCount}`,
              color: "white"
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 20,
              fillColor: "blue",
              fillOpacity: 0.5,
              strokeColor: "black",
              strokeWeight: 1,
              labelOrigin: new window.google.maps.Point(0, 0)
            },
            title: `${name}\nPolicies: ${policyCount}`,
            zIndex: window.google.maps.Marker.MAX_ZINDEX + 1
          });

          labelMarker.setMap(map);
          countyCirclesRef.current.push(circle);
          countyLabelsRef.current.push(labelMarker);
        }

        countiesReady = true;
        if (eventsReady && claimsReady) {
          setupZoomHandler(map);
        }
      });

    // Load Claims
    fetch(claimsKML)
      .then(res => res.text())
      .then(kmlText => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, 'text/xml');
        const placemarks = kml.getElementsByTagNameNS(ns, "Placemark");

        for (let p of placemarks) {
          const name = p.getElementsByTagNameNS(ns, "name")[0]?.textContent || "";
          const desc = p.getElementsByTagNameNS(ns, "description")[0]?.textContent || "";
          const cause_of_loss = p.getElementsByTagNameNS(ns, "cause_of_loss")[0]?.textContent || "";
          const coordsText = p.getElementsByTagNameNS(ns, "coordinates")[0]?.textContent.trim();
          if (!coordsText) continue;

          const [lng, lat] = coordsText.split(",").map(Number);

          const marker = new window.google.maps.Marker({
            position: { lat, lng },
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            title: name,
            map: null
          });

          const infowindow = new window.google.maps.InfoWindow({
            content: `<div><strong><span style="color: blue;">Claim ID : ${name}</strong><br/><br/><strong><span style="color: red;">${desc}</strong><br/><br/><strong><span style="color: teal;">Cause of Loss : ${cause_of_loss}</strong></div>`
          });

          marker.addListener("click", () => infowindow.open(map, marker));
          claimMarkersRef.current.push(marker);
        }

        claimsReady = true;
        if (countiesReady && eventsReady) {
          setupZoomHandler(map);
        }
      });
  };

  const setupZoomHandler = (map) => {
    window.google.maps.event.addListener(map, 'zoom_changed', () => {
      const zoom = map.getZoom();
      
      // Always hide everything first
      countyCirclesRef.current.forEach(c => c.setMap(null));
      countyLabelsRef.current.forEach(l => l.setMap(null));
      claimMarkersRef.current.forEach(m => m.setMap(null));
      eventCirclesRef.current.forEach(c => c.setMap(null));
      eventsMarkersRef.current.forEach(m => m.setMap(null));
      if (totalSummaryMarkerRef.current) totalSummaryMarkerRef.current.setMap(null);

      // Show based on zoom level
      if (zoom < 4) {
        // Show only the national summary marker
        if (!totalSummaryMarkerRef.current) {
          const totalLoss = (totalImpactRef.current / 1000).toFixed(1);
          totalSummaryMarkerRef.current = new window.google.maps.Marker({
            position: { lat: 39.5, lng: -98.35 },
            map,
            label: {
              text: `$${totalLoss}B`,
              color: "white",
              fontSize: "14px",
              fontWeight: "bold"
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 34,
              fillColor: "brown",
              fillOpacity: 0.7,
              strokeColor: "black",
              strokeWeight: 2
            },
            zIndex: window.google.maps.Marker.MAX_ZINDEX + 2
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `<strong>All events total loss:</strong><br/>$${totalLoss}B<br/>Across all major weather events`
          });

          totalSummaryMarkerRef.current.addListener("click", () => {
            infoWindow.open(map, totalSummaryMarkerRef.current);
          });
        } else {
          totalSummaryMarkerRef.current.setMap(map);
        }
      }
      else if (zoom >= 6 && zoom < 7) {
        eventsMarkersRef.current.forEach(m => m.setMap(map));
        eventCirclesRef.current.forEach(c => c.setMap(map));
        countyCirclesRef.current.forEach(c => c.setMap(null));	  
      }
      else if (zoom >= 7 && zoom < 9) {
        eventsMarkersRef.current.forEach(m => m.setMap(map));
        eventCirclesRef.current.forEach(c => c.setMap(map));
        countyCirclesRef.current.forEach(c => c.setMap(map));
        countyLabelsRef.current.forEach(l => l.setMap(map));
        claimMarkersRef.current.forEach(m => m.setMap(map));
      }
      else if (zoom >= 9 && zoom < 11) {
        eventsMarkersRef.current.forEach(m => m.setMap(map));
        eventCirclesRef.current.forEach(c => c.setMap(map));
        countyCirclesRef.current.forEach(c => c.setMap(map));
        countyLabelsRef.current.forEach(l => l.setMap(map));
        claimMarkersRef.current.forEach(m => m.setMap(map));
      }
      else if (zoom >= 11) {
        countyCirclesRef.current.forEach(c => c.setMap(map));
        countyLabelsRef.current.forEach(l => l.setMap(map));
        claimMarkersRef.current.forEach(m => m.setMap(map));
        eventsMarkersRef.current.forEach(m => m.setMap(null));
        eventCirclesRef.current.forEach(c => c.setMap(map));
      }
    });
  };
  
  return (
    <div className="flex flex-col p-4 bg-gray-50 h-screen">
      {/* Header */}
      <div className="flex items-center mb-4">
        <ContentWrapper>
          <LabelRow>
            <Label>Ask AI Agent</Label>
            <Input
              placeholder="Type your question here"
              defaultValue=" List the wildfire events and crimes associated with California and Los Angeles for the last 5 years"
            />
          </LabelRow>
          <div className="flex mb-4 items-center">
            <Radio className="mr-4">Include Portfolio data</Radio>
            <Checkbox className="mr-4 bg-blue-500 text-white px-2 py-1 rounded">Policy</Checkbox>
            <Checkbox className="mr-4">Claims</Checkbox>
          </div>
          <div className="bg-white p-2" style={{marginTop:'20px', marginBottom:'10px'}}>
            <Button 
              type={selectedTab === 'map' ? 'primary' : 'default'} 
              onClick={() => setSelectedTab('map')}
              className="mr-2"
              style={{marginRight:'10px'}}
            >
              Map
            </Button>
            <Button 
              type={selectedTab === 'satellite' ? 'primary' : 'default'} 
              onClick={() => setSelectedTab('satellite')}
            >
              Satellite
            </Button>
          </div>
          <TextSection>
            <Card rows={6} style={{width:'850px', height:'400px'}}>
              <div className="h-64 w-full">
                {/* Google Maps container */}
                <div ref={mapRef} style={{ width: '100%', height: '350px' }} />
              </div>
            </Card>
            <Card style={{width:'300px'}}>
              <p>Information Sources</p>
            </Card>
          </TextSection>
          <Card className="mb-4 h-64 flex items-center justify-center" style={{marginTop:'20px', height:'300px'}}>
            <div className="text-center">
              <Label>Insights</Label>
            </div>
          </Card>
          <ButtonRow>
            <Button type="primary">Add to Insights</Button>
          </ButtonRow>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default WildfireRiskDashboard;

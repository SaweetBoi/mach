// product.js
const products = {
  excavator: {
    name: "Hydraulic Excavator",
    description: "High-performance hydraulic excavator built for heavy-duty construction.",
    image: "https://picsum.photos/seed/excavator/600/400",
    specs: [
      { label: "Power", value: "350 HP" },
      { label: "Operating Weight", value: "22 tons" },
      { label: "Engine", value: "Turbocharged Diesel" },
      { label: "Fuel Capacity", value: "400 L" },
      { label: "Bucket Capacity", value: "1.2 m³" },
      { label: "Max Dig Depth", value: "6.7 m" },
      { label: "Max Reach", value: "9.5 m" },
      { label: "Transmission", value: "Hydrostatic" }
    ]
  },
  bulldozer: {
    name: "Bulldozer",
    description: "Powerful bulldozer designed for large-scale earthmoving and mining.",
    image: "https://picsum.photos/seed/bulldozer/600/400",
    specs: [
      { label: "Power", value: "410 HP" },
      { label: "Operating Weight", value: "27 tons" },
      { label: "Engine", value: "V8 Diesel" },
      { label: "Fuel Capacity", value: "500 L" },
      { label: "Blade Width", value: "3.4 m" },
      { label: "Ground Pressure", value: "65 kPa" },
      { label: "Max Speed", value: "11 km/h" },
      { label: "Track Width", value: "600 mm" }
    ]
  },
  forklift: {
    name: "Forklift",
    description: "Durable forklift for warehouse and industrial applications.",
    image: "https://picsum.photos/seed/forklift/600/400",
    specs: [
      { label: "Power", value: "55 HP" },
      { label: "Load Capacity", value: "5 tons" },
      { label: "Lift Height", value: "6 m" },
      { label: "Engine", value: "Diesel / Electric" },
      { label: "Turning Radius", value: "2.1 m" },
      { label: "Fuel Capacity", value: "120 L" },
      { label: "Transmission", value: "Automatic" },
      { label: "Tyre Type", value: "Pneumatic" }
    ]
  },
  crane: {
    name: "Tower Crane",
    description: "Strong and reliable tower crane for construction projects.",
    image: "https://picsum.photos/seed/crane/600/400",
    specs: [
      { label: "Max Load Capacity", value: "20 tons" },
      { label: "Jib Length", value: "70 m" },
      { label: "Height Under Hook", value: "60 m" },
      { label: "Engine", value: "Electric Motor" },
      { label: "Power Supply", value: "400V / 50Hz" },
      { label: "Max Speed", value: "2.5 m/s" },
      { label: "Counterweight", value: "12 tons" },
      { label: "Rotation", value: "360° Continuous" }
    ]
  },
  compactor: {
    name: "Soil Compactor",
    description: "Efficient soil compactor for road and foundation works.",
    image: "https://picsum.photos/seed/compactor/600/400",
    specs: [
      { label: "Power", value: "180 HP" },
      { label: "Operating Weight", value: "11 tons" },
      { label: "Drum Width", value: "2.1 m" },
      { label: "Frequency", value: "32 Hz" },
      { label: "Amplitude", value: "1.9 mm" },
      { label: "Fuel Capacity", value: "250 L" },
      { label: "Max Speed", value: "12 km/h" },
      { label: "Vibration Force", value: "320 kN" }
    ]
  }
};

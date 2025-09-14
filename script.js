// Product data with Unsplash images
const products = {
  forklift: {
    id: "forklift",
    name: "Forklift X200",
    tagline: "Heavy-duty warehouse forklift",
    image: "https://images.unsplash.com/photo-1592928302369-91fa4b404585?auto=format&fit=crop&w=1000&q=80",
    description: "A heavy-duty forklift designed for maximum warehouse efficiency. Built for safety and power in tight spaces.",
    specs: [
      "Load Capacity: 5000kg",
      "Engine: Electric/Diesel options",
      "Safety Features: Auto-brake system"
    ]
  },
  crane: {
    id: "crane",
    name: "Crane Titan 500",
    tagline: "Industrial tower crane",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
    description: "High-performance crane for industrial lifting and construction projects. Smooth 360° rotation and precision controls.",
    specs: [
      "Max Height: 50m",
      "Max Load: 20 tons",
      "Rotation: 360° continuous"
    ]
  },
  excavator: {
    id: "excavator",
    name: "Excavator EX90",
    tagline: "Dig deeper, faster",
    image: "https://images.unsplash.com/photo-1625649314944-28a7a8b5d01b?auto=format&fit=crop&w=1000&q=80",
    description: "Powerful excavator designed for mining, construction, and earthmoving. Built for endurance in rugged terrain.",
    specs: [
      "Max Dig Depth: 10m",
      "Engine Power: 250HP",
      "Hydraulic System: High-efficiency"
    ]
  },
  bulldozer: {
    id: "bulldozer",
    name: "Bulldozer D7",
    tagline: "Push limits with raw power",
    image: "https://images.unsplash.com/photo-1611095965826-568f26dfec66?auto=format&fit=crop&w=1000&q=80",
    description: "Heavy-duty bulldozer built for moving large volumes of earth, demolition, and site preparation.",
    specs: [
      "Blade Width: 4m",
      "Engine: 300HP Turbo Diesel",
      "Track Type: Heavy-duty reinforced steel"
    ]
  },
  loader: {
    id: "loader",
    name: "Wheel Loader L350",
    tagline: "Massive loads, minimal effort",
    image: "https://images.unsplash.com/photo-1625649314797-c024d1d9f1bb?auto=format&fit=crop&w=1000&q=80",
    description: "Wheel loader for construction, mining, and industrial use. Efficient in carrying and loading heavy materials.",
    specs: [
      "Bucket Capacity: 5m³",
      "Load Capacity: 10 tons",
      "Fuel Efficiency: Advanced EcoMode"
    ]
  },
  dumptruck: {
    id: "dumptruck",
    name: "Dump Truck DT900",
    tagline: "Carry the load with confidence",
    image: "https://images.unsplash.com/photo-1581091870627-3b2f1e0eec7f?auto=format&fit=crop&w=1000&q=80",
    description: "High-capacity dump truck designed for mining and construction sites. Built for durability under extreme conditions.",
    specs: [
      "Payload: 30 tons",
      "Engine: 500HP",
      "Bed Volume: 20m³"
    ]
  },
  roadroller: {
    id: "roadroller",
    name: "Road Roller RR700",
    tagline: "Smooth roads, guaranteed",
    image: "https://images.unsplash.com/photo-1593642633279-1796119d5482?auto=format&fit=crop&w=1000&q=80",
    description: "Road roller designed for asphalt and soil compaction, ensuring smooth and durable road surfaces.",
    specs: [
      "Drum Width: 2.5m",
      "Compaction Force: 20 tons",
      "Vibration: Dual-mode"
    ]
  },
  backhoe: {
    id: "backhoe",
    name: "Backhoe Loader BHX50",
    tagline: "Versatility redefined",
    image: "https://images.unsplash.com/photo-1625649314946-51f9b8a2a2bb?auto=format&fit=crop&w=1000&q=80",
    description: "Multi-purpose backhoe loader for digging, loading, and lifting. Compact design with powerful hydraulics.",
    specs: [
      "Dig Depth: 6m",
      "Loader Capacity: 2 tons",
      "4WD All-terrain"
    ]
  },
  skidsteer: {
    id: "skidsteer",
    name: "Skid Steer S150",
    tagline: "Small but mighty",
    image: "https://images.unsplash.com/photo-1600741741302-9f0e5e2cf63f?auto=format&fit=crop&w=1000&q=80",
    description: "Compact skid steer loader for landscaping, construction, and material handling in confined spaces.",
    specs: [
      "Rated Operating Capacity: 800kg",
      "Engine: 75HP",
      "Attachment Options: 30+"
    ]
  },
  telehandler: {
    id: "telehandler",
    name: "Telehandler TH330",
    tagline: "Reach new heights",
    image: "https://images.unsplash.com/photo-1581090700227-4c1c7e1b05a2?auto=format&fit=crop&w=1000&q=80",
    description: "Telescopic handler for precision lifting and reach in construction and agriculture.",
    specs: [
      "Max Lift Height: 18m",
      "Max Load: 3.5 tons",
      "Stabilizers: Automatic leveling"
    ]
  }
};

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Render product
if (products[id]) {
  const product = products[id];
  document.getElementById("product-container").innerHTML = `
    <div data-aos="fade-up" class="animate-fade-in">
      <img src="${product.image}" alt="${product.name}" class="rounded-2xl w-full h-96 object-cover mb-8 shadow-lg">
      <h1 class="text-4xl font-bold mb-2">${product.name}</h1>
      <p class="text-xl text-gray-400 mb-6">${product.tagline}</p>
      <p class="text-gray-300 text-lg mb-6">${product.description}</p>
      <h2 class="text-2xl font-semibold mb-3">Specifications</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-300">
        ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
      </ul>
      <a href="index.html" class="inline-block mt-8 bg-gray-800 px-6 py-3 rounded-xl hover:bg-gray-700 transition">
        ← Back to Catalogue
      </a>
    </div>
  `;
} else {
  document.getElementById("product-container").innerHTML = `
    <p class="text-red-400 text-xl">Product not found.</p>
    <a href="index.html" class="underline">Go back</a>
  `;
}

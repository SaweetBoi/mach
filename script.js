// script.js — product data + renderer + small animations
// Add / update product images in /images/ folder (filenames listed below)

const products = {
  forklift: {
    id: "forklift",
    name: "Forklift X200",
    tagline: "Heavy-duty warehouse forklift",
    image: "images/forklift.jpg",
    description: "High-capacity forklift engineered for reliability and operator comfort. Ideal for indoor and outdoor warehouse work.",
    specs: [
      "Load Capacity: 5,000 kg",
      "Power: Electric / Diesel options",
      "Lift Height: 3.8 m",
      "Warranty: 2 years standard"
    ]
  },
  crane: {
    id: "crane",
    name: "Crane Titan 500",
    tagline: "Industrial tower crane",
    image: "images/crane.jpg",
    description: "Robust crane with precise controls, built to manage heavy loads at large construction sites.",
    specs: ["Max Height: 50 m", "Max Load: 20 tons", "360° Rotation"]
  },
  excavator: {
    id: "excavator",
    name: "Excavator E-750",
    tagline: "Powerful digging and material handling",
    image: "images/excavator.jpg",
    description: "A high-performance excavator suitable for earthworks, mining and heavy construction.",
    specs: ["Operating Weight: 75,000 kg", "Bucket Capacity: 3.2 m³", "Engine: 350 HP"]
  },
  bulldozer: {
    id: "bulldozer",
    name: "Bulldozer BD-400",
    tagline: "High traction earthmoving",
    image: "images/bulldozer.jpg",
    description: "Reliable bulldozer with optimized blade control and durable undercarriage for tough jobs.",
    specs: ["Engine Power: 300 HP", "Blade Width: 4.2 m", "Operating Weight: 42,000 kg"]
  },
  loader: {
    id: "loader",
    name: "Wheel Loader WL-350",
    tagline: "Fast, efficient loading",
    image: "images/loader.jpg",
    description: "Efficient wheel loader with responsive hydraulics and low fuel consumption.",
    specs: ["Bucket: 2.5 m³", "Engine: 200 HP", "Rated Load: 5,500 kg"]
  },
  dumptruck: {
    id: "dumptruck",
    name: "Dump Truck DT-40",
    tagline: "Heavy-haul transport",
    image: "images/dumptruck.jpg",
    description: "Built for long shifts and heavy payloads — durable chassis and easy maintenance.",
    specs: ["Payload: 40 tons", "Engine: 450 HP", "Transmission: Automated Manual"]
  },
  roller: {
    id: "roller",
    name: "Road Roller RR-220",
    tagline: "Precision compaction",
    image: "images/roller.jpg",
    description: "High-efficiency roller offering consistent compaction with reduced passes.",
    specs: ["Operating Weight: 22,000 kg", "Drum Width: 2.2 m", "Vibration Frequency: 30 Hz"]
  },
  backhoe: {
    id: "backhoe",
    name: "Backhoe Loader BH-120",
    tagline: "Versatile digging and loading",
    image: "images/backhoe.jpg",
    description: "Compact, powerful backhoe loader for construction and utilities work.",
    specs: ["Engine: 120 HP", "Bucket Capacity: 1.1 m³", "Backhoe Dig Depth: 4.8 m"]
  },
  skid: {
    id: "skid",
    name: "Skid Steer SS-75",
    tagline: "Agile multi-purpose machine",
    image: "images/skid.jpg",
    description: "Small footprint, huge utility — ideal for tight sites and multiple attachments.",
    specs: ["Operating Weight: 3,500 kg", "Engine: 75 HP", "Quick-attach loader system"]
  },
  telehandler: {
    id: "telehandler",
    name: "Telehandler THT-35",
    tagline: "Reach and lift with precision",
    image: "images/telehandler.jpg",
    description: "Telehandler with long reach, stable lifting and multiple attachment options.",
    specs: ["Lift Capacity: 3,500 kg", "Max Reach: 7.5 m", "Stability Control System"]
  }
};

// Utility: safe image fallback (in case image missing)
function imageOrPlaceholder(src) {
  // You can provide a placeholder path or return src directly
  return src;
}

// Render product grid on index.html
function renderIndex() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  // clear
  grid.innerHTML = '';

  Object.values(products).forEach((p, i) => {
    const card = document.createElement('a');
    card.href = `product.html?id=${encodeURIComponent(p.id)}`;
    card.className = "group block";

    card.innerHTML = `
      <div data-aos="fade-up" data-aos-delay="${i*50}" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
        <div class="h-56 md:h-48 relative overflow-hidden">
          <img src="${imageOrPlaceholder(p.image)}" alt="${p.name}" class="w-full h-full object-cover product-card-img">
        </div>
        <div class="p-5 bg-white">
          <h3 class="text-lg font-semibold">${p.name}</h3>
          <p class="text-sm text-gray-500 mt-1">${p.tagline}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // init AOS (if available)
  if (window.AOS) AOS.refresh();
}

// Render single product page (product.html)
function renderProduct() {
  const container = document.getElementById('product-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = products[id];

  if (!p) {
    container.innerHTML = `<div class="text-center py-20"><h2 class="text-2xl font-semibold text-red-600">Product not found</h2><p class="mt-4"><a href="index.html" class="text-blue-600 underline">Back to catalogue</a></p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div data-aos="fade-right">
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img src="${imageOrPlaceholder(p.image)}" alt="${p.name}" class="w-full h-96 object-cover">
        </div>
      </div>

      <div data-aos="fade-left" class="pt-2">
        <h1 class="text-3xl md:text-4xl font-bold mb-3">${p.name}</h1>
        <p class="text-gray-600 mb-6">${p.description}</p>

        <h4 class="text-lg font-semibold mb-2">Key specifications</h4>
        <ul class="list-disc pl-5 text-gray-700 mb-6">
          ${p.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>

        <div class="flex gap-3">
          <a href="index.html" class="inline-block px-5 py-3 border rounded-lg hover:bg-gray-100 transition">← Back to catalogue</a>
          <button onclick="alert('Inquiry demo — replace with real form')" class="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-orange-500 transition">Inquire</button>
        </div>
      </div>
    </div>
  `;

  // small GSAP entrance
  if (window.gsap) {
    gsap.from(container.querySelectorAll('[data-aos]'), { y: 25, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
  }
  if (window.AOS) AOS.refresh();
}

// Initialize AOS + minor GSAP page load for index
(function init() {
  // Wait for AOS library to be available then init
  function tryInitAOS() {
    if (window.AOS) {
      AOS.init({ duration: 900, once: true });
    } else {
      setTimeout(tryInitAOS, 100);
    }
  }
  tryInitAOS();

  // If on index.html, render grid; if on product.html, render product
  document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/').pop().toLowerCase();
    if (path === '' || path === 'index.html') {
      renderIndex();
      // small GSAP hero entrance if available
      setTimeout(() => {
        if (window.gsap) {
          gsap.from('.hero-min h1, .hero-min p, .hero-min a', { y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out' });
        }
      }, 200);
    } else if (path === 'product.html') {
      renderProduct();
    } else {
      // other pages fallback
      if (document.getElementById('product-grid')) renderIndex();
    }
  });
})();

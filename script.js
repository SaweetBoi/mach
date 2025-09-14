// Product data
const products = {
  forklift: {
    name: "Forklift",
    image: "images/forklift.jpg",
    description: "A heavy-duty forklift designed for maximum warehouse efficiency.",
    specs: [
      "Load Capacity: 5000kg",
      "Engine: Electric/Diesel options",
      "Safety Features: Auto-brake system"
    ]
  },
  crane: {
    name: "Crane",
    image: "images/crane.jpg",
    description: "High-performance crane for industrial lifting and construction projects.",
    specs: [
      "Max Height: 50m",
      "Max Load: 20 tons",
      "360° Rotation"
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
    <div class="animate-fade-in">
      <img src="${product.image}" alt="${product.name}" class="rounded-2xl w-full h-96 object-cover mb-8 shadow-lg">
      <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
      <p class="text-gray-400 text-lg mb-6">${product.description}</p>
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

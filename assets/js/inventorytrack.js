// Mock inventory data
const inventory = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    category: 'medication',
    stock: 500,
    minStock: 100,
    criticalStock: 50,
    unitPrice: 0.5,
    batches: [
      { id: 'B001', quantity: 200, expiry: '2024-12-31', manufacturer: 'PharmaCo' },
      { id: 'B002', quantity: 300, expiry: '2025-06-30', manufacturer: 'PharmaCo' }
    ]
  },
  {
    id: 2,
    name: 'Surgical Masks',
    category: 'supplies',
    stock: 1000,
    minStock: 500,
    criticalStock: 200,
    unitPrice: 0.2,
    batches: [
      { id: 'B003', quantity: 600, expiry: '2025-12-31', manufacturer: 'MedSupply' },
      { id: 'B004', quantity: 400, expiry: '2026-01-31', manufacturer: 'MedSupply' }
    ]
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    category: 'equipment',
    stock: 15,
    minStock: 10,
    criticalStock: 5,
    unitPrice: 50,
    batches: [
      { id: 'B005', quantity: 8, expiry: null, manufacturer: 'MedTech' },
      { id: 'B006', quantity: 7, expiry: null, manufacturer: 'MedTech' }
    ]
  }
];

// Render inventory table
function renderInventory(items = inventory) {
  const tbody = document.getElementById('inventoryTableBody');
  tbody.innerHTML = '';

  items.forEach(item => {
    const stockStatus = getStockStatus(item);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${capitalizeFirstLetter(item.category)}</td>
      <td>
        <span class="stock-level stock-${stockStatus}">
          ${item.stock} units
        </span>
      </td>
      <td>$${item.unitPrice.toFixed(2)}</td>
      <td>
        <button class="btn btn-primary" onclick="viewBatchInfo(${item.id})">
          Batch Info
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Get stock status
function getStockStatus(item) {
  if (item.stock <= item.criticalStock) return 'critical';
  if (item.stock <= item.minStock) return 'low';
  return 'normal';
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// View batch information
function viewBatchInfo(itemId) {
  const item = inventory.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('batchModal');
  const content = document.getElementById('batchModalContent');

  content.innerHTML = `
    <h2>${item.name}</h2>
    <p><strong>Total Stock:</strong> ${item.stock} units</p>
    <p><strong>Minimum Stock Level:</strong> ${item.minStock} units</p>
    <p><strong>Critical Stock Level:</strong> ${item.criticalStock} units</p>

    <div class="batch-info">
      <h3>Batch Information</h3>
      <div class="batch-grid">
        ${item.batches.map(batch => `
          <div class="batch-card">
            <p><strong>Batch ID:</strong> ${batch.id}</p>
            <p><strong>Quantity:</strong> ${batch.quantity} units</p>
            <p><strong>Manufacturer:</strong> ${batch.manufacturer}</p>
            ${batch.expiry ? `<p><strong>Expiry:</strong> ${batch.expiry}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.style.display = 'block';
}

// Filter inventory
function filterInventory() {
  const category = document.getElementById('categoryFilter').value;
  const stockLevel = document.getElementById('stockFilter').value;
  const search = document.getElementById('searchInput').value.toLowerCase();

  const filtered = inventory.filter(item => {
    const matchesCategory = !category || item.category === category;
    const matchesStock = !stockLevel || getStockStatus(item) === stockLevel;
    const matchesSearch = !search || 
      item.name.toLowerCase().includes(search) || 
      item.category.toLowerCase().includes(search);

    return matchesCategory && matchesStock && matchesSearch;
  });

  renderInventory(filtered);
}

// Wait for DOM to load before initializing
document.addEventListener('DOMContentLoaded', () => {
  // Close modal
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('batchModal').style.display = 'none';
  });

  // Add filter listeners
  document.getElementById('categoryFilter').addEventListener('change', filterInventory);
  document.getElementById('stockFilter').addEventListener('change', filterInventory);
  document.getElementById('searchInput').addEventListener('input', filterInventory);

  // Initial render
  renderInventory();
});

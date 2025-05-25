// Mock drug database
const drugDatabase = [
  { name: 'Amoxicillin', category: 'Antibiotic' },
  { name: 'Ibuprofen', category: 'Pain Relief' },
  { name: 'Omeprazole', category: 'Antacid' },
  { name: 'Lisinopril', category: 'Blood Pressure' },
  { name: 'Metformin', category: 'Diabetes' },
  { name: 'Simvastatin', category: 'Cholesterol' },
  { name: 'Sertraline', category: 'Antidepressant' },
  { name: 'Albuterol', category: 'Bronchodilator' }
];

// Drug search functionality
document.addEventListener('click', () => {
  const suggestions = document.querySelectorAll('.drug-suggestions');
  suggestions.forEach(s => s.style.display = 'none');
});

function setupDrugSearch(drugItem) {
  const searchInput = drugItem.querySelector('.drug-search');
  const suggestions = drugItem.querySelector('.drug-suggestions');

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const matches = drugDatabase.filter(drug =>
      drug.name.toLowerCase().includes(value) ||
      drug.category.toLowerCase().includes(value)
    );

    suggestions.innerHTML = matches.map(drug =>
      `<div class="drug-suggestion">
        <strong>${drug.name}</strong> - ${drug.category}
      </div>`
    ).join('');

    suggestions.style.display = matches.length ? 'block' : 'none';
  });

  suggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('drug-suggestion')) {
      searchInput.value = e.target.querySelector('strong').textContent;
      suggestions.style.display = 'none';
    }
  });
}

// Add new drug item
function addDrugItem() {
  const drugList = document.getElementById('drugList');
  const newItem = document.createElement('div');
  newItem.className = 'drug-item';
  newItem.innerHTML = `
    <div class="form-group" style="position: relative;">
      <input type="text" class="form-control drug-search" placeholder="Search medication..." required>
      <div class="drug-suggestions"></div>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Dosage" required>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Duration" required>
    </div>
    <button type="button" class="btn btn-primary" onclick="removeDrugItem(this)">-</button>
  `;
  drugList.appendChild(newItem);
  setupDrugSearch(newItem);
}

function removeDrugItem(button) {
  button.parentElement.remove();
}

// Signature pad setup
const canvas = document.getElementById('signaturePad');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000';
}

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

function clearSignature() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Touch support
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
});

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Setup canvas
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  // Form submission and preview
  document.getElementById('prescriptionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const preview = document.getElementById('prescriptionPreview');
    const previewContent = document.getElementById('previewContent');

    previewContent.innerHTML = `
      <p><strong>Patient:</strong> ${formData.get('patient-name')}</p>
      <p><strong>Patient ID:</strong> ${formData.get('patient-id')}</p>
      <p><strong>Diagnosis:</strong> ${formData.get('diagnosis')}</p>
      <h3>Medications:</h3>
      <ul>
        ${Array.from(document.querySelectorAll('.drug-item')).map(item => `
          <li>
            ${item.querySelector('.drug-search').value} -
            ${item.querySelector('input[placeholder="Dosage"]').value} -
            ${item.querySelector('input[placeholder="Duration"]').value}
          </li>
        `).join('')}
      </ul>
      <p><strong>Instructions:</strong> ${formData.get('instructions')}</p>
    `;

    preview.style.display = 'block';
  });

  // Initialize search for first item
  setupDrugSearch(document.querySelector('.drug-item'));
});

// Mock data for available tests
const availableTests = [
  { id: 1, name: 'Complete Blood Count', category: 'Hematology', price: 50 },
  { id: 2, name: 'Lipid Profile', category: 'Biochemistry', price: 75 },
  { id: 3, name: 'Thyroid Function', category: 'Endocrinology', price: 100 },
  { id: 4, name: 'Liver Function', category: 'Biochemistry', price: 85 },
  { id: 5, name: 'Kidney Function', category: 'Biochemistry', price: 90 },
  { id: 6, name: 'Blood Sugar', category: 'Biochemistry', price: 40 }
];

// Mock test results
const testResults = [
  {
    id: 1,
    testName: 'Complete Blood Count',
    date: '2024-01-15',
    status: 'completed',
    results: {
      'Hemoglobin': '14.5 g/dL',
      'WBC Count': '7500/μL',
      'RBC Count': '5.0 million/μL',
      'Platelets': '250,000/μL'
    }
  },
  {
    id: 2,
    testName: 'Lipid Profile',
    date: '2024-01-18',
    status: 'pending',
    results: null
  }
];

// Render available tests
function renderAvailableTests() {
  const container = document.getElementById('testSelection');
  availableTests.forEach(test => {
    const card = document.createElement('div');
    card.className = 'card test-card';
    card.innerHTML = `
      <div class="form-group">
        <label class="form-label">
          <input type="checkbox" name="test_${test.id}" value="${test.id}">
          ${test.name}
        </label>
        <p>Category: ${test.category}</p>
        <p>Price: $${test.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Generate barcode
function generateBarcode(requestId) {
  const barcodeSection = document.getElementById('barcodeSection');
  const barcodeDisplay = document.getElementById('barcodeDisplay');

  const barcode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  barcode.setAttribute('width', '200');
  barcode.setAttribute('height', '100');
  barcode.innerHTML = `
    <rect x="10" y="10" width="180" height="60" fill="white" stroke="black"/>
    <text x="100" y="50" text-anchor="middle">${requestId}</text>
  `;

  barcodeDisplay.innerHTML = '';
  barcodeDisplay.appendChild(barcode);
  barcodeSection.style.display = 'block';
}

// Render test results
function renderTestResults() {
  const tbody = document.getElementById('resultsTableBody');
  tbody.innerHTML = '';

  testResults.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.testName}</td>
      <td>${result.date}</td>
      <td>
        <span class="status-badge status-${result.status}">
          ${result.status.charAt(0).toUpperCase() + result.status.slice(1)}
        </span>
      </td>
      <td>
        <button class="btn btn-primary" 
                onclick="viewResults(${result.id})"
                ${result.status === 'pending' ? 'disabled' : ''}>
          View Results
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// View test results
function viewResults(resultId) {
  const result = testResults.find(r => r.id === resultId);
  if (!result || !result.results) return;

  const modal = document.getElementById('resultModal');
  const content = document.getElementById('resultModalContent');

  content.innerHTML = `
    <h2>${result.testName} Results</h2>
    <p><strong>Date:</strong> ${result.date}</p>
    <table class="results-table">
      ${Object.entries(result.results).map(([key, value]) => `
        <tr>
          <td><strong>${key}</strong></td>
          <td>${value}</td>
        </tr>
      `).join('')}
    </table>
  `;

  modal.style.display = 'block';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Close modal
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('resultModal').style.display = 'none';
  });

  // Form submission
  document.getElementById('testRequisitionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const requestId = 'REQ' + Date.now().toString().slice(-6);
    generateBarcode(requestId);
  });

  // Load data
  renderAvailableTests();
  renderTestResults();
});

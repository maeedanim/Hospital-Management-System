// Mock data for charges
const charges = [
  { description: 'Consultation Fee', quantity: 1, rate: 150 },
  { description: 'Laboratory Tests', quantity: 2, rate: 75 },
  { description: 'Medication', quantity: 1, rate: 200 },
  { description: 'Room Charges', quantity: 3, rate: 100 }
];

// Mock insurance providers
const insuranceProviders = [
  { name: 'HealthCare Plus', coverage: 0.8, id: 'HCP001' },
  { name: 'MediCover', coverage: 0.7, id: 'MC001' },
  { name: 'WellnessGuard', coverage: 0.75, id: 'WG001' }
];

// Render charge items
function renderCharges() {
  const chargeItems = document.getElementById('chargeItems');
  let subtotal = 0;

  charges.forEach(charge => {
    const amount = charge.quantity * charge.rate;
    subtotal += amount;

    const item = document.createElement('div');
    item.className = 'charge-item';
    item.innerHTML = `
      <div>${charge.description}</div>
      <div>${charge.quantity}</div>
      <div>$${charge.rate.toFixed(2)}</div>
      <div>$${amount.toFixed(2)}</div>
    `;
    chargeItems.appendChild(item);
  });

  updateTotals(subtotal);
}

// Render insurance options
function renderInsuranceOptions() {
  const container = document.getElementById('insuranceOptions');
  insuranceProviders.forEach(provider => {
    const card = document.createElement('div');
    card.className = 'insurance-card';
    card.dataset.coverage = provider.coverage;
    card.dataset.id = provider.id;
    card.innerHTML = `
      <h4>${provider.name}</h4>
      <p>Coverage: ${provider.coverage * 100}%</p>
      <p>Policy ID: ${provider.id}</p>
    `;
    card.addEventListener('click', () => selectInsurance(card));
    container.appendChild(card);
  });
}

// Select insurance provider
function selectInsurance(card) {
  document.querySelectorAll('.insurance-card').forEach(c => 
    c.classList.remove('selected'));
  card.classList.add('selected');
  
  const coverage = parseFloat(card.dataset.coverage);
  const subtotal = calculateSubtotal();
  updateTotals(subtotal, coverage);
}

// Calculate subtotal
function calculateSubtotal() {
  return charges.reduce((sum, charge) => 
    sum + (charge.quantity * charge.rate), 0);
}

// Update totals
function updateTotals(subtotal, insuranceCoverage = 0) {
  const insuranceAmount = subtotal * insuranceCoverage;
  const taxableAmount = subtotal - insuranceAmount;
  const tax = taxableAmount * 0.1;
  const total = taxableAmount + tax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('insuranceCoverage').textContent = 
    `-$${insuranceAmount.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('totalDue').textContent = `$${total.toFixed(2)}`;
}

// Setup payment method selection
function setupPaymentMethods() {
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => 
        m.classList.remove('selected'));
      method.classList.add('selected');
    });
  });
}

// Process payment
function setupPaymentProcessing() {
  document.getElementById('processPayment').addEventListener('click', () => {
    const selectedInsurance = document.querySelector('.insurance-card.selected');
    const selectedPayment = document.querySelector('.payment-method.selected');

    if (!selectedInsurance || !selectedPayment) {
      alert('Please select both insurance and payment method');
      return;
    }

    alert('Payment processed successfully!');
    // Typically, you'd send data to the server here
  });
}

// Initialize all on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderCharges();
  renderInsuranceOptions();
  setupPaymentMethods();
  setupPaymentProcessing();
});

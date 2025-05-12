// Mock claims data
const claims = [
  {
    id: 'CLM001',
    patientName: 'John Doe',
    patientId: 'P12345',
    provider: 'HealthCare Plus',
    amount: 1500,
    serviceDate: '2024-01-15',
    status: 'approved',
    timeline: [
      { step: 'Submitted', date: '2024-01-16' },
      { step: 'Reviewed', date: '2024-01-18' },
      { step: 'Approved', date: '2024-01-20' }
    ]
  },
  {
    id: 'CLM002',
    patientName: 'Jane Smith',
    patientId: 'P12346',
    provider: 'MediCover',
    amount: 2000,
    serviceDate: '2024-01-10',
    status: 'pending',
    timeline: [
      { step: 'Submitted', date: '2024-01-11' },
      { step: 'Reviewed', date: '2024-01-13' }
    ]
  },
  {
    id: 'CLM003',
    patientName: 'Mike Johnson',
    patientId: 'P12347',
    provider: 'WellnessGuard',
    amount: 1000,
    serviceDate: '2024-01-05',
    status: 'rejected',
    timeline: [
      { step: 'Submitted', date: '2024-01-06' },
      { step: 'Reviewed', date: '2024-01-08' },
      { step: 'Rejected', date: '2024-01-10' }
    ]
  }
];

// Render claims list
function renderClaims() {
  const claimsList = document.getElementById('claimsList');
  claimsList.innerHTML = '';

  claims.forEach(claim => {
    const card = document.createElement('div');
    card.className = 'card claim-card';

    const progressSteps = [
      { label: 'Submitted', icon: '1' },
      { label: 'Reviewed', icon: '2' },
      { label: claim.status === 'rejected' ? 'Rejected' : 'Approved', icon: '3' }
    ];

    const currentStep = claim.timeline.length;

    card.innerHTML = `
      <div class="form-row">
        <div>
          <h3>Claim #${claim.id}</h3>
          <p>${claim.patientName} (${claim.patientId})</p>
        </div>
        <div>
          <span class="claim-status status-${claim.status}">
            ${claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
          </span>
        </div>
      </div>

      <div class="progress-steps">
        ${progressSteps.map((step, index) => `
          <div class="step ${index < currentStep ? 'active' : ''}">
            <div class="step-icon">${step.icon}</div>
            <div class="step-label">${step.label}</div>
          </div>
        `).join('')}
      </div>

      <div class="claim-details">
        <p><strong>Provider:</strong> ${claim.provider}</p>
        <p><strong>Amount:</strong> $${claim.amount}</p>
        <p><strong>Service Date:</strong> ${claim.serviceDate}</p>
      </div>

      ${claim.status === 'rejected' ? `
        <div class="claim-actions">
          <button class="btn btn-primary" onclick="resubmitClaim('${claim.id}')">
            Resubmit Claim
          </button>
        </div>
      ` : ''}
    `;

    claimsList.appendChild(card);
  });
}

// Auto-fill form from patient data
function autoFillForm(patientId) {
  const mockPatientData = {
    P12345: {
      name: 'John Doe',
      provider: 'provider1',
      policyNumber: 'POL123456'
    }
  };

  const data = mockPatientData[patientId];
  if (data) {
    document.getElementById('patientName').value = data.name;
    document.getElementById('insuranceProvider').value = data.provider;
    document.getElementById('policyNumber').value = data.policyNumber;
  }
}

// Resubmit claim
function resubmitClaim(claimId) {
  const claim = claims.find(c => c.id === claimId);
  if (!claim) return;

  document.getElementById('patientName').value = claim.patientName;
  document.getElementById('patientId').value = claim.patientId;
  document.getElementById('serviceDate').value = claim.serviceDate;
  document.getElementById('claimAmount').value = claim.amount;

  document.getElementById('claimForm').scrollIntoView({ behavior: 'smooth' });
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  renderClaims();

  // Form submission
  document.getElementById('claimForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Claim submitted successfully!');
    e.target.reset();
  });

  // Auto-fill on blur
  document.getElementById('patientId').addEventListener('blur', (e) => {
    autoFillForm(e.target.value);
  });
});

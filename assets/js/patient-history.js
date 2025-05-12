// patient-history.js

// Mock patient history data
const patientHistory = [
  {
    id: 1,
    type: 'visit',
    date: '2024-01-15',
    title: 'Regular Checkup',
    doctor: 'Dr. Sarah Johnson',
    notes: 'Patient reported mild fever and cough. Prescribed antibiotics.',
    vitals: {
      temperature: '38.2°C',
      bloodPressure: '120/80',
      heartRate: '78 bpm'
    }
  },
  {
    id: 2,
    type: 'test',
    date: '2024-01-10',
    title: 'Blood Test',
    requestedBy: 'Dr. Michael Brown',
    results: {
      hemoglobin: '14.5 g/dL',
      wbc: '7500/μL',
      platelets: '250,000/μL'
    }
  },
  {
    id: 3,
    type: 'prescription',
    date: '2024-01-15',
    title: 'Medication Prescribed',
    doctor: 'Dr. Sarah Johnson',
    medications: [
      { name: 'Amoxicillin', dosage: '500mg', frequency: 'Every 8 hours', duration: '7 days' }
    ]
  },
  {
    id: 4,
    type: 'visit',
    date: '2023-12-20',
    title: 'Follow-up Visit',
    doctor: 'Dr. John Smith',
    notes: 'Patient showing improvement. Continue current medication.',
    vitals: {
      temperature: '37.0°C',
      bloodPressure: '118/75',
      heartRate: '72 bpm'
    }
  }
];

// Render timeline
function renderTimeline(records = patientHistory) {
  const timeline = document.getElementById('historyTimeline');
  timeline.innerHTML = '';

  records.forEach((record, index) => {
    const item = document.createElement('div');
    item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

    let details = '';
    switch (record.type) {
      case 'visit':
        details = `
          <p><strong>Doctor:</strong> ${record.doctor}</p>
          <p><strong>Notes:</strong> ${record.notes}</p>
          <p><strong>Vitals:</strong></p>
          <ul>
            <li>Temperature: ${record.vitals.temperature}</li>
            <li>Blood Pressure: ${record.vitals.bloodPressure}</li>
            <li>Heart Rate: ${record.vitals.heartRate}</li>
          </ul>
        `;
        break;
      case 'test':
        details = `
          <p><strong>Requested By:</strong> ${record.requestedBy}</p>
          <p><strong>Results:</strong></p>
          <ul>
            ${Object.entries(record.results).map(([key, value]) =>
              `<li>${key}: ${value}</li>`
            ).join('')}
          </ul>
        `;
        break;
      case 'prescription':
        details = `
          <p><strong>Doctor:</strong> ${record.doctor}</p>
          <p><strong>Medications:</strong></p>
          <ul>
            ${record.medications.map(med =>
              `<li>${med.name} - ${med.dosage}, ${med.frequency}, ${med.duration}</li>`
            ).join('')}
          </ul>
        `;
        break;
    }

    item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${formatDate(record.date)}</div>
        <span class="record-type type-${record.type}">
          ${capitalizeFirstLetter(record.type)}
        </span>
        <h3>${record.title}</h3>
        ${details}
      </div>
    `;

    timeline.appendChild(item);
  });
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Filter records
function filterRecords() {
  const type = document.getElementById('typeFilter').value;
  const dateRange = document.getElementById('dateFilter').value;
  const search = document.getElementById('searchInput').value.toLowerCase();

  const filtered = patientHistory.filter(record => {
    const matchesType = !type || record.type === type;

    const matchesDate = !dateRange ||
      (new Date(record.date) >= new Date(Date.now() - dateRange * 24 * 60 * 60 * 1000));

    const matchesSearch = !search ||
      record.title.toLowerCase().includes(search) ||
      (record.notes && record.notes.toLowerCase().includes(search)) ||
      (record.doctor && record.doctor.toLowerCase().includes(search));

    return matchesType && matchesDate && matchesSearch;
  });

  renderTimeline(filtered);
}

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('typeFilter').addEventListener('change', filterRecords);
  document.getElementById('dateFilter').addEventListener('change', filterRecords);
  document.getElementById('searchInput').addEventListener('input', filterRecords);

  renderTimeline();
});

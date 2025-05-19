// doctor-validation.js

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: 'Dr. Akib Zobair',
    specialty: 'Cardiology',
    experience: '15 years',
    education: 'MD - Harvard Medical School',
    available: true,
    schedule: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 1:00 PM' }
    ]
  },
  {
    id: 2,
    name: 'Dr. Rakibul Islam',
    specialty: 'Dermatology',
    experience: '10 years',
    education: 'MD - Johns Hopkins University',
    available: true,
    schedule: [
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' }
    ]
  },
  {
    id: 3,
    name: 'Dr. Azra Koshin',
    specialty: 'Neurology',
    experience: '12 years',
    education: 'MD - Stanford University',
    available: false,
    schedule: [
      { day: 'Monday', hours: '2:00 PM - 8:00 PM' },
      { day: 'Wednesday', hours: '2:00 PM - 8:00 PM' }
    ]
  }
];

// Render doctor cards
function renderDoctors(filteredDoctors = doctors) {
  const doctorGrid = document.getElementById('doctorGrid');
  doctorGrid.innerHTML = '';

  filteredDoctors.forEach(doctor => {
    const card = document.createElement('div');
    card.className = 'card doctor-card';
    card.innerHTML = `
      <div class="doctor-image">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="#6c757d">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <div class="doctor-info">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialty}</p>
        <div class="availability-badge ${doctor.available ? 'available' : 'unavailable'}">
          ${doctor.available ? 'Available' : 'Unavailable'}
        </div>
      </div>
    `;

    card.addEventListener('click', () => showDoctorModal(doctor));
    doctorGrid.appendChild(card);
  });
}

// Show doctor modal
function showDoctorModal(doctor) {
  const modal = document.getElementById('doctorModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <h2>${doctor.name}</h2>
    <p><strong>Specialty:</strong> ${doctor.specialty}</p>
    <p><strong>Experience:</strong> ${doctor.experience}</p>
    <p><strong>Education:</strong> ${doctor.education}</p>
    
    <h3>Schedule</h3>
    <div class="schedule-grid">
      ${doctor.schedule.map(s => `
        <div class="schedule-item">
          <strong>${s.day}</strong><br>
          ${s.hours}
        </div>
      `).join('')}
    </div>

    <button class="btn btn-primary" style="margin-top: 20px;" 
            onclick="window.location.href='appointment-scheduling.html'">
      Schedule Appointment
    </button>
  `;

  modal.style.display = 'block';
}

// Close modal
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('doctorModal').style.display = 'none';
  });

  // Add event listeners for filters
  document.getElementById('specialtyFilter').addEventListener('change', filterDoctors);
  document.getElementById('availabilityFilter').addEventListener('change', filterDoctors);
  document.getElementById('searchFilter').addEventListener('input', filterDoctors);

  // Initial render
  renderDoctors();
});

// Filter functionality
function filterDoctors() {
  const specialty = document.getElementById('specialtyFilter').value.toLowerCase();
  const availability = document.getElementById('availabilityFilter').value;
  const search = document.getElementById('searchFilter').value.toLowerCase();

  const filtered = doctors.filter(doctor => {
    const matchesSpecialty = !specialty || doctor.specialty.toLowerCase() === specialty;
    const matchesAvailability = !availability || 
      (availability === 'available' ? doctor.available : !doctor.available);
    const matchesSearch = !search || 
      doctor.name.toLowerCase().includes(search) || 
      doctor.specialty.toLowerCase().includes(search);

    return matchesSpecialty && matchesAvailability && matchesSearch;
  });

  renderDoctors(filtered);
}

// appointment-booking.js

// Mock data for doctors
const doctors = {
  cardiology: [
    { id: 1, name: 'Dr. John Smith' },
    { id: 2, name: 'Dr. Sarah Johnson' }
  ],
  dermatology: [
    { id: 3, name: 'Dr. Michael Brown' },
    { id: 4, name: 'Dr. Emily Davis' }
  ],
  neurology: [
    { id: 5, name: 'Dr. David Wilson' },
    { id: 6, name: 'Dr. Lisa Anderson' }
  ],
  orthopedics: [
    { id: 7, name: 'Dr. Robert Taylor' },
    { id: 8, name: 'Dr. Jennifer Martinez' }
  ],
  pediatrics: [
    { id: 9, name: 'Dr. James White' },
    { id: 10, name: 'Dr. Maria Garcia' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const specialtySelect = document.getElementById('specialtySelect');
  const doctorSelect = document.getElementById('doctorSelect');
  const bookAppointmentBtn = document.getElementById('bookAppointment');

  // Handle specialty change
  specialtySelect.addEventListener('change', () => {
    const specialty = specialtySelect.value;
    doctorSelect.innerHTML = '<option value="">Select a doctor</option>';
    doctorSelect.disabled = !specialty;

    if (specialty && doctors[specialty]) {
      doctors[specialty].forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
      });
    }
  });

  // Generate the calendar
  generateCalendar();

  // Booking confirmation logic
  bookAppointmentBtn.addEventListener('click', () => {
    const specialty = specialtySelect.options[specialtySelect.selectedIndex].text;
    const doctor = doctorSelect.options[doctorSelect.selectedIndex].text;
    const date = document.querySelector('.calendar-day.selected')?.textContent;
    const time = document.querySelector('.time-slot.selected')?.textContent;

    if (specialty && doctor && date && time) {
      const details = document.getElementById('appointmentDetails');
      details.innerHTML = `
        <p><strong>Specialty:</strong> ${specialty}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `;
      document.getElementById('bookingConfirmation').style.display = 'block';
    }
  });
});

// Generate calendar days
function generateCalendar() {
  const calendar = document.querySelector('.calendar');
  calendar.innerHTML = '';

  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';
    day.textContent = i;

    if (i < today.getDate()) {
      day.classList.add('unavailable');
    } else {
      day.addEventListener('click', () => selectDate(day, i));
    }

    calendar.appendChild(day);
  }
}

// Select calendar day
function selectDate(dayElement, date) {
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.classList.remove('selected');
  });
  dayElement.classList.add('selected');
  generateTimeSlots();
}

// Generate available time slots
function generateTimeSlots() {
  const timeSlots = document.getElementById('timeSlots');
  timeSlots.innerHTML = '';

  const times = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  times.forEach(time => {
    const slot = document.createElement('div');
    slot.className = 'time-slot';
    slot.textContent = time;
    slot.addEventListener('click', () => selectTimeSlot(slot, time));
    timeSlots.appendChild(slot);
  });
}

// Select time slot
function selectTimeSlot(slotElement, time) {
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
  slotElement.classList.add('selected');
  document.getElementById('bookAppointment').disabled = false;
}

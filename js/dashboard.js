// Mock data for appointments
const appointments = [
  {
    time: '09:00 AM',
    patient: 'John Smith',
    doctor: 'Dr. Sarah Johnson',
    type: 'General Checkup'
  },
  {
    time: '10:30 AM',
    patient: 'Mary Wilson',
    doctor: 'Dr. Michael Brown',
    type: 'Follow-up'
  },
  {
    time: '11:45 AM',
    patient: 'Robert Davis',
    doctor: 'Dr. Emily White',
    type: 'Consultation'
  },
  {
    time: '02:15 PM',
    patient: 'Patricia Moore',
    doctor: 'Dr. James Wilson',
    type: 'Lab Results Review'
  },
  {
    time: '03:30 PM',
    patient: 'Michael Taylor',
    doctor: 'Dr. Sarah Johnson',
    type: 'Follow-up'
  }
];

// Mock data for notifications
const notifications = [
  {
    type: 'urgent',
    message: 'Lab results ready for Patient #P12345',
    time: '10 minutes ago'
  },
  {
    type: 'info',
    message: 'New appointment request from Dr. Brown',
    time: '30 minutes ago'
  },
  {
    type: 'urgent',
    message: 'Insurance claim #CLM001 requires attention',
    time: '1 hour ago'
  },
  {
    type: 'info',
    message: 'System maintenance scheduled for tonight',
    time: '2 hours ago'
  }
];

// Mock data for inventory alerts
const inventoryAlerts = [
  {
    item: 'Surgical Masks',
    status: 'Low Stock',
    quantity: '100 units remaining'
  },
  {
    item: 'Antibiotics',
    status: 'Expiring Soon',
    quantity: '50 units - Expires in 30 days'
  },
  {
    item: 'Blood Pressure Monitors',
    status: 'Reorder Required',
    quantity: '5 units remaining'
  }
];

// Render appointments
function renderAppointments() {
  const list = document.getElementById('appointmentsList');
  appointments.forEach(appointment => {
    const item = document.createElement('li');
    item.className = 'appointment-item';
    item.innerHTML = `
      <strong>${appointment.time}</strong><br>
      ${appointment.patient}<br>
      <small>${appointment.doctor} - ${appointment.type}</small>
    `;
    list.appendChild(item);
  });
}

// Render notifications
function renderNotifications() {
  const list = document.getElementById('notificationsList');
  notifications.forEach(notification => {
    const item = document.createElement('div');
    item.className = `notification notification-${notification.type}`;
    item.innerHTML = `
      <strong>${notification.message}</strong><br>
      <small>${notification.time}</small>
    `;
    list.appendChild(item);
  });
}

// Render inventory alerts
function renderInventoryAlerts() {
  const list = document.getElementById('inventoryAlerts');
  inventoryAlerts.forEach(alert => {
    const item = document.createElement('div');
    item.className = 'notification notification-urgent';
    item.innerHTML = `
      <strong>${alert.item}</strong><br>
      ${alert.status}<br>
      <small>${alert.quantity}</small>
    `;
    list.appendChild(item);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderAppointments();
  renderNotifications();
  renderInventoryAlerts();
});
// staff-management.js

// Mock staff data
const staff = [
  {
    id: 1,
    name: 'Dr. Samsun Nahar',
    department: 'medical',
    role: 'doctor',
    license: {
      number: 'MD12345',
      expiry: '2024-12-31',
      type: 'Medical License'
    },
    shifts: [
      { day: 'Monday', type: 'morning' },
      { day: 'Tuesday', type: 'morning' },
      { day: 'Wednesday', type: 'evening' },
      { day: 'Thursday', type: 'morning' },
      { day: 'Friday', type: 'morning' }
    ]
  },
  {
    id: 2,
    name: 'Manha',
    department: 'nursing',
    role: 'nurse',
    license: {
      number: 'RN54321',
      expiry: '2024-06-30',
      type: 'Nursing License'
    },
    shifts: [
      { day: 'Monday', type: 'evening' },
      { day: 'Tuesday', type: 'evening' },
      { day: 'Wednesday', type: 'night' },
      { day: 'Thursday', type: 'night' },
      { day: 'Friday', type: 'evening' }
    ]
  },
  {
    id: 3,
    name: 'Shajidul Islam',
    department: 'lab',
    role: 'technician',
    license: {
      number: 'LT98765',
      expiry: '2024-03-15',
      type: 'Lab Technician License'
    },
    shifts: [
      { day: 'Monday', type: 'morning' },
      { day: 'Tuesday', type: 'morning' },
      { day: 'Wednesday', type: 'morning' },
      { day: 'Thursday', type: 'evening' },
      { day: 'Friday', type: 'evening' }
    ]
  }
];

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// License status calculation
function getLicenseStatus(expiryDate) {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysUntilExpiry = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

  if (daysUntilExpiry < 0) {
    return { status: 'expired', message: 'Expired' };
  } else if (daysUntilExpiry <= 30) {
    return { status: 'expiring', message: 'Expiring Soon' };
  } else {
    return { status: 'valid', message: 'Valid' };
  }
}

// Render staff table
function renderStaff(staffList = staff) {
  const tbody = document.getElementById('staffTableBody');
  tbody.innerHTML = '';

  staffList.forEach(member => {
    const licenseStatus = getLicenseStatus(member.license.expiry);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${member.name}</td>
      <td>${capitalizeFirstLetter(member.department)}</td>
      <td>${capitalizeFirstLetter(member.role)}</td>
      <td>
        <span class="license-status status-${licenseStatus.status}">
          ${licenseStatus.message}
        </span>
      </td>
      <td>
        <button class="btn btn-primary" onclick="viewStaffDetails(${member.id})">
          View Details
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// View staff details modal
function viewStaffDetails(staffId) {
  const member = staff.find(s => s.id === staffId);
  if (!member) return;

  const modal = document.getElementById('staffModal');
  const content = document.getElementById('staffModalContent');

  content.innerHTML = `
    <h2>${member.name}</h2>
    <p><strong>Department:</strong> ${capitalizeFirstLetter(member.department)}</p>
    <p><strong>Role:</strong> ${capitalizeFirstLetter(member.role)}</p>
    
    <div class="license-info">
      <h3>License Information</h3>
      <p><strong>License Number:</strong> ${member.license.number}</p>
      <p><strong>Type:</strong> ${member.license.type}</p>
      <p><strong>Expiry Date:</strong> ${member.license.expiry}</p>
    </div>

    <div class="shift-info">
      <h3>Shift Schedule</h3>
      <div class="shift-schedule">
        ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
          const shift = member.shifts.find(s => s.day === day);
          return `
            <div class="shift-day ${shift ? `shift-${shift.type}` : ''}">
              <strong>${day.slice(0, 3)}</strong><br>
              ${shift ? capitalizeFirstLetter(shift.type) : 'Off'}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  modal.style.display = 'block';
}

// Filter staff based on UI inputs
function filterStaff() {
  const department = document.getElementById('departmentFilter').value;
  const role = document.getElementById('roleFilter').value;
  const search = document.getElementById('searchInput').value.toLowerCase();

  const filtered = staff.filter(member => {
    const matchesDepartment = !department || member.department === department;
    const matchesRole = !role || member.role === role;
    const matchesSearch = !search || 
      member.name.toLowerCase().includes(search) || 
      member.department.toLowerCase().includes(search) || 
      member.role.toLowerCase().includes(search);

    return matchesDepartment && matchesRole && matchesSearch;
  });

  renderStaff(filtered);
}

// Set up initial event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('staffModal').style.display = 'none';
  });

  document.getElementById('departmentFilter').addEventListener('change', filterStaff);
  document.getElementById('roleFilter').addEventListener('change', filterStaff);
  document.getElementById('searchInput').addEventListener('input', filterStaff);

  renderStaff();
});

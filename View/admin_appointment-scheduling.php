<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Scheduling - Hospital Management System</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      margin: 20px 0;
    }
    .calendar-header {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .calendar-day {
      padding: 10px;
      text-align: center;
      background: #f8f9fa;
      cursor: pointer;
      border-radius: 4px;
    }
    .calendar-day:hover {
      background: #e9ecef;
    }
    .calendar-day.selected {
      background: #007bff;
      color: white;
    }
    .calendar-day.unavailable {
      background: #dee2e6;
      cursor: not-allowed;
    }
    .time-slots {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }
    .time-slot {
      padding: 10px;
      text-align: center;
      background: #f8f9fa;
      cursor: pointer;
      border-radius: 4px;
    }
    .time-slot:hover {
      background: #e9ecef;
    }
    .time-slot.selected {
      background: #007bff;
      color: white;
    }
    .booking-confirmation {
      display: none;
      text-align: center;
      padding: 20px;
      background: #d4edda;
      border-radius: 4px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="container">
      <ul class="nav-list">
        <li><a href="admin_dashboard.php">Dashboard</a></li>
        <li><a href="admin_patient-registration.php">Patients Reg</a></li>
        <li><a href="admin_patient-history.php">Patients History</a></li>
        <li><a href="admin_doctor-profiles.php">Doctors</a></li>
        <li><a href="admin_appointment-scheduling.php" class="active">Appointments</a></li>
        <li><a href="admin_lab-tests.html">Lab Tests</a></li>
        <li><a href="admin_prescription-records.html">Prescriptions</a></li>
        <li><a href="inventory-tracking.html">Inventory</a></li>
        <li><a href="staff-management.php">Staff</a></li>
        <li><a href="../controller/logout.php"> Logout </a></li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1>Schedule an Appointment</h1>

    <div class="card">
      <div class="form-group">
        <label class="form-label">Select Specialty</label>
        <select id="specialtySelect" class="form-control" required>
          <option value="">Choose a specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="neurology">Neurology</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="pediatrics">Pediatrics</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Select Doctor</label>
        <select id="doctorSelect" class="form-control" required disabled>
          <option value="">First select a specialty</option>
        </select>
      </div>

      <div id="calendar" class="calendar-container">
        <div class="calendar-header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="calendar"></div>
      </div>

      <div id="timeSlots" class="time-slots"></div>

      <button id="bookAppointment" class="btn btn-primary" disabled>Book Appointment</button>

      <div id="bookingConfirmation" class="booking-confirmation">
        <h3>Appointment Confirmed!</h3>
        <p>Your appointment has been scheduled successfully.</p>
        <div id="appointmentDetails"></div>
      </div>
    </div>
  </div>

  <script src="../assets/js/appointment.js"></script>
</body>
</html>
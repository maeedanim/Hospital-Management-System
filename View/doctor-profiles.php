<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Doctor Profiles - Hospital Management System</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .filters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .doctor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .doctor-card {
      cursor: pointer;
      transition: transform 0.2s;
    }
    .doctor-card:hover {
      transform: translateY(-5px);
    }
    .doctor-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto 15px;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .doctor-info {
      text-align: center;
    }
    .availability-badge {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 0.8em;
      margin-top: 10px;
    }
    .available {
      background: #d4edda;
      color: #155724;
    }
    .unavailable {
      background: #f8d7da;
      color: #721c24;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modal-content {
      position: relative;
      background: white;
      width: 90%;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      border-radius: 8px;
    }
    .close-modal {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      font-size: 24px;
    }
    .schedule-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin-top: 20px;
    }
    .schedule-item {
      padding: 10px;
      background: #f8f9fa;
      border-radius: 4px;
      text-align: center;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="container">
      <ul class="nav-list">
             <li><a href="dashboard.php" >Dashboard</a></li>
             <li><a href="patient-registration.php" >Patients Reg</a></li>
             <li><a href="doctor-profiles.php" class="active">Doctors</a></li>
             <li><a href="appointment-scheduling.php">Appointments</a></li>
             <li><a href="lab-tests.html">Lab Tests</a></li>
             <li><a href="billing.html">Billing</a></li>
             <li><a href="prescription-records.html">Prescriptions</a></li>
             <li><a href="../controller/logout.php"> Logout </a></li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1>Doctor Profiles</h1>

    <div class="card">
      <div class="filters">
        <div class="form-group">
          <label class="form-label">Specialty</label>
          <select id="specialtyFilter" class="form-control">
            <option value="">All Specialties</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Availability</label>
          <select id="availabilityFilter" class="form-control">
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Search</label>
          <input type="text" id="searchFilter" class="form-control" placeholder="Search by name...">
        </div>
      </div>

      <div id="doctorGrid" class="doctor-grid"></div>
    </div>
  </div>

  <div id="doctorModal" class="modal">
    <div class="modal-content card">
      <span class="close-modal">&times;</span>
      <div id="modalContent"></div>
    </div>
  </div>

  <script src="../assets/js/doctors.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Staff Management - Hospital Management System</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .staff-filters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .staff-table {
      width: 100%;
      margin-bottom: 20px;
    }
    .staff-table th,
    .staff-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .staff-table tr:hover {
      background: #f8f9fa;
    }
    .license-status {
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 0.8em;
    }
    .status-valid {
      background: #d4edda;
      color: #155724;
    }
    .status-expiring {
      background: #fff3cd;
      color: #856404;
    }
    .status-expired {
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
    .shift-schedule {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      margin-top: 20px;
    }
    .shift-day {
      padding: 10px;
      text-align: center;
      background: #f8f9fa;
      border-radius: 4px;
    }
    .shift-morning {
      border-left: 4px solid #28a745;
    }
    .shift-evening {
      border-left: 4px solid #ffc107;
    }
    .shift-night {
      border-left: 4px solid #17a2b8;
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
        <li><a href="admin_appointment-scheduling.php" >Appointments</a></li>
        <li><a href="admin_lab-tests.html">Lab Tests</a></li>
        <li><a href="admin_prescription-records.html">Prescriptions</a></li>
        <li><a href="inventory-tracking.html">Inventory</a></li>
        <li><a href="staff-management.php" class="active">Staff</a></li>
        <li><a href="../controller/logout.php"> Logout </a></li>
        </ul>
    </div>
  </nav>

  <div class="container">
    <h1>Staff Management</h1>

    <div class="card">
      <div class="staff-filters">
        <div class="form-group">
          <label class="form-label">Department</label>
          <select id="departmentFilter" class="form-control">
            <option value="">All Departments</option>
            <option value="medical">Medical</option>
            <option value="nursing">Nursing</option>
            <option value="admin">Administrative</option>
            <option value="lab">Laboratory</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Role</label>
          <select id="roleFilter" class="form-control">
            <option value="">All Roles</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="admin">Admin</option>
            <option value="technician">Lab Technician</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Search</label>
          <input type="text" id="searchInput" class="form-control" placeholder="Search staff...">
        </div>
      </div>

      <table class="staff-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>License Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="staffTableBody"></tbody>
      </table>
    </div>
  </div>

  <div id="staffModal" class="modal">
    <div class="modal-content card">
      <span class="close-modal">&times;</span>
      <div id="staffModalContent"></div>
    </div>
  </div>

  <script src ="../assets/js/staffmanagement.js"></script>
</body>
</html>
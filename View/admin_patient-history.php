<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patient History</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .history-filters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px 0;
    }
    .timeline::after {
      content: '';
      position: absolute;
      width: 2px;
      background: #ddd;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
    }
    .timeline-item {
      padding: 10px 40px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
    }
    .timeline-item::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: #fff;
      border: 2px solid #007bff;
      border-radius: 50%;
      top: 15px;
      right: -10px;
    }
    .timeline-item.left {
      left: 0;
    }
    .timeline-item.right {
      left: 50%;
    }
    .timeline-item.right::after {
      left: -10px;
    }
    .timeline-content {
      padding: 15px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .timeline-date {
      font-size: 0.9em;
      color: #666;
      margin-bottom: 10px;
    }
    .record-type {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 0.8em;
      margin-bottom: 10px;
    }
    .type-visit {
      background: #e3f2fd;
      color: #0d47a1;
    }
    .type-test {
      background: #f3e5f5;
      color: #4a148c;
    }
    .type-prescription {
      background: #e8f5e9;
      color: #1b5e20;
    }
    @media screen and (max-width: 600px) {
      .timeline::after {
        left: 31px;
      }
      .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }
      .timeline-item.right {
        left: 0;
      }
      .timeline-item::after {
        left: 21px;
      }
    }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="container">
      <ul class="nav-list">
        <li><a href="admin_dashboard.php">Dashboard</a></li>
        <li><a href="admin_patient-registration.php">Patients Reg</a></li>
        <li><a href="admin_patient-history.php" class="active">Patients History</a></li>
        <li><a href="admin_doctor-profiles.php">Doctors</a></li>
        <li><a href="admin_appointment-scheduling.php">Appointments</a></li>
        <li><a href="admin_lab-tests.html" >Lab Tests</a></li>
        <li><a href="admin_prescription-records.html">Prescriptions</a></li>
        <li><a href="inventory-tracking.html">Inventory</a></li>
        <li><a href="staff-management.php">Staff</a></li>
        <li><a href="../controller/logout.php"> Logout </a></li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1>Patient History</h1>

    <div class="card">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Patient ID</label>
          <input type="text" id="patientId" class="form-control" value="P12345" readonly>
        </div>
        <div class="form-group">
          <label class="form-label">Patient Name</label>
          <input type="text" id="patientName" class="form-control" value="John Doe" readonly>
        </div>
      </div>

      <div class="history-filters">
        <div class="form-group">
          <label class="form-label">Record Type</label>
          <select id="typeFilter" class="form-control">
            <option value="">All Types</option>
            <option value="visit">Visits</option>
            <option value="test">Tests</option>
            <option value="prescription">Prescriptions</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Date Range</label>
          <select id="dateFilter" class="form-control">
            <option value="">All Time</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
            <option value="180">Last 6 Months</option>
            <option value="365">Last Year</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Search</label>
          <input type="text" id="searchInput" class="form-control" placeholder="Search records...">
        </div>
      </div>

      <div class="timeline" id="historyTimeline"></div>
    </div>
  </div>
<script src ="../assets/js/patient-history.js"></script>
  
</body>
</html>
<?php
    session_start();
    if(isset($_COOKIE['status'])){
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - Hospital Management System</title>
 
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <nav class="nav">
    <div class="container">
      <ul class="nav-list">
        <li><a href="admin_dashboard.php" class="active">Dashboard</a></li>
        <li><a href="admin_patient-registration.php">Patients Reg</a></li>
        <li><a href="admin_patient-history.php">Patients History</a></li>
        <li><a href="admin_doctor-profiles.php">Doctors</a></li>
        <li><a href="admin_appointment-scheduling.php">Appointments</a></li>
        <li><a href="admin_lab-tests.html">Lab Tests</a></li>
        <li><a href="admin_prescription-records.html">Prescriptions</a></li>
        <li><a href="inventory-tracking.html">Inventory</a></li>
        <li><a href="staff-management.php">Staff</a></li>
        <li><a href="../controller/logout.php"> Logout </a></li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1>Dashboard</h1>

    <div class="stats-grid">
      <div class="card stat-card">
        <h3>Total Patients</h3>
        <div class="stat-value">1,234</div>
        <p>+12 this week</p>
      </div>
      <div class="card stat-card">
        <h3>Appointments Today</h3>
        <div class="stat-value">45</div>
        <p>8 pending</p>
      </div>
      <div class="card stat-card">
        <h3>Available Doctors</h3>
        <div class="stat-value">28</div>
        <p>Out of 35</p>
      </div>
      <div class="card stat-card">
        <h3>Revenue This Month</h3>
        <div class="stat-value">BDT 52K</div>
        <p>+8% vs last month</p>
      </div>
    </div>

    <div class="quick-links">
      <a href="admin_patient-registration.php" class="quick-link">
        <h4>New Patient</h4>
        <p>Register patient</p>
      </a>
      <a href="admin_appointment-scheduling.php" class="quick-link">
        <h4>Schedule</h4>
        <p>Book appointment</p>
      </a>
      <a href="admin_prescription-records.html" class="quick-link">
        <h4>Prescribe</h4>
        <p>Write prescription</p>
      </a>
      <a href="admin_lab-tests.html" class="quick-link">
        <h4>Lab Tests</h4>
        <p>Order tests</p>
      </a>
    </div>

    <div class="widgets-grid">
      <div class="card widget">
        <h3>Today's Appointments</h3>
        <ul class="appointment-list" id="appointmentsList"></ul>
      </div>

      <div class="card widget">
        <h3>Notifications</h3>
        <div id="notificationsList"></div>
      </div>

      <div class="card widget">
        <h3>Inventory Alerts</h3>
        <div id="inventoryAlerts"></div>
      </div>
    </div>
  </div>

  <script src="../assets/js/dashboard.js"></script>
</body>
</html>

<?php
    }else{
        header('location: login.html');
    }

?>
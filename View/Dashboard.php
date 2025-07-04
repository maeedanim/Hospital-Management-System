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

        <li><a href="dashboard.php" class="active">Dashboard</a></li>
        <li><a href="patient-registration.php">Patients Reg</a></li>
        <li><a href="doctor-profiles.php">Doctors</a></li>
        <li><a href="appointment-scheduling.php">Appointments</a></li>
        <li><a href="lab-tests.html">Lab Tests</a></li>
        <li><a href="billing.html">Billing</a></li>
        <li><a href="prescription-records.html">Prescriptions</a></li>
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
      <a href="patient-registration.php" class="quick-link">
        <h4>New Patient</h4>
        <p>Register patient</p>
      </a>
      <a href="appointment-scheduling.php" class="quick-link">
        <h4>Schedule</h4>
        <p>Book appointment</p>
      </a>
      <a href="lab-tests.html" class="quick-link">
        <h4>Lab Tests</h4>
        <p>Order tests</p>
      </a>
      <a href="billing.html" class="quick-link">
        <h4>Billing</h4>
        <p>Create invoice</p>
      </a>
      <a href="insurance-claims.html" class="quick-link">
        <h4>Claims</h4>
        <p>Process claims</p>
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
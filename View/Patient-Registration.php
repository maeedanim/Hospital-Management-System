<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patient-Registration</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  
    <nav class="nav">
        <div class="container">
          <ul class="nav-list">
             <li><a href="dashboard.php" >Dashboard</a></li>
             <li><a href="patient-registration.php" class="active">Patients Reg</a></li>
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
        <h1>Patient Registration</h1>
        
        <form id="patientRegistrationForm" class="card">
          <div class="form-section">
            <h2>Personal Information</h2>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Gender</label>
                <select class="form-control" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" required autocapitalize="off">
              </div>
            </div>
          </div>
    
          <div class="form-section">
            <h2>Medical History</h2>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Blood Type</label>
                <select class="form-control" required>
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Height (cm)</label>
                <input type="number" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Weight (kg)</label>
                <input type="number" class="form-control" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Allergies</label>
              <textarea class="form-control" rows="3" placeholder="List any allergies..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Current Medications</label>
              <textarea class="form-control" rows="3" placeholder="List current medications..."></textarea>
            </div>
          </div>
    
          <div class="form-section">
            <h2>ID Verification</h2>
            <div class="id-scan-area" id="idScanArea">
              <p>Click to upload ID document or take a photo</p>
              <input type="file" id="idScanInput" accept="image/*" style="display: none">
              <img id="idPreview" class="preview-image" alt="ID Preview">
            </div>
          </div>
    
          <button type="submit" class="btn btn-primary">Register Patient</button>
        </form>
      </div>
    
      <script src="../assets/js/patient-registration.js"></script>
</body>
</html>
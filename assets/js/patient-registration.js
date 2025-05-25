// ID Scan simulation
document.addEventListener("DOMContentLoaded", () => {
  const idScanArea = document.getElementById('idScanArea');
  const idScanInput = document.getElementById('idScanInput');
  const idPreview = document.getElementById('idPreview');
  const form = document.getElementById('patientRegistrationForm');

  idScanArea.addEventListener('click', () => {
    idScanInput.click();
  });

  idScanInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        idPreview.src = e.target.result;
        idPreview.style.display = 'block';
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Patient registration successful!');
    form.reset();
    idPreview.style.display = 'none';
  });
});

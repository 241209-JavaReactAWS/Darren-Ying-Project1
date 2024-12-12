// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    // Simple login validation
    if (username === 'admin' && password === 'admin123' && role === 'admin') {
      alert('Welcome Admin!');
      showAdoptionSection();
    } else if (username === 'user' && password === 'user123' && role === 'user') {
      alert('Welcome User!');
      showAdoptionSection();
    } else {
      alert('Invalid credentials or role. Please try again.');
    }
  });
  
  // Show the dog adoption section
  function showAdoptionSection() {
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('adoptionSection').style.display = 'block';
  }
  
  // Event listener for breed selection to update dog names
  document.getElementById('dogBreed').addEventListener('change', function() {
    const breed = this.value;
    const dogNameSelect = document.getElementById('dogName');
    
    // Clear current dog names
    dogNameSelect.innerHTML = '';
  
    let dogNames = [];
  
    // Update dog names based on breed
    if (breed === 'labrador') {
      dogNames = ['Buddy', 'Max', 'Charlie'];
    } else if (breed === 'bulldog') {
      dogNames = ['Rex', 'Bella', 'Luna'];
    } else if (breed === 'poodle') {
      dogNames = ['Lucy', 'Milo', 'Zoe'];
    } else if (breed === 'beagle') {
      dogNames = ['Oliver', 'Daisy', 'Bailey'];
    }
  
    // Populate the dog name dropdown
    dogNames.forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      dogNameSelect.appendChild(option);
    });
  });
  
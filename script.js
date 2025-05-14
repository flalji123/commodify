document.getElementById('dueForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const company = document.getElementById('company').value;
    const country = document.getElementById('country').value;
    const apiKey = document.getElementById('apiKey').value;
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Checking due diligence data for <strong>' + company + '</strong>...</p>';
  
    // Placeholder: simulate API call
    setTimeout(() => {
      resultsDiv.innerHTML = `
        <h3>Due Diligence Report</h3>
        <ul>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Country:</strong> ${country}</li>
          <li><strong>Status:</strong> ✅ Verified</li>
          <li><strong>Registrar:</strong> Whois Privacy Protection Service</li>
          <li><strong>Scam Alerts:</strong> None found</li>
          <li><strong>Online Mentions:</strong> 8 found on news sites</li>
        </ul>
      `;
    }, 1500);
  });
  
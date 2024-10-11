// Function to initialize charts with mock data
function initializeCharts() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Price',
            data: [65, 59, 80, 81, 56, 55, 70],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };
    const options = {
        responsive: true,
        scales: {
            x: { display: true },
            y: { display: true }
        }
    };

    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, { type: 'line', data: data, options: options });
}

// Call initializeCharts when the window loads
window.onload = initializeCharts;

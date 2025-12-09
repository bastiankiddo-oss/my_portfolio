// 1. Initialize Chart.js
const ctx = document.getElementById('revenueChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Revenue ($)',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 35000],
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            tension: 0.4, // Curvy line
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    }
});

// 2. Populate Recent Orders Table
const orders = [
    { id: '#10234', customer: 'Alice Smith', status: 'Completed', amount: '$120.50' },
    { id: '#10235', customer: 'John Doe', status: 'Pending', amount: '$85.00' },
    { id: '#10236', customer: 'Sarah Connor', status: 'Completed', amount: '$340.00' },
    { id: '#10237', customer: 'Michael B.', status: 'Pending', amount: '$54.20' },
];

const tableBody = document.getElementById('orderTableBody');

orders.forEach(order => {
    const row = document.createElement('tr');
    
    // Create status span class based on text
    const statusClass = order.status === 'Completed' ? 'completed' : 'pending';
    
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td><span class="status-pill ${statusClass}">${order.status}</span></td>
        <td>${order.amount}</td>
    `;
    tableBody.appendChild(row);
});
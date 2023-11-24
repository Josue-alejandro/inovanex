export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sesiones',
        borderColor: '#6E0D25',
        data: [20, 39, 60, 90, 69, 80, 40],
        tension: 0.4
      },
      {
        label: 'IPS UNICAS',
        borderColor: '#00A#FFFFB36FB',
        data: [10, 39, 70, 70, 59, 70, 60],
        tension: 0.4
      },
      {
        label: 'Pico de oyentes',
        borderColor: '#DCAB6B',
        data: [30, 59, 70, 60, 59, 75, 50],
        tension: 0.4
      }
    ],
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    }
  }
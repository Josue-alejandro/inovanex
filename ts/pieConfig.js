export const data = {
    labels: ['Móvil', 'Computadora', 'Otros', 'Tablet', 'TV Box', 'TV'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
        legend:{
            position: 'left',
            labels: {
                boxWidth: 16,
                pointStyle: 'circle'
            }
        }
    }
  }
  
export const data = {
    labels: ['Android App', 'Chrome', 'Android Inovanex App', 'Firefox', 'Desconocido', 'ffplay/mpv', 'Simple Radio', 'Edge', 'Samsung Browser', 'Otros'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', ],
        data: [40, 20, 80, 10, 30, 60, 20, 20, 15, 30]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
        legend:{
            position: 'right',
            labels: {
                boxWidth: 16,
                pointStyle: 'circle'
            }
        }
    }
  }
  
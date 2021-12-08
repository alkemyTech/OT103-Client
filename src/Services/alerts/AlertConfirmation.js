import Swal from "sweetalert2";
//import '../../styles/variables.scss'

export const alertConfirmation = () => {
  
  Swal.fire({
    title: '¿Estás seguro?',    
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#dc817e',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    console.log(result)
    if (result.value === true) {
      Swal.fire(
        'Confirmado!',
        '',
        'success',
        
      )
    }
  })
}

export const alertError = () => {
  
  Swal.fire({
    type: 'error',
    title: 'Oops...',
    text: 'Algo anduvo mal!',
  })
}
export const alertInformation = () => {
  
  Swal.fire({
    type: 'info',
    title: 'Información',
    text: 'Información sobre determinada sección',
  })
}
  
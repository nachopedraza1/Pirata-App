import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'

export const alertError = (message) => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `<p>${message}.</p>`.toUpperCase(),
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        }
    });
}

export const alertSuccess = (message) => {
    Swal.fire({
        position: 'bottom-start',
        icon: 'success',
        title: `<p>${message}.</p>`.toUpperCase(),
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        showClass: {
            popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });
}
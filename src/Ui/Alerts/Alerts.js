import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'



export const alert = (type, message) => {
    Swal.fire({
        position: 'bottom-end',
        background: "#1f2024",
        icon: type,
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
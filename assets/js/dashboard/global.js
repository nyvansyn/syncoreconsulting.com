const btnDelete = document.querySelectorAll('.btn-delete')
btnDelete.forEach(btn => btn.addEventListener('click', function () {
   const url = this.dataset.url

   const formDelete = document.querySelector('#deleteModal form')
   formDelete.action = url
}))

const notif = (type, text) => {
   return Swal.fire({
      icon: type,
      title: text,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
   })
}

export {notif}
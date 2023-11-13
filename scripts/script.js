// codigo para activar la alerta...

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [

    // estilo del boton...

    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {

    // accionar..

  alertTrigger.addEventListener('click', () => {

    // mensaje de alerta al oprimir el boton..

    alert('Segunda pagina en proceso de desarrollo!', 'success')
  })
}
export const createContainer = (id: number) => {
  const portalId = `notify-${id}`
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  document.body.appendChild(element)
  return element
}

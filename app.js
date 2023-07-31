// Archivo app.js
const getUserButton = document.getElementById('getUserButton');
const userLinkContainer = document.getElementById('userLinkContainer');
const userInfoContainer = document.getElementById('userInfoContainer');
const pinterestLogoIcon = document.getElementById('pinterestLogoIcon');

getUserButton.addEventListener('click', () => {
  const userLinkInput = document.getElementById('userLink');
  const userLink = userLinkInput.value;
  const username = getUsernameFromLink(userLink);

  if (username) {
    userLinkContainer.classList.add('collapsed');
    userInfoContainer.classList.add('user-info-visible');

    const userInfoHTML = `
      <a href="https://ar.pinterest.com/${username}" target="_blank" class="user-info">
        <img id="pinterestLogoIcon" class="imagenlogo" src="https://cdn-icons-png.flaticon.com/512/3536/3536559.png" alt="Logo de Pinterest">
        <p>${username}</p>
      </a>
    `;

    userInfoContainer.innerHTML = userInfoHTML;
  } else {
    // Si no se ingresa un enlace válido, mostramos el mensaje de error
    userDataDiv.innerHTML = '<p>Ingrese un enlace válido de usuario de Pinterest</p>';
  }
});

function getUsernameFromLink(link) {
  const regex = /\/([^/]+)\/?$/;
  const match = link.match(regex);
  return match ? match[1] : null;
}

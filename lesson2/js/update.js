const date = document.querySelector('#lastupdate');
try {
    const currentTime = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    date.textContent = new Date().toLocaleDateString('en-UK', currentTime);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
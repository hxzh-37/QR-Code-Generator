const form = document.getElementById('qr-form');
const urlInput = document.getElementById('url-input');
const qrImage = document.getElementById('qr-image');
const downloadLink = document.getElementById('download-link');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`;

  qrImage.src = qrUrl;
  qrImage.style.display = 'block';

  downloadLink.href = qrUrl;
  downloadLink.style.display = 'inline-block';
});

// This is a base64 placeholder icon. Replace with your actual icons
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#4f8cff';
ctx.fillRect(0, 0, 512, 512);
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 200px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('C', 256, 256);
canvas.toBlob((blob) => {
  // Save this as your icon
});

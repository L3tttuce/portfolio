const chars = '@%#*+=-:. ';

export function imageToAscii(image, width = 120) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const aspectRatio = image.height / image.width;
  const height = Math.floor(width * aspectRatio * 0.45);

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0, width, height);

  const pixels = ctx.getImageData(0, 0, width, height).data;
  let result = '';

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;

      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const brightness = (r + g + b) / 3;

      const charIndex = Math.floor(
        (brightness / 255) * (chars.length - 1)
      );

      result += chars[charIndex];
    }

    result += '\n';
  }

  return result;
}

export function animateAscii(fullAscii, setAscii, speed = 15) {
  const lines = fullAscii.split('\n');
  let currentLine = 0;

  const interval = setInterval(() => {
    setAscii(lines.slice(0, currentLine).join('\n'));
    currentLine++;

    if (currentLine > lines.length) {
      clearInterval(interval);
    }
  }, speed);

  return interval;
}

export function loadImageAsAscii(imageSrc, setAscii, width = 120, speed = 15) {
  const image = new Image();
  image.src = imageSrc;

  image.onload = () => {
    const generatedAscii = imageToAscii(image, width);
    animateAscii(generatedAscii, setAscii, speed);
  };
}
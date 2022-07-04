const bands = ['The Plot inYou', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Blen', 'Say Anything', 'The Midway', 'We Came as Romans', 'Counterparts', 'oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
     return bandName.replace(/^(a |the |an )/i, '').trim();

}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
     sortedBands
          .map(band => `<li>${band}</li>`)
          .join('');

console.log(sortedBands);
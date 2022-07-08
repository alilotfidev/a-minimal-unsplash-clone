const api = new Api();
const imageListElement = document.querySelector('.image-list');

const updateUi = (images) => {
  console.log(images);
  images.forEach((image) => {
    const isPortrait = image.height > image.width ? 'portrait' : '';
    imageListElement.innerHTML += `
        <div class="image ${isPortrait}">
            <img src="${image.urls.regular}" alt="${image.alt_description}">
        </div>
    `;
  });
};

api
  .searchImages('canada')
  .then((data) => {
    updateUi(data.results);
  })
  .catch((e) => {
    console.log(e);
  });

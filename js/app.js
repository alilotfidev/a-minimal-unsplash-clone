const api = new Api();
const imageListElement = document.querySelector('.image-list');
const searchFormElement = document.querySelector('.search-form');
const searchInputElement = document.querySelector('.search-input');
const SubmitButtonElement = document.querySelector('.search-form button');

const updateUi = (images) => {
  imageListElement.innerHTML = '';
  images.forEach((image) => {
    const isPortrait = image.height > image.width ? 'portrait' : '';
    imageListElement.innerHTML += `
        <div class="image ${isPortrait}">
            <img src="${image.urls.regular}" alt="${image.alt_description}">
            <a class="unsplash-link" href="${image.links.html}">View on Unsplash</a>
        </div>
    `;
  });
};

searchFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = searchInputElement.value;
  SubmitButtonElement.disabled = true;
  searchInputElement.value = 'Loading...';
  api
    .searchImages(searchQuery)
    .then((data) => {
      updateUi(data.results);
      SubmitButtonElement.disabled = false;
      searchInputElement.value = '';
    })
    .catch((e) => {
      console.log(e);
    });
});

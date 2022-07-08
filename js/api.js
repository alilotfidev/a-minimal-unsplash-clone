class Api {
  constructor() {
    this.accessKey = 'u21HCpIGYtk59v1WNXEBk28sETKkj_e7jODCucdueXM';
    this.baseURI = `https://api.unsplash.com/`;
  }
  async searchImages(search) {
    const query = `search/photos/?client_id=${this.accessKey}&query=${search}`;
    const response = await fetch(this.baseURI + query);
    const data = await response.json();

    return data;
  }
}

const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImg(res.data);
  form.elements.query.value = "";
});

const displayImg = shows => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const imageReset = form.addEventListener("click", function () {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
});

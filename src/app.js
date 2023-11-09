import axios from "axios";

const options = {
  method: "POST",
  url: "https://api.neural.love/v1/ai-art/generate",
  headers: { accept: "application/json", "content-type": "application/json" },
  data: {
    style: "FANTASY",
    layout: "SQUARE",
    amount: 4,
    isPublic: true,
    isPriority: false,
    isHd: false,
    steps: 30,
    cfgScale: 7.5,
    autoClean: false,
    prompt: "a cat",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

class Animal {
  constructor(apiUrl, imageDivId) {
    this.apiUrl = apiUrl;
    this.imageDivId = imageDivId;
  }

  async fetchContent() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      const imageUrl = data.url || data.image;

      const imageDiv = document.getElementById(this.imageDivId);
      imageDiv.innerHTML = `<img src="${imageUrl}" alt="Random Image" style="width: 400px; height: 400px;">`;
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  }

  startFetching() {
    this.fetchContent();
    setInterval(() => this.fetchContent(), 5000);
  }
}

class Dog extends Animal {
  constructor() {
    super("https://random.dog/woof.json", "dogImageDiv");
  }
}

class Duck extends Animal {
  constructor() {
    super("https://randomfox.ca/floof/", "foxImageDiv");
  }
}

const dog = new Dog();
dog.startFetching();

const fox = new Duck();
fox.startFetching();

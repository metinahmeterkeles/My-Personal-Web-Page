const imgs = document.querySelectorAll(".img");
const imgsList = [...imgs];

const keywords = [
  "technology",
  "programming",
  "artificial intelligence",
  "cybersecurity",
  "data science",
  "robotics",
  "machine learning",
  "innovation",
  "software development",
  "automation",
  "blockchain",
  "virtual reality",
  "gaming",
  "fintech",
  "finance",
  "healthcare",
  "sustainability",
  "renewable energy",
  "climate change",
  "space exploration",
  "astronomy",
  "nature",
  "photography",
  "art",
  "design",
  "creativity",
  "education",
  "computer",
  "meditation",
  "mindfulness",
  "fitness",
  "nutrition",
  "travel",
  "industry",
  "philosophy",
  "psychology",
  "literature",
  "music",
  "bank",
  "aikido",
  "sports",
  "adventure",
  "entrepreneurship",
  "leadership",
  "teamwork",
  "communication",
  "diversity",
  "community",
];

function getRandomImageUrl(keyword) {
  return `https://source.unsplash.com/random/?${keyword}`;
}

document.addEventListener("DOMContentLoaded", () => {
  imgsList.forEach((img) => {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const randomKeyword = keywords.splice(randomIndex, 1)[0];
    img.src = getRandomImageUrl(randomKeyword);
  });
});

imgs.forEach((paint) => {
  paint.addEventListener("click", () => {
    console.log("tiklandı");
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const randomKeyword = keywords.splice(randomIndex, 1)[0];
    paint.src = getRandomImageUrl(randomKeyword);
  });
});

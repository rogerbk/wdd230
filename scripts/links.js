const baseURL = "https://rogerbk.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(allWeeks) {
  const myLinks = document.querySelector("#displayLinks");
  myLinks.innerHTML = ''; 
  allWeeks.forEach(item => {
    const oneWeek = document.createElement("h2");
    oneWeek.textContent = item.week;

    const linksList = document.createElement("ul");
    item.links.forEach(link => {
      const listitem = document.createElement("li");
      listitem.innerHTML = `<a href="${link.url}">${link.title}</a>`;
      linksList.appendChild(listitem);
    });

    myLinks.appendChild(oneWeek);
    myLinks.appendChild(linksList);
  });
}

getLinks();
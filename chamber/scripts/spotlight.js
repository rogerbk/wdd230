const dataUrl = './data/members.json';

async function fetchMembers() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  const allMembers = data.members;
  const advancedMembers = data.members.filter(member => member.level > 1);
  displayMembers(advancedMembers);
}

fetchMembers();

const displayMembers = (membersList) => {
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * membersList.length);
    const selectedMember = membersList[randomIndex];
    membersList.splice(randomIndex, 1);
    createMemberCard(selectedMember);
  }
}

const cardsContainer = document.querySelector('#cards');

function createMemberCard(member) {
  const memberSection = document.createElement('section');
  memberSection.className = "spot";
  
  const header = document.createElement('span');
  header.textContent = "SPOTLIGHT";
  
  const companyName = document.createElement('h2');
  companyName.textContent = member.name;
  
  const logo = document.createElement('img');
  logo.src = `images/${member.logopath}`;
  logo.alt = member.name;
  
  const sponsorLink = document.createElement('a');
  sponsorLink.textContent = "Visit Sponsor";
  sponsorLink.href = member.url;
  sponsorLink.target = "_blank";
  
  memberSection.appendChild(header);
  memberSection.appendChild(companyName);
  memberSection.appendChild(logo);
  memberSection.appendChild(sponsorLink);
  
  cardsContainer.appendChild(memberSection);
}

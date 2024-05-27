const dataUrl = './data/members.json';
const memberContainer = document.querySelector('#members');

async function fetchMembers() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  console.log(data.members);
  renderMembers(data.members)
}

fetchMembers();

const renderMembers = (membersArray) => {
  membersArray.forEach((member) => {
    const memberName = document.createElement('h3')
    memberName.textContent = member.name;
    const memberAddress = document.createElement('p')
    memberAddress.textContent = member.address
    const memberPhone = document.createElement('p')
    memberPhone.textContent = member.phone
    const memberWebsite = document.createElement('p')
    memberWebsite.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
    const memberLogo = document.createElement('img')
    memberLogo.src = `./images/${member.logopath}`
    memberLogo.className = 'member-logo'
    
    const memberLevel = document.createElement('p')
    switch (member.level) {
      case 1:
        memberLevel.textContent = "Bronze"
        break;
      case 2:
        memberLevel.textContent = "Silver"
        break;
      case 3:
        memberLevel.textContent = "Gold"
        break;
      default:
        memberLevel.textContent = "Not for Profit"
    }
    
    const memberSection = document.createElement('section')
    memberSection.appendChild(memberLogo)
    memberSection.appendChild(memberName)
    memberSection.appendChild(memberAddress)
    memberSection.appendChild(memberPhone)
    memberSection.appendChild(memberWebsite)
    memberSection.appendChild(memberLevel)
    memberContainer.appendChild(memberSection)
  });
}

const gridButton = document.querySelector('#btnGrid')
const listButton = document.querySelector('#btnList')
gridButton.addEventListener('click', () => {
  gridButton.className = "active"
  listButton.className = ""
  memberContainer.className = 'grid'
})
listButton.addEventListener('click', () => {
  listButton.className = "active"
  gridButton.className = ""
  memberContainer.className = 'list'
})
const userProfileUsername = document.getElementById("user-profile-username")

const requestListContainer = document.getElementById("request-list")
const requestAmount = document.getElementById("request-amount")

const connectionsListContainer = document.getElementById("connections-list")
const connectionAmount = document.getElementById("connection-amount")

const randomNames = [
  "Jane Doe",
  "John Doe",
  "Baby Doe",
  "Whatup Doe",
  "Wheredey at Doe",
]

let requests = [
  {
    imageSrc: "./images/user-circle.png",
    userName: "Elon Musk",
  },
  {
    imageSrc: "./images/user-circle.png",
    userName: "Post Malone",
  },
  {
    imageSrc: "./images/user-circle.png",
    userName: "Pre Malone",
  },
  {
    imageSrc: "./images/user-circle.png",
    userName: "Tom from Myspace",
  },
]

let connectionsList = [
  {
    userName: "Tom from Myspace",
  },
  {
    userName: "Tom from Myspace",
  },
  {
    userName: "Tom from Myspace",
  },
  {
    userName: "Tom from Myspace",
  },
  {
    userName: `I shouldn't show up as part of the connections list.`,
  },
  {
    userName: `I shouldn't show up as part of the connections list.`,
  },
  {
    userName: `I shouldn't show up as part of the connections list.`,
  },
]

function pushToConnections(user) {
  connectionsList.push({ userName: user })
}

function acceptRequest(itemIndex) {
  pushToConnections(`${requests[itemIndex].userName}`)
  //check to see if the user was actually added to the connections array :)
  console.log(connectionsList)
  requests.splice(itemIndex, 1)
  generateRequests()
  generateConnections()
}

function denyRequest(itemIndex) {
  requests.splice(itemIndex, 1)
  generateRequests()
}

function generateRequests() {
  let output = ""

  for (let i = 0; i < requests.length; i++) {
    output += `<li class="flex connection__request">
    <img
    class="request-avatar"
    src="./images/user-circle.png"
    alt="user avatar"
    />
    <div class="request-username">
    <span>${requests[i].userName}</span>
    </div>
    <div class="flex acceptance">
    <button onclick="acceptRequest(${i})" title="Accept connection request" class="accept"
      ><i class="fa-solid fa-check"></i
    ></button>
    <button onclick="denyRequest(${i})" title="Deny connection request" class="deny"
      ><i class="fa-solid fa-xmark"></i
    ></button>
    </div>
    </li>`
  }
  requestListContainer.innerHTML = output
  requestAmount.textContent = requests.length
  connectionAmount.textContent = connectionsList.length
}

function generateConnections() {
  let output = ""

  for (let i = 0; i < 4; i++) {
    output += `<li class="connections-list__list-item flex">
                    <img
                      class="request-avatar"
                      src="./images/user-circle.png"
                      alt="user avatar"
                    />
                    <div class="connection-username">
                      <span>Tom from Myspace</span>
                    </div>
                  </li>`
    connectionsListContainer.innerHTML = output
  }
  connectionAmount.textContent = connectionsList.length
}

function randomizeName() {
  let newNameIdx = Math.floor(Math.random() * randomNames.length)

  userProfileUsername.textContent = randomNames[newNameIdx]
}

generateRequests()
generateConnections()

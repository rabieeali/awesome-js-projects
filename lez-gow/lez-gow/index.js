const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const root = document.getElementById("root")
const input = document.getElementById("search")
const select = document.getElementById("select")
const showAll = document.getElementById("show-all")
root.innerHTML = `<div class="spinner-border text-success" role="status"></div>`


// Helper Function

const makeCards = (data) => {
    if (data === null) return root.innerHTML = `<p class="text-center">No Match!</p>`
    let cards = ""
    data.map((d) => {
        cards += `
            <div class="p-2 bg-warning col-3">
                <h5 class="text-dark">${d.id}. ${d.name}</h5>
                <h6 class="text-info">@${d.username}</h6>
                    
                <small>${d.email}</small>
            </div>`
    })
    root.innerHTML = cards
}



const getUsers = async () => {
    try {
        const response = await fetch(BASE_URL);
        const users = await response.json();

        // Make Cards Based On Input Search 


        if (input.value === "") makeCards(users)
        input.addEventListener("keyup", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            let myArr = []
            users.map(p => {
                if (Object.values(p).join(" ").toLowerCase().includes(searchTerm)) {
                    myArr.push(p)
                    makeCards(myArr)
                } else {
                    makeCards(null)
                }
            })
        })

        // Show All

        showAll.addEventListener("click", () => {
            makeCards(users)
        })

        // Make Options


        let options = ""
        users.map(u => {
            options += `<option value=${u.id}>${u.name}</option>`
        })
        select.innerHTML = options


        // Render User Based On Option


        select.addEventListener("change", (e) => {
            const foundUserArr = []

            const foundUser = users.find(u => {
                return u.id == e.target.value
            })
            foundUserArr.push(foundUser)
            root.innerHTML = ""
            makeCards(foundUserArr)
        })

    } catch (error) {
        console.log(error)
    }
}
getUsers()




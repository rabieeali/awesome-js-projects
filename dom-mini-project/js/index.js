const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const root = document.getElementById("root")
const input = document.getElementById("search")
const select = document.getElementById("select")
const logo = document.getElementById("logo")


// Helper Functions

const showLoading = () => {
    const loadingSign = document.createElement("div")
    loadingSign.classList.add("spinner-border", "text-info", "p-5", "fs-1")
    root.append(loadingSign)
}

const makeCards = (data) => {

    let cards = ""
    data.map((d) => {
        cards += `
        <div class="p-2 shadow border rounded col-md-3">
        <h5>${d.id}. ${d.name}</h5>
        <h6 class="text-primary">@${d.username}</h6>
        <small>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
        ${d.email}
        </small>
        <br/>
        <small>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
        ${d.phone}</small>
        <br/>
        <button
        data-bs-toggle="modal" data-bs-target="#exampleModal${d.id}"
        class="btn btn-sm btn-outline-primary d-block py-0 ms-auto">More</button>
        </div>
        
        <div class="modal fade" id="exampleModal${d.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fw-bold text-primary fs-5" id="exampleModalLabel">${d.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p><span class="text-info">Username</span> ${d.username}</p>
            <p><span class="text-info">Email</span> ${d.email}</p>
            <p><span class="text-info">Phone</span> ${d.phone}</p>
            <p><span class="text-info">Address</span> ${d.address.city} ${d.address.street}</p>
            <p><span class="text-info">Office</span> ${d.company.name}</p>
            </div>
          </div>
        </div>
      </div>
        `
    })

    !data.length
        ? root.innerHTML = `<p class="text-center">No Match!</p>`
        : root.innerHTML = cards
}


// Fetch Users

const getUsers = async (url) => {

    showLoading()

    try {
        const response = await fetch(url);
        const users = await response.json();

        // Make Cards Based On Input Search 

        if (input.value === "") makeCards(users)

        input.addEventListener("keyup", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            let myArr = []
            users?.map(p => {
                if (Object.values(p).join(" ").toLowerCase().includes(searchTerm)) {
                    myArr.push(p)
                }
                makeCards(myArr)
            })

        })

        // Show All

        logo.addEventListener("click", () => makeCards(users))

        // Make Options


        let options = ""
        select.innerHTML = `<option value="">...</option>`
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

    } catch (err) {
        console.log(err.message)
        if (err) {
            root.innerHTML = `<h1 class="text-danger">Oops ...! <br/> Something Went wrong</h1>`
        }
    }
}
getUsers(BASE_URL)



const btn = document.querySelector(".url-form__btn");
const input = document.querySelector(".url-form__input");
const resData = document.querySelector(".resData__h1")



btn.addEventListener("click", checkInput);

function checkInput(){
    let userInputValue = input.value;
    let link = { "url" : `${userInputValue}`}
    const url = "https://rel.ink/api/links/";
    const urlSearch = "https://rel.ink/"

    // Fetch Data Method Settings
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
    }
    async function fetchData() {
        const response = await fetch(url, settings);
        const data = await response.json();
        console.log(data.hashid)

        function placeData(){
            createNewTable();
        }

        function createNewTable(){
            const newURL = url + data.hashid;
            let newCon = document.createElement("SECTION")
            let newDiv = document.createElement("DIV")
            let newh2 = document.createElement("H2")
            let newbtn = document.createElement("BUTTON")

            newCon.className = "new__Con"
            newDiv.className = "new__Wrap" 
            newh2.className = "new__Link"
            newbtn.className = "new__btn"

            let infoDiv = document.createTextNode(`${urlSearch}${data.hashid}`);
            let btnText = document.createTextNode("Copy Link");

            newCon.appendChild(newDiv)
            newDiv.appendChild(newh2)
            newh2.appendChild(infoDiv)
            newDiv.appendChild(newbtn)
            newbtn.appendChild(btnText)

            const currentEle = document.querySelector(".articles-wrap"); 
            document.body.insertBefore(newCon, currentEle);

            newbtn.addEventListener("click", () => {
                // newh2.textContent.select();
                // document.execCommand("copy")
                navigator.clipboard.writeText(newh2.textContent)
            })
        }

        placeData();
    }

    

    if ( userInputValue === "" ) {
        console.log("Please enter a url, input field is empty.")
    } else {
        console.log("Thank you for data!: ")
        fetchData();
    }
}


// async function fetchData() {
//     const response = await fetch(url, settings);
//     const data = await response.json();

//     function placeData(){
//         console.log(data.hashid + " working")
//         resData.innerHTML = url + data.hashid;
//     }

//     
//     return data.hashid;
// }
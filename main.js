const btn = document.querySelector(".url-form__btn");
const urlValue = document.querySelector(".url-form__input");
const resData = document.querySelector(".resData__h1")

let value = urlValue.value;   
const url = "https://rel.ink/api/links/";
const link = {
        "url" : "https://www.youtube.com/watch?v=_KbFNKWdnvE"
    }

const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(link),
}

async function fetchData(urlVariable) {
    const response = await fetch(urlVariable, settings);
    const data = await response.json();

    function placeData(){
        console.log(data.hashid + " working")
        resData.innerHTML = url + data.hashid;
    }

    placeData();
    return data.hashid;
}

fetchData(url);
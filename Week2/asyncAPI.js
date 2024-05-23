async function apiTest(){
    let url = "https://catfact.ninja/fact";
    let response = await fetch(url);
    let caatinfo = await response.json()
    console.log(catinfo);
}

apiTest();
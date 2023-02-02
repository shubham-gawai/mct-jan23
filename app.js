//

const input = (e) =>{
    e.preventDefault();

    var inputValue = document.getElementById('inp1').value;

    if(inputValue===""){
        alert("enter image name ..");
    }
    
    // fetch(`https://app.zenserp.com/api/v2/search?apikey=4ce7f310-a04b-11ed-9955-d77d64880e43&q=${inputValue}&tbm=isch`)
    fetch(`https://app.zenserp.com/api/v2/search?apikey=fd5b2940-a2eb-11ed-b3dd-8fe97584fb9b&q=${inputValue}&tbm=isch`)
    .then((response)=>response.json())
    .then((data)=>{

        // if the api does not give result then must replace the api key cause it only will suppport 50 requests
        // console.log(data); 
        var html = ''
        var resref = document.getElementById("result");
                            for(let i = 0; i < data.image_results.length; i++) {
                               html += `<img src=${data.image_results[i].sourceUrl} alt="not found">`;
                            }
        resref.innerHTML=html;


                // resref.innerHTML = 
                //     `   <img src=${data.image_results[0].sourceUrl} alt="not found">
                //         <img src=${data.image_results[1].sourceUrl} alt="not found">
                //         <img src=${data.image_results[2].sourceUrl} alt="not found">
                //         <img src=${data.image_results[3].sourceUrl} alt="not found">
                //         <img src=${data.image_results[4].sourceUrl} alt="not found">
                //         <img src=${data.image_results[5].sourceUrl} alt="not found">
                //         <img src=${data.image_results[6].sourceUrl} alt="not found">
                //         <img src=${data.image_results[7].sourceUrl} alt="not found">
                //         <img src=${data.image_results[8].sourceUrl} alt="not found">
                //         <img src=${data.image_results[9].sourceUrl} alt="not found">
                //         <img src=${data.image_results[10].sourceUrl} alt="not found">
                //         <img src=${data.image_results[11].sourceUrl} alt="not found">
                //         <img src=${data.image_results[12].sourceUrl} alt="not found">
                //         <img src=${data.image_results[13].sourceUrl} alt="not found">
                //         <img src=${data.image_results[14].sourceUrl} alt="not found">
                //         <img src=${data.image_results[15].sourceUrl} alt="not found">
                //     `
    })
}

let form = document.getElementById("form-inp");
form.addEventListener('submit',input);






















    // fetch('https://app.zenserp.com/api/v2/search?q=Pied%20Piper&apikey=21353170-9f2f-11ed-b71c-8f3867da0348')

    // fetch(`https://app.zenserp.com/api/v2/search?apikey=4ce7f310-a04b-11ed-9955-d77d64880e43=${inputValue}`)

    // fetch(`https://app.zenserp.com/api/v2/search?apikey=4ce7f310-a04b-11ed-9955-d77d64880e43&q=cat`)

    
                            
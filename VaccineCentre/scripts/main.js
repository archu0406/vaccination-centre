function findDowntown (){
    var popup = document.getElementById("popup");
    var hide = document.getElementsByClassName("hide")[0];
    const res = fetch ('https://private-c13cf-archana8.apiary-mock.com/vaccination_centers/downtown')
            .then(res => res.json()).then(data => {
                console.log(data);
                for(let i=0; i<4; i++){
                    let name = data.centers[i].center_name;
                    let add = data.centers[i].Address;
                    let ph = data.centers[i].Phone_No;
                    let avail = data.centers[i].Vaccination;
                    popup.style.display="block";
                    document.getElementById("centrename_"+ (i+1)).innerHTML=name;
                    document.getElementById("address_"+ (i+1)).innerHTML=add;
                    document.getElementById("phno_"+ (i+1)).innerHTML=ph;
                    document.getElementById("avail_"+ (i+1)).innerHTML=avail;   
                }
            });

        hide.onclick = function() {
            popup.style.display="none";
        }
}

function findScarborough() {
    var popup = document.getElementById("popup");
    var hide = document.getElementsByClassName("hide")[0];
    const res = fetch ('https://private-c13cf-archana8.apiary-mock.com/vaccination_centers/scarborough')
            .then(res => res.json()).then(data => {
                console.log(data);
                for(let i=0; i<4; i++){
                    let name = data.centers[i].center_name;
                    let add = data.centers[i].Address;
                    let ph = data.centers[i].Phone_No;
                    let avail = data.centers[i].Vaccination;
                    popup.style.display="block";
                    document.getElementById("centrename_"+ (i+1)).innerHTML=name;
                    document.getElementById("address_"+ (i+1)).innerHTML=add;
                    document.getElementById("phno_"+ (i+1)).innerHTML=ph;
                    document.getElementById("avail_"+ (i+1)).innerHTML=avail;   
                }
            });

        hide.onclick = function() {
            popup.style.display="none";
        }
}

function findMississauga (){
    var popup = document.getElementById("popup");
    var hide = document.getElementsByClassName("hide")[0];
    const res = fetch ('https://private-c13cf-archana8.apiary-mock.com/vaccination_centers/mississauga')
            .then(res => res.json()).then(data => {
                console.log(data);
                for(let i=0; i<4; i++){
                    let name = data.centers[i].center_name;
                    let add = data.centers[i].Address;
                    let ph = data.centers[i].Phone_No;
                    let avail = data.centers[i].Vaccination;
                    popup.style.display="block";
                    document.getElementById("centrename_"+ (i+1)).innerHTML=name;
                    document.getElementById("address_"+ (i+1)).innerHTML=add;
                    document.getElementById("phno_"+ (i+1)).innerHTML=ph;
                    document.getElementById("avail_"+ (i+1)).innerHTML=avail;   
                }
            });

        hide.onclick = function() {
            popup.style.display="none";
        }
}

function submitForm(){
    var success_container = document.getElementById("success_container");
    fetch('http://127.0.0.1:8080/submission', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({"name": document.getElementById("name"), "email": document.getElementById("email")})
    }).then(res => res.json()).then(res => console.log(res));

    success_container.style.display = "block";
}

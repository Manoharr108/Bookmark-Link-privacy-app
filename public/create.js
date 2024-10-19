document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("create-btn").addEventListener("click",async(e)=>{
        e.preventDefault();
        let res, data;
        if(document.getElementById("linkaddress").value){
            res = await fetch("http://localhost:3000",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    originalLink:document.getElementById("linkaddress").value,
                    password:document.getElementById("password1").value,
                })
            })
            data = await res.json()
            document.getElementsByClassName("redirectarea")[0].innerHTML = `
             <a href="${data.newLink}">
             <Button type="button" id="redirect-btn" class="btn btn-primary">Redirect Now <i class="fa-solid fa-share"></i></Button>
             </a>
            `
            document.getElementsByClassName("linkprovider")[0].innerHTML=""
            let address = document.createElement('input')
            address.value = data.newLink;
            document.getElementsByClassName("linkprovider")[0].append(address);
            // document.getElementsByClassName("linkprovider")[0].innerHTML+=`
            // <button onclick="copyfunction('${address.value}')">Copy</button>
            // `
            let btn = document.createElement("button")
            btn.innerText = "Copy"


            let tooltip = document.createElement("span");
            tooltip.innerText = "Copied!";
            tooltip.style.position = "absolute";
            tooltip.style.visibility = "hidden";  
            tooltip.style.backgroundColor = "#333";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "5px";
            tooltip.style.borderRadius = "4px";
            tooltip.style.marginLeft = "54px";  
            tooltip.style.fontSize = "12px";
            tooltip.style.transition = "visibility 0.2s ease";

            document.getElementsByClassName("linkprovider")[0].append(tooltip);

            btn.addEventListener("click", () => {
                navigator.clipboard.writeText(address.value)
                tooltip.style.visibility = "visible";
                setTimeout(() => {
                    tooltip.style.visibility = "hidden";
                }, 5000);
            });
            
            document.getElementsByClassName("linkprovider")[0].append(btn)
            document.getElementById("linkaddress").value = "";
            document.getElementById("password1").value ="" ;
        } 
        if(res){

        }
        else{
            document.getElementById("linkaddress").value = "";
            document.getElementById("password1").value ="" ;
        }
    })

})
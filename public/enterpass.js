document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("authenticate").addEventListener("click",async(e)=>{
        e.preventDefault()
        const pathname = window.location.pathname;
        const id = pathname.split("/").pop();
        let res;
        try{
            res = await fetch(`http://localhost:3000/${id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    password:document.getElementById("passvalue").value
                })
            });
            if(res){
                let data = await res.json();
                console.log(data.link)
                window.location.href = data.link;
            }
        }
        catch(err){
            console.log("something went wrong", err.message)
        }
    })
})
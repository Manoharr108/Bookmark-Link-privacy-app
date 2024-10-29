document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("authenticate").addEventListener("click",async(e)=>{
        e.preventDefault()
        const pathname = window.location.pathname;
        const id = pathname.split("/").pop();
        let res;
        try{
            res = await fetch(`/${id}`,{
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
                if(data.message!="I'm getting it successfully!"){
                    document.getElementById("passvalue").value = ''
                     return alert("incorrect password!")
                }
                window.location.href = data.link;
            }
            else{
                console.log("password incorrect")
            }
        }
        catch(err){
            console.log("something went wrong", err.message)
        }
    })
})
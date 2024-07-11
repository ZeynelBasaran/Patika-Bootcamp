window.addEventListener("keyup",(e)=>{
    const val = document.querySelectorAll("ul>li")
    val.forEach((el)=>{
        let text = el.innerText.toLowerCase()
        
        if(text==e.key){
            stopSongs()
            let sounds = `a${el.id}`
            document.getElementById(sounds).play()
            el.classList.add("rgba")
            setTimeout(() => {
                el.classList.remove("rgba")
            }, 500);

        }
        function stopSongs(){
            const audi = document.querySelectorAll("audio")
            audi.forEach((adios)=>{
                adios.pause()
                adios.currentTime = 0;
            })
        }
        
    })
})









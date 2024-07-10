/*
const audio = ["boom","clap","drum","hihat","kick","openhat","ride","snare","tink","wav"]

audio.forEach(sound => {
    const btn = document.createElement(`button`)
    btn.classList.add(`btn`)
    btn.innerText = sound
    body.appendChild(btn)
    
    btn.addEventListener("click",(a) => {
        stopSongs()
        document.getElementById(sound).play()

    })

});
*/

window.addEventListener("keyup",(e)=>{
    const val = document.querySelectorAll("ul>li")
    
   
    val.forEach((el)=>{
        let text = el.innerText.toLowerCase()
        
        if(text==e.key){
            let sounds = `a${el.id}`
            document.getElementById(sounds).play()
            el.classList.add("rgba")
            setTimeout(() => {
                el.classList.remove("rgba")
            }, 500);


        }
    })
})









const apiKey = "058fba36a192a4c4dc7264f33a2f31ce"



function weatherCity(city){
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(weatherUrl).then((res)=>{
        return res.json()
    }).then((data=>{
       renderApi(data)
        console.log(data)
    }))
    .catch(()=>{
        console.log("City Not Found")
        document.querySelector(".city").textContent = `Not Found`
        document.querySelector(".feel").textContent = `0`
        document.querySelector(".humidity").textContent = `0`
        document.querySelector("#Wind").textContent =`0`
        document.querySelector(".temp").textContent =`0`
        document.querySelectorAll(".d-temp").forEach((val)=>{
            val.textContent = `0`
        })
        document.getElementById("popupBox").style.display = `flex`
        
        setTimeout(function(){
            document.getElementById("popupBox").style.display = `none`
            window.location.reload()
        },3000)
    })
}



function renderApi(arr){
    const icon = document.getElementById("icon")
    const cityPond = document.querySelector(".city")
    const temp = document.querySelector(".temp")
    const feel = document.querySelector(".feel")
    const humidity = document.querySelector(".humidity")
    const wind = document.getElementById("Wind")
    const desc = document.querySelector(".desc")
    const LatitudeD = document.getElementById("lanM")
    const LongitudeD = document.getElementById("logM")
    const tempMaxM = document.getElementById("temp_maxM")
    const tempMinM = document.getElementById("temp_minM")
    const visibility = document.getElementById("visL")
    let iconUrl = arr.weather[0].icon
        cityPond.innerHTML = `<a href="https://www.google.com/search?q=About+${arr.name}" target="main">${arr.name}</a>`;
        temp.innerHTML = `${Math.floor(arr.main.temp)}<span>°C</span>` 
        icon.src = `https://openweathermap.org/img/wn/${iconUrl}@2x.png`
        feel.innerHTML = `Feels like <strong> ${Math.floor(arr.main.feels_like)}°C</strong>`
        humidity.innerHTML = `Humidity <strong> ${Math.floor(arr.main.humidity)}%</strong>`
        wind.innerHTML = `Wind <strong>${arr.wind.speed} km/h</strong>`
        desc.textContent = `${arr.weather[0].description}`
        if(arr.coord.lat>0){
            LatitudeD.innerHTML = `${arr.coord.lat}<sup>*</sup>N`
        }
        else{
            LatitudeD.innerHTML = `${arr.coord.lat}<sup>*</sup>S`
        }

        if(arr.coord.lon>0){
            LongitudeD.innerHTML = `${arr.coord.lon}<sup>*</sup>E`
        }
        else{
            LongitudeD.innerHTML = `${arr.coord.lon}<sup>*</sup>W`
        }

        tempMaxM.innerHTML = `${Math.floor(arr.main.temp_max)}<sup>*</sup>c`
        tempMinM.innerHTML = `${Math.floor(arr.main.temp_min)}<sup>*</sup>c`
        visibility.textContent = `${arr.visibility / 1000} km`
    }
    
    weatherCity("gurugram")
    
    const form = document.querySelector(".search")
    const searchInput = document.getElementById("searchInput")
    const switchMode = document.getElementById("switchMode")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let value = searchInput.value.trim() 
        if(!value) return
        else weatherCity(value) 
            
        searchInput.value = ""
    })

    // switchMode.addEventListener("click",(e)=>{
        
    //     if(switchMode.textContent === "🌙"){
    //         document.querySelector("body").style.background = "linear-gradient(180deg, #dff3ff 0%, var(--bg) 100%)"
    //         switchMode.textContent = "☀️"
    //         switchMode.style.background = ``
    //         document.querySelector(".app").style.background = "white"
    //         searchInput.style.border = `1px solid rgba(0, 0, 0, 0.08)`
    //         document.querySelector("#pop").style.color = "black"
    //     }
    //     else{
    //         document.querySelector("body").style.background = "black"
    //         switchMode.textContent = "🌙"
    //         document.querySelector(".app").style.background = "rgba(255, 255, 255, 0.6)"
    //         switchMode.style.background = `black`
    //         searchInput.style.border = `1px solid black`
    //         document.querySelector("#pop").style.color = "white"
    //     }
    // })


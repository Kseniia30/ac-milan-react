import axios from "axios"
const key = "AIzaSyCicwUeF5hHf1idIW8XtBvRI66r5GLn4LY"
const channelId = "UCKcx1uK38H4AOkmfv4ywlrg"

//const player = res.data.items[0].player.embedHtml

function get() {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&channelId=${channelId}`)
}
function getVideo(id) {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${key}&part=player&id=${id}`)
}
const videoIds = []
const video = []
const player = []
get().then(res => {
  res.data.items.map(item => videoIds.push(item.id.videoId))
  videoIds.map(id => getVideo(id).then(res => video.push(res.data.items[0].player.embedHtml)))
})

setTimeout(() => {
  video.map(item => {
    const iframe = item.split(" ")
    const src = iframe[3]
    return player.push(src)
    
  })
}, 1000);
setTimeout(() => {
  console.log(player);
}, 2000);
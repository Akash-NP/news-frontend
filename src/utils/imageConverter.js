export const displayImg = (url) => {
    let ip="http://3.109.211.218/"
// imgString=`http://localhost:4000/public/3869b0b1-abfb-4b56-93d6-2b0a7a921813-download-(22).jfif`
    if (url.startsWith("http://localhost")) {
        
        ip += url.slice(16)
        return ip
    }
    else {
        return url
    }
    
}
export default class ImageHelper {
  getUrl(path, size=150, fm='jpeg'){
    if (path){
      return path+`?w=${size}&fm=${fm}`
    } else {
      return `https://via.placeholder.com/${size}x${size}`
    }
  }
}

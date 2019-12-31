
import {BASE_URL} from "./index";

export default function download(zip) {

  axios.get(`${BASE_URL}/main/file/`, {responseType: "blob"}).then(
    res => {
      if (!res) {
        return false
      }

      let blob = new Blob([res.data], {type: 'application/octet-stream'})
      let objectUrl = URL.createObjectURL(blob)
      window.location.href = objectUrl
    }
  )


}

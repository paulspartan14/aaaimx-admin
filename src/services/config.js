
import trae from 'trae'

const DEVELOPMENT = false
const aaaimxAPI = trae.create({
  baseUrl: DEVELOPMENT ? 'http://localhost:3000' : 'https://aaaimx-api.herokuapp.com',
})

export default aaaimxAPI

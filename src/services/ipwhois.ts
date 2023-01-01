import axios from 'axios'

export async function getIPInfo (ip: string) {
  return axios.get(`http://ipwho.is/${ip}`).then(res => res.data)
}
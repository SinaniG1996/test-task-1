import db from '../../services/mongodb'
import { getIPInfo } from '../../services/ipwhois'

export default class IPController {
  protected ipCollection = db.collection('ip')
  async ipLookup (ip: string) {
    let ipInfo = await this.ipCollection.findOne({ ip })
    if (!ipInfo) {
      ipInfo = await getIPInfo(ip)
      await this.ipCollection.insertOne(ipInfo as object)
    }

    return ipInfo
  }
  async dropIPInfoCache (ip: string) {
    return this.ipCollection.deleteOne({ ip })
      .then(() => true)
  }
}
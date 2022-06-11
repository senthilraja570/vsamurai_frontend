import axios from 'axios';
import NetworkService from './network';
class WhitelistService {
  async getWhitelistSignature(address) {
    const apiBaseURI = process.env.API_URI || "http://localhost:3000";
    const chainId = await NetworkService.getNetworkId();
    const apiURL = `${apiBaseURI}/api/signatures/whitelist?chainId=${chainId}&address=${address}`
    return axios.get(apiURL).then(res => res.data);
  }
}


export default new WhitelistService();
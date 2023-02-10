import SuperFetch from '../../core/superFetch';
import { serialize } from "../../core/serialize";

class services {
    get = async (keyword) => {
        return await SuperFetch.get(`address?${serialize({
            offset: 0,
            limit: 100,
            keyword
        })}`).then((response) => {
            return response;
        });
    };
}

export default new services();

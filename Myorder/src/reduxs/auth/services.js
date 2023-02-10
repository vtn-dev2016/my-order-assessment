import SuperFetch from '../../core/superFetch';
class services {
    signin = async (userCredentials) => {
        console.log("services signin ", SuperFetch);
        return await SuperFetch.post(`signin`, userCredentials).then((response) => {
            return response;
        });
    };
}

export default new services();

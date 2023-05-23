import axios from 'axios'

export function getUserRepos(username: String){
    return axios.get(`https://api.github.com/users/${username}/repos`,{
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "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",
            "X-GitHub-Api-Version": "2022-11-28"
        }
    }).then(function (response){
        if (response.status !== 200) {
            return `Request to github repos failed with status: ${response.status} and error: ${response.data}`;
        }
        return response.data;
    }).catch(function (error){
        return `getUserRepos method failed with error: ${error}`;
    })
}

export function getUser(username: String) {
    return axios.get(`https://api.github.com/users/${username}`,{
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "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",
            "X-GitHub-Api-Version": "2022-11-28"
        }
    }).then(function (response){
        if (response.status !== 200) {
            return `Request to github failed user with status: ${response.status} and error: ${response.data}`;
        }
        return response.data;
    }).catch(function (error){
        return `getUser method failed with error: ${error}`;
    })
}
export const BASE_URL = "https://incognito.litmus7.com:8081/";

const ENDPOINTS = {
    googleLogin: "google/login",
    getActiveContests: "api/contests",
    getLeaderboard: "api/leaderboard?contestId={:id}&page={:page}&limit={:limit}",
    getCurrentQuestion: "api/questions/currentquestion/?contestId={:contestId}",
    submitContestAnswer: "api/questions/answer",
    submitFeedback: "api/feedback",
};

const replaceParams = (url, params) => {
    const regex = /\{:[A-Za-z0-9-_]+\}/g;
    let index = 0;
    const path = url ? url.replace(regex, () => params[index++]) : "";
    return path;
};

const ApiUrl = {

    getUrl: (key, params = []) => {
        const endpoint = ENDPOINTS[key];
        const path = replaceParams(endpoint, params);
        return path;
    },

    getFullUrl: (key, params = []) => {
        const path = ApiUrl.getUrl(key, params);
        const url = BASE_URL + path;
        return url;
    },

};

export default ApiUrl;
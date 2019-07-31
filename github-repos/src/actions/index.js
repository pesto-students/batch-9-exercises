import { FETCH_GITHUB_REPOS } from '../constants/action-types';

export function getRepos(payload) {
    return { type: FETCH_GITHUB_REPOS, payload };
};
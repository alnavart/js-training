//Top 10 more starts repositories
//show statistics
// promise all, que usuarios comparten repos

fetch('https://api.github.com/repositories')
    .then(response => response.json())
    .then(repos => console.log(repos));


fetch('https://api.github.com/repositories')
    .then(response => response.json())
    .then(repos => repos.sort((a, b) => a.stargazers_count - b.stargazers_count))
    .then(sortedRepos => sortedRepos.forEach( sortedRepo =>
        console.log(`Repo: ${sortedRepo.url} with starts: ${sortedRepo.stargazers_count}`)));

fetch('https://api.github.com/repositories?since=364')
    .then(response => response.json())
    .then(res => res.map(basicRepo => fetch(`https://api.github.com/repos/${basicRepo.full_name}`)))
    .then(repos => repos.sort((a, b) => a.stargazers_count - b.stargazers_count))
    .then(sortedRepos => sortedRepos.forEach( sortedRepo =>
        console.log(`Repo: ${sortedRepo.url} with starts: ${sortedRepo.stargazers_count}`)));

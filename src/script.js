// TODO: Add some sample repositories as a static array

function createRepositoryCard() {
  // Implement string template HTML builder for repo card
}

function renderRepositories() {
  // Implement DOM manipulation function to add list items in the repo list
}

// Comment this out when you start working on the search functionality
renderRepositories();

function handleSearch() {
  // Implement form submit event handler
}

async function fetchRepositories() {
  // Pass parameter to the search endpoint
  return fetch("https://api.github.com/legacy/repos/search/<placeholder>")
    .then((res) => res.json())
    .then((res) => res.repositories);
}

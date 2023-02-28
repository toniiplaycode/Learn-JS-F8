const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const fetchFollowers = async() => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export default fetchFollowers;
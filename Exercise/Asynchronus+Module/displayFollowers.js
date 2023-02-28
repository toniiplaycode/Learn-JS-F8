const displayFollowers = (followers) => {
    // console.log(followers);
    const html = followers.map(element => {
        // console.log(element);
        const {login: name, avatar_url: avatar, html_url: linkGithub} = element;
        // console.log(name, avatar, linkGithub);
        return `
            <div class="each-follower">
                <img class="each-follower-img" src="${avatar}" alt="">
                <p class="each-follower-name">${name}</p>
                <button class="each-follower-btn" onclick="window.location.href='${linkGithub}'">VIEW PROFILE</button>
            </div>
        `;
    }).join('');
    // console.log(html);
    document.querySelector('.followers').innerHTML = html;    
}

export default displayFollowers;
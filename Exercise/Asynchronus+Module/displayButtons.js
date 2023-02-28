const displayButtons = (pages, currentIndex) => {
    // console.log(currentIndex);
    const html = pages.map((_, index) => {
        // console.log(index);
        return `
            <button class="pagination-btn ${index === currentIndex ? 'active-btn' : null}" 
            data-index="${index}">${index + 1}</button>
        `
    });
    html.push('<button class="next-btn"> > </button>');
    html.unshift('<button class="prev-btn"> < </button>');
    // console.log(html.join(''));
    document.querySelector('.pagination').innerHTML = html.join('');
};

export default displayButtons;
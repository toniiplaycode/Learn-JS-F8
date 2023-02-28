const paginate = (followers) => {
    const eachPage = 10;
    const numberOfPage = Math.ceil(followers.length / eachPage); // số trang
    
    const newFollowers = Array.from({length: numberOfPage}, (_, index) => { // tham số thứ nhất là element không dùng nên dùng dấu "_"
        const start = index * eachPage;
        return followers.slice(start, start + eachPage); // mỗi lần map trả về 10 phần tử, lặp đi lặp lại 10 tiếp theo
    });
    // console.log(newFollowers);
    return newFollowers;
}
export default paginate; 
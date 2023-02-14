function showFakeAPI(){
    var request = new XMLHttpRequest();
    request.open("get", "getData.txt");
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.querySelector('.result').innerHTML = this.responseText;
        }
    }
    request.send();
};
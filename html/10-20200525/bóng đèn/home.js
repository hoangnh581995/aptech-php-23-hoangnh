function batden(){
    var a = document.getElementById('anh');
    console.log(a.src);
    if(a.src == 'http://127.0.0.1:5501/.vscode/bailammoi/toi.gif'){
        a.src = 'sang.gif';
    }
    else{
        a.src ='toi.gift';
    }
}

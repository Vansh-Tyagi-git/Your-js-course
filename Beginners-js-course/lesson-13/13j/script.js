function onclickButton(thisString){
    document.querySelector('.gamming').classList.remove('modifyButton');
    document.querySelector('.music').classList.remove('modifyButton');
    document.querySelector('.tech').classList.remove('modifyButton');
    document.querySelector(thisString).classList.add('modifyButton');
}


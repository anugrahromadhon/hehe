function saklar(params){
    // console.log(params);
    
    let lampu1 = document.getElementById("lampu1");
    
    if(params=='on'){
        // Nyala
        lampu1.src = "assets/images/on.gif";
    }
    if(params=='off'){
        // Mati
        lampu1.src = "assets/images/off.gif";
    }

    return lampu1;

    // console.log('Test saklar');
    // let lampu1 = document.getElementById("lampu1");
    // console.log(lampu1.src);
    // lampu1.src = "assets/images/on.gif"
}    
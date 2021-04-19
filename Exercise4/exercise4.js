function use(){
    let border_color = document.querySelector("#border_color").value;
    let background_color = document.querySelector("#background_color").value;
    let border_width = document.querySelector("#border_width").value + "px";

    document.getElementById("story").style.borderColor = border_color;
    document.getElementById("story").style.backgroundColor = background_color;
    document.getElementById("story").style.borderWidth = border_width;
}
$(function(){
    //todolist
    $("[name='important']").on("change",updateProgress_1);
    $("[name='cloth']").on("change",updateProgress);
    $("[name='3c']").on("change",updateProgress_2);
    $("[name='comp']").on("change",updateProgress_3);

    //video
    $("#myVideo").attr("src","images/cloth.mp4");
    $("#playBtn").on("click",function(){
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        }
        else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });

});

function updateProgress_1(){
    let hasChecked=0;
    for(let x=0;x<$("[name='important']").length;x++){
        if($("[name='important']")[x].checked){
            hasChecked+=1;
        }
    }
    // $("meter").attr("min",0);
    $("#important_bar").attr("max", $("[name='important']").length);
    $("#important_bar").attr("value", hasChecked);
}

function updateProgress(){
    let hasChecked=0;
    for(let x=0;x<$("[name='cloth']").length;x++){
        if($("[name='cloth']")[x].checked){
            hasChecked+=1;
        }
    }
    // $("meter").attr("min",0);
    $("#cloth_bar").attr("max", $("[name='cloth']").length);
    $("#cloth_bar").attr("value", hasChecked);
}

function updateProgress_2(){
    let hasChecked=0;
    for(let x=0;x<$("[name='3c']").length;x++){
        if($("[name='3c']")[x].checked){
            hasChecked+=1;
        }
    }
    // $("meter").attr("min",0);
    $("#3c_bar").attr("max", $("[name='3c']").length);
    $("#3c_bar").attr("value", hasChecked);
}

function updateProgress_3(){
    let hasChecked=0;
    for(let x=0;x<$("[name='comp']").length;x++){
        if($("[name='comp']")[x].checked){
            hasChecked+=1;
        }
    }
    // $("meter").attr("min",0);
    $("#comp_bar").attr("max", $("[name='comp']").length);
    $("#comp_bar").attr("value", hasChecked);
}
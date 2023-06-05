//YouTubeVideoID
let playList = [
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY",
    "qFDHE9YwQbY"
];

let foodplayer;//YouTubePlayer
var randomnum;

//播放起訖秒數
let playTime=[
    [50,70],
    [124,144],
    [183,203],
    [247,267],
    [304,324],
    [355,375],
    [406,426],
    [474,494],
    [524,544],
    [575,595],
    [612,632]
];

let food_Array = [
    "明洞餃子",
    "富村生牛肉",
    "王妃家韓式燒肉",
    "陳玉華奶奶",
    "申美京辣炒雞排",
    "ISAAC TOAST",
    "土俗村蔘雞湯",
    "BHC炸雞",
    "麻藥飯捲",
    "河南張豬肉",
    "無人拉麵店"
];

let food_loaction = [
    "地址：首爾特別市中區明洞10街29",
    "地址：首爾特別市鐘路區鐘路四街165-11",
    "地址：首爾特別市中區忠武路2街63-3,2F",
    "地址：首爾特別市鐘路區鐘路40Ga街18",
    "地址：首爾特別市麻浦區Wausan-ro 21-gil 31-10",
    "地址：首爾特別市中區明洞10街17-1",
    "地址：首爾特別市鍾路區紫霞門路5街5",
    "地址：首爾特別市中區明洞7街21 1~2F",
    "地址：首爾特別市鐘路區鐘路5街395-4",
    "地址：首爾特別市中區明洞9Ga街12",
    "無人拉麵店"
];

//隨機選取食物
$(function(){
    $("#randomfood").on("click",function(){
        var numberOfListItem = food_Array.length;
        randomnum = Math.floor(Math.random()*numberOfListItem);
        console.log(randomnum);
        $("#changename").text(food_Array[randomnum]);
        $("#foodlocation").text(food_loaction[randomnum]);  
        //$("#foodimg").attr("src",imageURL_Array[randomnum]);

        foodplayer=new YT.Player("videoplayer",{
            height:"390",
            width:"640",
            videoId:playList[randomnum],
            playerVars:{
                autoplay:0, //是否自動撥放
                controls:0, //是否顯示控制項
                start:playTime[randomnum][0], //開始秒數
                end:playTime[randomnum][1], //結束秒數
                iv_load_policy:3
            },
        });

        //$("#videoname").text(foodplayer.getVideoData().title);
        foodplayer.playVideo();
              
    });
});


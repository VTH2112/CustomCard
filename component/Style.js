export const Style = `<style>
.container{
    background-color:gray ; 
    width : 400px;
    height:650px;
    margin-top: 120px;
    border-radius:20px;
    box-shadow: -1px 15px 30px -12px black;
}
.header-card{
    width:100%;
    height:40%;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    img {
        width: 400px;
        position: absolute;    
        top: -34px;
        left: -37px;
      }
}
.body-card{
    width:100%;
    height:45%;
    background-color:white;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
}
.level-card{
    text-align:center;
    width:100%;
    text-transform:uppercase;
    color: #FF1493;
}
.name-card{
    width:100%;
    text-align:center;
}
h1{
    margin-top:0;
}
.description-card{
    width:100%;
    text-align:center;
    font-size:15px;
}
    
.footer-card{
    width:100%;
    height:15%;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    display:flex;
    flex-wrap:wrap;
}
.box-1{
    border-right: 1px solid #606060;
    width:33.33%;
    height:100%;
    border-bottom-left-radius:20px;
    display:flex;
    justify-content:center;
   flex-direction:column;
   align-items:center;
}
.train-num, .train-text , .speed-num, .speed-text , .cost-num, .cost-text{
    color:white;
    font-size:23px;
}
sup{
    font-size:12px;
}
.box-2{
    border-right: 1px solid #606060;
    width:33%;
    height:100%;
    display:flex;
    justify-content:center;
   flex-direction:column;
   align-items:center;
}
.box-3{
    width:33%;
    height:100%;
    border-bottom-right-radius:20px;
    display:flex;
    justify-content:center;
   flex-direction:column;
   align-items:center;
}

</style>`
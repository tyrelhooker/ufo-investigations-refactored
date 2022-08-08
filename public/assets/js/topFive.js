$.get("/api/topfive",function(data){
  for (let i=0;i<5;i++){
  $("#scores").append(
    `<p>Player: ${data[i].userName}</p>
    <p>Wins: ${data[i].wins}</p>
    <br><br>`
  )
  console.log(data);
}
});
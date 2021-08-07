<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <style type="text/css">
      .outline {
        text-align:center;
      }
      .roulette {
        display: inline-block;
        border:1px solid #000000;
        font-size:40px;
        width:60px;
      }
    </style>
    <script language="javascript" type="text/javascript">
      var roulette;

      // ルーレットを開始
      function start() {
        roulette = setInterval(function() {
          // 1〜99の範囲でランダムな数値を作成
          var idx = Math.floor( Math.random() * 99 ) + 1;
          // ルーレット
          document.getElementById("roulette").innerHTML = idx;
        }, 100);
      }

      // ルーレットを停止
      function stop() {
        if(roulette) {
          clearInterval(roulette);
        }
      }
    </script>
  </head>
  <body>
    <div class="outline">
      <div class="roulette" id="roulette">1</div>
      <br />
      <input type="button" value="スタート" id="start" onclick="start();"/>
      <input type="button" value="ストップ" id="stop" onclick="stop();"/>
    </div>
  </body>
</html>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simon Game</title>

  <!-- CSS link -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@900&display=swap" rel="stylesheet">
</head>

<body class="">
  <h1 class="restart">Level: 0</h1>

  <div class="main-box">
    <div class="score-box">
      <h2 class="score">Score:<br>0</h2>
    </div>
    <div class="high-score-box">
      <h2 class="high-score">High Score: <br>0</h2>
    </div>

    <div class="four-button-box">
      <div class="two-button-box">
        <div class="orange box"></div>
        <div class="blue box"></div>
      </div>

      <div class="two-button-box">
        <div class="green box"></div>
        <div class="purple box"></div>
      </div>
    </div>
  </div>

  <h1 class="instruction">Press a key to start</h1>
  <button type="button" class="btn btn-primary btn-warning start-button display-none">Start</button>

  <!-- jQuery and JS link     -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script type="text/javascript" src="index.js"></script>
</body>

</html>

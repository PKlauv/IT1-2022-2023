
var gameover;
score1 = 0;
score2 = 0;
bxck = 0;
var bon = 0;
var hits = new Array(6);
var chdi = new Array();
var Dice = new Array();
roll = 0;
hs = 0;
function Init() {
     for (ckl = 0; ckl < 5; ckl++) {
          document.form.ckbox[ckl].checked = false;
     }
     gameover = 0;
     document.getElementById('rollNum').innerHTML = " ";
     sc = 0;
     roll = 0;
     document.diceroll.roll.value = "Roll ";
     document.images['dice1-pic'].src = "../bilder/dice0.gif";
     document.images['dice2-pic'].src = "../bilder/dice0.gif";
     document.images['dice3-pic'].src = "../bilder/dice0.gif";
     document.images['dice4-pic'].src = "../bilder/dice0.gif";
     document.images['dice5-pic'].src = "../bilder/dice0.gif";
     for (z = 0; z < 6; z++) {
          document.form.cl1[z].value = "";
          document.form.cl2[z].value = "";
     } bon = 0;
     score1 = 0;
     score2 = 0;
     document.form.cl2[6].value = "";
     document.form.bonus.value = "";
     document.form.total.value = "";
     document.form.score.value = "";
     bxck = 0;
}
function Play() {
     if (gameover == 0) {
          if (hs == 0) {
               document.form.high.value = "";
          }
          else
               document.form.high.value = hs;
          roll++;
          if (roll > 3) {
               alert("Tredje kast, gjør et valg!");
               roll = 0;
               return;
          }
          document.getElementById('rollNum').innerHTML = "Kast #" + roll;
          var dicePic = new Array(6);
          dicePic[0] = "../bilder/dice1";
          dicePic[1] = "../bilder/dice2";
          dicePic[2] = "../bilder/dice3";
          dicePic[3] = "../bilder/dice4";
          dicePic[4] = "../bilder/dice5";
          dicePic[5] = "../bilder/dice6";
          for (var i = 0; i < 6; i++) {
               eval('pic' + i + ' = new Image();');
               eval('pic' + i + '.src = dicePic[i];');
          }

          for (ch = 0; ch < 5; ch++) {
               v = (eval("document.form.ckbox[" + ch + "].checked"));
               if (v == true) { chdi[ch] = 1; }
               else {
                    chdi[ch] = 0;
               }
          }
          for (d = 1; d < 6; d++) {
               if (chdi[d - 1] == 0) {
                    x = Math.round(Math.random() * 6) % 6 + 1;
                    Dice[d] = x;
                    document.images['dice' + d + '-pic'].src = dicePic[x - 1] + ".gif";
               }
          }
     }
}
function col1(n) {
     if (gameover == 0) {
          var dtot = 0;
          document.getElementById('rollNum').innerHTML = " ";
          if ((n > 0) && (n < 7)) {
               ck = (document.form.cl1[n - 1].value);
               if (ck == "") {
                    bxck++;
                    var sc = 0;
                    for (z = 1; z < 6; z++) {
                         if (Dice[z] == n) {
                              sc = sc + n;
                         }
                    }
                    bon = bon + sc;
                    if (bon > 62) {
                         score1 = score1 + 35;
                         document.form.bonus.value = 35;
                         score2 = score2 + 35;
                         bon = 0;
                    }
                    score1 = score1 + sc;
                    score2 = score2 + sc;
                    document.form.cl1[n - 1].value = sc;
                    document.form.total.value = score1;
                    document.form.score.value = score2;
                    sc = 0;
                    roll = 0;
               }
          }
          if (n > 6) {
               ck = (document.form.cl2[n - 7].value);
               if (ck == "") {
                    bxck++;
                    var sc = 0;
                    if ((n == 7) || (n == 8)) {
                         for (z = 1; z < 7; z++) {
                              hits[z] = 0;
                         }
                         h3 = 0;
                         h4 = 0;
                         for (z = 1; z < 6; z++) {
                              v = Dice[z];
                              dtot = dtot + v;
                              hits[v]++;
                         }
                         for (z = 1; z < 7; z++) {
                              if ((n == 7) && (hits[z] >= 3)) {
                                   h3 = 1;
                                   sc = dtot;
                                   document.form.cl2[n - 7].value = sc;
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                              }
                              else if ((n == 8) && (hits[z] >= 4)) {
                                   h4 = 1;
                                   sc = dtot;
                                   document.form.cl2[n - 7].value = sc;
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                              }
                         }
                         if ((n == 7) && (h3 == 0)) {
                              document.form.cl2[n - 7].value = "0";
                         }
                         if ((n == 8) && (h4 == 0)) {
                              document.form.cl2[n - 7].value = "0";
                         }
                    }

                    if (n == 9) {
                         h1 = 0;
                         h2 = 0;
                         for (h = 1; h < 7; h++) {
                              hits[h] = 0;
                         }
                         for (z = 1; z < 6; z++) {
                              v = Dice[z];
                              hits[v]++;
                         }
                         for (x = 1; x < 7; x++) {
                              if (hits[x] == 2) {
                                   h1 = 1;
                              }
                              if (hits[x] == 3) {
                                   h2 = 1;
                              }
                         }
                         if ((h1 == 1) && (h2 == 1)) {
                              sc = 25;
                              document.form.cl2[n - 7].value = sc;
                              score2 = score2 + sc;
                              document.form.score.value = score2;
                              roll = 0;
                         }
                         if ((h1 !== 1) || (h2 !== 1)) {
                              sc = 0;
                              document.form.cl2[n - 7].value = "0";
                              score2 = score2 + sc;
                              document.form.score.value = score2;
                         }
                    }

                    if ((n == 10) || (n == 11)) {
                         var strt = new Array(7);
                         straight = new String("");
                         for (x = 1; x < 7; x++) {
                              strt[x] = "";
                         }
                         for (z = 1; z < 6; z++) {
                              v = Dice[z];
                              strt[v] = v;
                         }
                         for (y = 1; y < 7; y++) {
                              if (strt[y] !== "") {
                                   straight = straight + strt[y];
                              }
                         }
                         if (n == 10) {
                              if (straight == "13456") {
                                   straight = "3456";
                              }
                              if ((straight.slice(0, 4) == "1234") || (straight.slice(0, 4) == "2345") || (straight.slice(0, 4) == "3456")) {
                                   sc = 30;
                                   document.form.cl2[n - 7].value = sc;
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                                   roll = 0;
                              }
                              if ((straight.slice(0, 4) !== "1234") && (straight.slice(0, 4) !== "2345") && (straight.slice(0, 4) !== "3456") && (n == 10)) {
                                   sc = 0;
                                   document.form.cl2[n - 7].value = "0";
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                                   roll = 0;
                              }
                         }
                         if (n == 11) {
                              if ((straight == "12345") || (straight == "23456")) {
                                   sc = 40;
                                   document.form.cl2[n - 7].value = sc;
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                                   roll = 0;
                              }
                              if ((straight !== "12345") && (straight !== "23456") && (n == 11)) {
                                   sc = 0;
                                   document.form.cl2[n - 7].value = "0";
                                   score2 = score2 + sc;
                                   document.form.score.value = score2;
                                   roll = 0;
                              }
                         }
                    }

                    if (n == 12) {
                         for (z = 1; z < 6; z++) {
                              sc = sc + Dice[z];
                         }
                         document.form.cl2[n - 7].value = sc;
                         score2 = score2 + sc;
                         document.form.score.value = score2;
                         sc = 0;
                         roll = 0;
                    }
                    if (n == 13) {
                         y = 0;
                         for (h = 1; h < 7; h++) {
                              hits[h] = 0;
                         }
                         for (z = 1; z < 6; z++) {
                              v = Dice[z];
                              hits[v]++;
                         }
                         for (x = 1; x < 7; x++) {
                              if (hits[x] == 5) {
                                   y = 1;
                              }
                         }
                         if (y == 1) {
                              sc = 50;
                              document.form.cl2[n - 7].value = sc;
                              score2 = score2 + sc;
                              document.form.score.value = score2;
                              roll = 0;
                              sc = 0;
                         }
                         if (y !== 1) {
                              sc = 0;
                              document.form.cl2[n - 7].value = sc;
                              roll = 0;
                              sc = 0;
                         }
                    }
               }
          }
          for (ckl = 0; ckl < 5; ckl++) {
               document.form.ckbox[ckl].checked = false;
          }
          sc = 0;
          roll = 0;
          document.diceroll.roll.value = "Roll ";
          document.images['dice1-pic'].src = "../bilder/dice0.gif";
          document.images['dice2-pic'].src = "../bilder/dice0.gif";
          document.images['dice3-pic'].src = "../bilder/dice0.gif";
          document.images['dice4-pic'].src = "../bilder/dice0.gif";
          document.images['dice5-pic'].src = "../bilder/dice0.gif";
          if (bxck == 13) {
               alert("Game Over. Your score is " + score2 + ".");
               gameover = 1;
               if (score2 > hs) {
                    hs = score2;
                    document.form.high.value = hs;
               }
               bon = 0;
               score1 = 0;
               score2 = 0;
               document.form.cl2[6].value = "";
               document.form.bonus.value = "";
               document.form.total.value = "";
               document.form.score.value = "";
               bxck = 0;
          }
     }
}
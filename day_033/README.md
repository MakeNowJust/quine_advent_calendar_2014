#Day 33

この記事はQuine Advent Calendar 2014の33日目の記事です。

1月1日と2日の間に見る夢を初夢というそうですね。ボクが見た夢は、説明しがたいのですがとても愉快な内容だった気がします。富士も鷹も茄子もでてきませんでしたが。

というわけで、もはやなんの脈絡もありませんが今日はCOBOLでQuine書きました。とても面倒だったです。`stored-char-length`関数がなかったらやる気を無くしていた可能性が大いにあります。つーか`trim`関数は何がどうして両側の空白消しちゃうかなぁ。

メインフレームの時代からCOBOLを書いてきた歴戦の猛者達には敬意を払わなければいけないと、ひしひしと感じたのでした。

```console
$ cobc -ffunctions-all -x quine.cob
$ ./quine | diff quine.cob -
```
#Day 61

この記事はQuine Advent Calendar 2014の61日目です。チーナの「蛾と蝶とたこ焼きとたこ」を昨日からひたすらリピートさせ続けています。この曲すごく好きです。

今日はRubyで`ObjectSpace`を使ってQuineを書きました。`ObjectSpace`というのはRubyの黒魔術の中でも最高峰のものの一つで、Rubyのオブジェクトの管理を司るモジュールです。普通にRubyでプログラミングしててもまず触れることは無いと思います。

この`ObjectSpace`はまだ破棄されていない全てのオブジェクトを参照することができて、その中にはソースコード自身の文字列も含まれています、なぜか。なので、それを引っ張り出してきて出力しています。

```console
$ diff quine.rb <(ruby quine.rb)
```
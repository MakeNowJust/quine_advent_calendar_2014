# Day 87

この記事はQuine Advent Calendar 2014の87日目です。

今日はSalmonでQuineを書きました。Salmonはオブジェクト指向で関数型で動的型付けだけど強い型付けを持った言語です。これだけでもかなり特徴的な言語ですが、実際に触れてみると滅茶苦茶特徴的な言語だと分かります。  
例えば、型を指定するときに数値の範囲で指定することができるのですが、それが1以上の整数であれば、`[1..+oo)`のようになったりします。分かりやすいんだか何だか。

Quineは`printf`の`%v%`フォーマットが便利すぎました。

```console
$ diff quine.salm <(salmoneye quine.salm)
```

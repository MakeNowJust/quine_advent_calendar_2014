(function f() {
console.log('('+f+')()');
/*
この記事はQuine Advent Calendar 2014の24日目の記事です。

メリークリスマス！

ついにこのアドベントカレンダーも24日目を迎えることができました。25日目は某氏に書いていただくので、ボクが書くのは今日が最後ということになります。

また、見れば分かると思いますが、今日のこの記事はJavaScriptのコードになっています。多分Quineです。

Quine Advent Calendar 2014

12月になって「そういや今年もアドベントカレンダーの季節だなぁ」と気が付き、思い付きでAdventarにQuine Advent Calendarを作ったのが運の尽きでした。

それから済し崩し的に23日間続けて、その結果今があります。自分は基本的に適当な人間なので、まさか23日間続けられると思っていなかったのですが、どうにか続けられることができてよかったです。

はじめは、25日もQuineを書き続けるネタがあるんだろうか、と不安で仕方なかったのですが、いざやってみるとその程度の時間じゃまだ足りない。まだまだボクはもっと色々なQuineが書けるはずです。

とは言っても、23日間の記事のうち、最初の3日くらいはAA Quineだったりして、ちょっとがんばっていたのですが、途中からは適当に見付けた言語でQuineを書くコーナーになっていたような気がします。言い訳をすると、AA Quineは書き方がワンパターンのわりに時間がかかるので結構アレなのです。3日も書いてるとちょっと飽きてきます。
それに比べて、色々な言語でQuineを書いていると、時折面白い言語に出会ったりします。例えば、listing/1でループも何もせずにQuineができるPrologだったり、ゴール指向という現代のプログラミング言語にない機能を持ったIcon言語だったり‥‥。そういったものと出会えるのが今回のAdvent Calendarの魅力だったかな、と思います。

また、何日目だったか忘れましたがSelf言語でQuineを書いた辺りからDockerを使いはじめました。新しい言語を使う度に環境を一新してやるのは、気分的にも環境的にもやりやすくて良かったです。（さすがにi386とamd64のバイナリが混ざりあってる現状はよくないな、と思いまして）

来年のこの時期は少し忙しくなると思うので、今年のようにAdvent Calendarができるかは分かりません。しかし、可能なことならAdvent Calendarできればいいと思います。それだけ得るものの多い3週間ちょっとでした。ありがとうございます。

Quineリポジトリ

少し話が変わりますが、ボクはGitHubにQuineリポジトリというものを持っています。

https://github.com/MakeNowJust/quine

これは名前の通り書いたQuine（各言語につき一つずつ、なるべく普通なQuine）を収めておくためのリポジトリなのですが、ともかく書いた言語のQuineをぶち込んでいるため、GitHubの言語の部分がひどいことになっています。

f:id:makenowjust:20141224194848p:plain

わー、カラフルだー。

というか一番広い領域を占めてるのがEiffelってどうなんでしょうか。

このリポジトリはQuine Advent Calendarと平行して、ときに直交しながらcommitしていっていました。おかげで現在ここには53言語のQuineがあります。これからも増やしていく予定です。

現在の目標は、とりあえず100言語でQuineを書くことです。いつの間にか50言語越えてしまったので。

Quine in My Life

記事のタイトルにもある言葉です。

ボクがQuineと出会ったのは、多分中三のときのことです。その当時のボクはいわゆる「ゲーム作りたい」系で、しかしC言語が書くたくない程度にはプログラムしていたので、Rubyを勉強していました。そんなときに、こんな形のQuineに出会ったと思います。

eval$s=%q{puts"eval$s=%q{#{$s}}"}
このコードをコピペして、端末（当時はWindowsだったからcmd.exeか）で実行してみて、同じコードが出力されることを確認して‥‥。

何て言うか、すごく衝撃的でした。今思えばかなり単純なQuineなのですが（というか複雑なQuineなんて言ったとしてもたかが知れています）、当時としては「どうしてこんなにも短かいコードでこんなに複雑なプログラムを組むことができるんだろう」と思いました。最初は全くコードの流れが分からなくてかなり混乱したと思います。

それから、Quineを書いてみたくて、とは言ってもRubyだと既に答えが出てしまっていてつまらないので、JavaScriptで書こうと思ったのですが、結局自力で書けなくて、適当にググった記憶があります。そのときに見たのがこういうQuineでした。

eval(s="q=String.fromCharCode(34);alert('eval(s='+q+s+q+')')")
alertってあたりに時代を感じますがそれはさておき。なるほど、ってなったはずです。String.fromCharCodeでダブルクオートを作っているんですね。「いかに文字列リテラルを回避するのかが鍵なんだな」と思いました。

とまぁ、こんな風にボクとQuineは出会ったわけですが、それ以降わざわざQuineを書くことはあまり無かったと思います。

それが変わったのは、いつだったかにBrainf*ckでQuineを書こうと思ったときのことです。この時点でC言語とかJavaとかでもQuineを書いていて、はっきり言って余裕だろう、と考えていました。ナメてたんですね。

Brainf*ckでQuineを書くときに問題になったのは、まずどうやってソースコードを表現するかです。むしろそれさえできてしまえば簡単なのですが、それが中々思い付きませんでした。

最終的にはRubyでスクリプトを組んでソースコードを自動生成したりして、どうにか動くものができたのですが、丸一日かかったような気がします。時間かけすぎです。

こうしてBrainf*ckでQuineを書いてみて思ったのは、一つは「ボクはどうしてこんなことに時間を使ってるんだろう」っていう後悔なのですが、それと同時にすごい楽しかったような気もします。つまりアレですね。友達とマックとか行くじゃないですか。そこで100円マックだけ注文して無意味に3時間くらい居座り続けます。そういうのってすごく無意味なんですけど、すごく意味のあることだと思うんです。
大人はよく「何か全力になれ」と言いますが、それなら全力になる対象はQuineだっていいはずです。

それからさきほどのQuineリポジトリを作って、だらだらと暇なときにQuineを書いてきたわけです。

そんなわけで、ボクの名刺にはこっそりと「趣味:Quine」と書いてあります。

What is Quine?

名刺にうっかりQuineと書いてしまったために、行く先々で「Quineって何？」と訊かれることがあります。そういうときボクは決まって、

「自分自身と同じソースコードを出力するプログラム」

と説明するようにしているのですが、大抵の場合きょとんとした顔をされます。まあ、確かに何を言ってるかよく分かりませんよね。

ただ、Quineっていうのはどうしようもなく「自分自身と同じソースコードを出力するプログラム」でしかないんだろうな、とも思います。言ってしまえばゲーム一般だって「決められた手続きに従って画面に画像を出力し、入力を処理してインタラクティブに変化するもの」でしかないわけで、それを面白いと感じるかは個人の考え方にかかっているわけです。

それと、そんな風にQuineについて説明すると時々、少し悩んだようなあとに「あぁ、自分を読み込めばいいのか」と言う人がいますが、そういうときは「それはルール違反です」と言っています。ルール違反って何だよ、ってボクでも思うんですが、それはルール違反なんです。
自分自身を読み込まずに、自分自身と同じソースコードを得ることに、ロマンみたいなものがあるんです。あるいは、そういうロマンみたいなものにボクは惹かれているのかもしれません。

最後に

ここまでQuineについてだらだらと語ってきましたが、結局のところボクはQuineが好きなんです。言いたいことはそれだけです。

それと、明日のQuine Advent Calendarはなんと、あのid:ku-ma-me氏が書いてくださります。というかボクが頼みました。ku-ma-me氏はあのQuine Relayを書いた方です。自分もこの方の影響をすごく受けていると思います。

というわけで、少し早いのですが、Quine Advent Calendar 2014、24日間お付き合いいただきありがとうございました。悲しいくらい誰も興味ない感じですが、自分の周りの何人かの人は見ていたみたいで、かなり励みになりました。これで全く反応がなかったたら、さすがに走り切ることはできなかったと思います。

$ diff quine.js <(node quine.js)
*/})()

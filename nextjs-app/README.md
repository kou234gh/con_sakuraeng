これgithubとリモートに適用されるか？

# srcフォルダ内構造と役割
components/*  pages/* pages/index.tsx この三つの末端ファイル同士でコンポーネント受け渡しの関係性を決めてそれに従いコードを書く。
構造
pagesが<Component/> を扱ってその中身をcomponentsで作る
コンポーネントフォルダを最も細かい構成単位として使用するとにかく細かく整理してコンポーネント化する。次にpages/*tsxの末端ファイルでインポート。componentsでpagesの中身をimport することはない
逆にページ構成を考える際はユーザーから実際に見えるpages/index.tsxから逆算して構造を考える。その後はルーティング構成
pagesフォルダ以下ではそこからもらってくる。pages/index.tsxは概要を書く。


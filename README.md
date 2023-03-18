# chrome-extension-template
npmとreactを使ったホットリロード可能なchrome拡張機能のテンプレート

## みて！

## npm run dev
### 拡張機能を再読み込みしたら更新される


#### ```public/manifest.json```
の
```"matches": [ "https://www.google.co.jp/*" ]```
のURLを目的に合わせて書き換える




#### ```webpack.config.js``` の 
```
output: {
    path: path.join(__dirname,  "../../../../mnt/c/Users/syout/Documents/chrome_extension/js"),
    filename: "[name].js",
  }
```
#### の
```"../../../../mnt/c/Users/syout/Documents/chrome_extension/js"```
を好きなパスに書き換える(```/js```で終わる必要がある)


# ベースイメージを指定
FROM node:14

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール
COPY package.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY ./src ./src
COPY ./public ./public

# アプリケーションを起動
CMD ["npm", "start"]

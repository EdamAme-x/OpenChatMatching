// @ts-nocheck
import { Helmet } from "react-helmet";

export function Head() {
  return (
    <Helmet>
      <title>OpenChat Matching</title>
      <meta name="description" content="OpenChatとユーザーを対象にしたマッチングアプリ。 「 見つけたい 」と「 見つけて欲しい 」を繋げます。" />
      <link rel="icon" href="/OpenChatMatching.png" />
    </Helmet>
  );
}

import { GetServerSideProps, NextPage } from "next";
import { useState, useEffect } from "react";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
  };

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    // useStateを使って状態を定義する
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(false);
    // マウント時に画像を読み込む宣言
    useEffect(() => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url); // 画像URLの状態を更新する
            setLoading(false); // ローディング状態を更新する
        });
    }, []);
    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    };

    //ローディング中でなければ、画像を表示する
    return (
        <div>
            <button onClick={handleClick}>ほかのイッヌも観る</button>
            <div>{loading || <img src={imageUrl} />}</div>
        </div>
    );
};
export default IndexPage;

// 上記の関数はこの書き方と同じ↓
// export default function IndexPage(): ReactElement<any, any> | null {
//     return <div>猫画像予定地</div>;
// }

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
      props: {
        initialImageUrl: image.url,
      },
    };
  };

type Image = {
    url: string;
};

const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thedogapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];

};

fetchImage();

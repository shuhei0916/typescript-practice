import { NextPage } from "next";

const IndexPage: NextPage = () => {
    return <div>イヌ画像予定地</div>;
};
export default IndexPage;

// 上記の関数はこの書き方と同じ↓
// export default function IndexPage(): ReactElement<any, any> | null {
//     return <div>猫画像予定地</div>;
// }

const fetchImage = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];

};

fetchImage();

export const hoge = () => {
    console.log("hogehoge");
    console.log(reverseArray(["a", "b", "c"], true));
};


// 引数の文字列の配列を逆にして返す関数reverseArrayを作成。
//  a, b, c を入れたら c, b, aを返す。
// hasTomeはオプション引数
export function reverseArray(arr: string[], hasTom?: boolean): string[] {
    const result: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[arr.length - i - 1]);
        
    }
    if (hasTom) {
        result.push("Tom");
    }
    return result;
};

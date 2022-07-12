import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
// memo:propsが変わらない限り再レンダリングしない
// 複数の要素で成り立つ規模のコンポーネントは、基本メモで囲う
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  // console.log("チルドレンエリアがレンダリングされた！");

  // const data = [...Array(2000).keys()];

  // data.forEach(() => {
  //   console.log("---");
  // });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

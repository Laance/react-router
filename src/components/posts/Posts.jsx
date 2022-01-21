import Post from './Post';

function Posts() {
  const BOROMIR_AVATAR = "https://preview.redd.it/6u83n5eofwt31.png?auto=webp&s=0cc29373142066c94b864e191ce81b1fea75d2a1";
  const GIMLI_AVATAR = "http://www.vlastelin-kolets.ru/Encyclopedia/Pics/gimli.jpg";
  const LEGOLAS_AVATAR = "https://upload.wikimedia.org/wikipedia/ru/c/c0/Legolas.jpg";
  return (
    <div className="appPost">
      <Post author={{
                  name: "Boromir ",
                  photo: BOROMIR_AVATAR,
                  nickname: "@older_son"
              }}
              content="One Does Not Simply Walk Into Mordor?"
              image={"http://styleinsider.com.ua/wp-content/uploads/2020/06/Vlastelin-kolets-mem.jpg"}
              date={"26 февр."}
      />
      <Post author={{
                  name: "Gimli",
                  photo: GIMLI_AVATAR,
                  nickname: "@short_one"
              }}
              content="Never thought I`d die fighting side by side with an Elf?"
              image={"http://25.media.tumblr.com/b21ef2682ec9af1c6aec0d85784e1604/tumblr_menswteskB1qbsh19o1_500.gif"}
              date={"26 февр."}
      />
      <Post author={{
                  name: "Legolas",
                  photo: LEGOLAS_AVATAR,
                  nickname: "@old_one"
              }}
              content="What about side by side with a friend??"
              image={"https://64.media.tumblr.com/tumblr_m9tp5e8TyK1qbvxy3o2_500.gifv"}
              date={"26 февр."}
      />
    
    </div>
  );
}
export default Posts;
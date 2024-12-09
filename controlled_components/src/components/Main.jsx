import { useState, useEffect } from "react";

export default function Main() {
  const [memesArr, setMemesArr] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  function getImg() {
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const randMemeIMg = memesArr[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randMemeIMg,
    }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesArr(data.data.memes));
  }, []);
  console.log(memesArr);

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={getImg}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

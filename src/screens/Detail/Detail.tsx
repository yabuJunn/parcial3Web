import { useSelector } from "react-redux";
import "./detail.css";

import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

export const Detail = () => {
  const navigate = useNavigate()
  const poemDetail = useSelector((state: RootState) => state.poems.detailPoemm)

  if (poemDetail) {
    return <>
      <div className="detail">
        <button className="back-button" onClick={() => { navigate('/dashboard') }} >
          &larr; Back
        </button>

        <h1 className="title">{poemDetail.title}</h1>
        <h2 className="author">By {poemDetail.author}</h2>
        <ul className="content">{poemDetail.lines.map((line) => <li>{line}</li>)}</ul>
        <p className="lines">{poemDetail.linecount}</p>
      </div>
    </>
  }
};

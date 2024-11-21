import { useEffect } from "react";
import { getAllPoems } from "../../services/poetry";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAllPoems, updateDetailPoem } from "../../store/poems/slice";
import { RootState } from "../../store/store";
import { PoemType } from "../../types/poems";
import { useNavigate } from "react-router-dom";

// interface DashboardProps {
//   poems: {
//     id: string;
//     title: string;
//     excerpt: string;
//   }[];
//   onViewPoem: (id: string) => void;
// }

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const allPoemsData = useSelector((state: RootState) => state.poems.allPoems)

  useEffect(() => {
    const doFetch = async () => {
      const poemsResponse = await getAllPoems()
      dispatch(updateAllPoems(poemsResponse))
    }
    doFetch()
  })

  const handleShowDetailPoem = (poemToShow: PoemType) => {
    dispatch(updateDetailPoem(poemToShow))
    navigate('/detail')
  }

  return <>
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {allPoemsData.map((poem) => (
          <div key={allPoemsData.indexOf(poem)} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines[0]}...</p>
            <button className="poem-button" onClick={() => { handleShowDetailPoem(poem) }}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
};

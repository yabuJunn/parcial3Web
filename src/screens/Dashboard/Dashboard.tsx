import { useEffect } from "react";
import { getAllPoems } from "../../services/poetry";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAllPoems } from "../../store/poems/slice";
import { RootState } from "../../store/store";

// interface DashboardProps {
//   poems: {
//     id: string;
//     title: string;
//     excerpt: string;
//   }[];
//   onViewPoem: (id: string) => void;
// }

export const Dashboard = () => {
  const dispatch = useDispatch()
  const allPoemsData = useSelector((state: RootState) => state.poems.allPoems)

  useEffect(() => {
    const doFetch = async () => {
      const poemsResponse = await getAllPoems()
      dispatch(updateAllPoems(poemsResponse))
    }
    doFetch()
  })

  return <>
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {allPoemsData.map((poem) => (
          <div key={allPoemsData.indexOf(poem)} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines[0]}...</p>
            {/* <button className="poem-button" onClick={() => onViewPoem(poem.id)}> */}
            <button className="poem-button">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
};

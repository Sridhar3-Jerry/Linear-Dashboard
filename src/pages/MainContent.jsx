import { Routes, Route } from "react-router-dom";
import InboxPage from "./InboxPage";
import MyIssues from "./MyIssues";
import Projects from "./Projects";
import View from "./View";
import Issues from "./Issues";

function MainContent() {
  return (
    <div className="flex-1 h-full rounded bg-main border border-white/10">
      <Routes>
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/my-issues" element={<MyIssues />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/views" element={<View />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/more" element={<div className='p-4'>More page coming soon!</div>} />
        <Route path="*" element={<InboxPage />} />
      </Routes>
    </div>
  );
}
export default MainContent;
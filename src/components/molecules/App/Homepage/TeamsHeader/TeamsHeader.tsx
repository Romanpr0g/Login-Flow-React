import CreateButton from "../../../../atoms/App/CreateButton/CreateButton";
import "./style.css";

const TeamsHeader: React.FC = () => {
  return (
    <div className="teams-header">
      <h3 className="teams-header__title">Teams</h3>
      <CreateButton name="Create Team" width={114} height={40} />
    </div>
  );
};

export default TeamsHeader;

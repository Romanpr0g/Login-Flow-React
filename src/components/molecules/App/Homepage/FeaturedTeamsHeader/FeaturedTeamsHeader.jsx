import CreateButton from "../../../../atoms/App/CreateButton/CreateButton";

const FeaturedTeamsHeader = () => {
  return ( 
    <div className="featured-teams__introduction">
            <h3 className="featured-teams__introduction--title">
              Featured teams
            </h3>
            <CreateButton name="Team" width={114} height={40} />
          </div>
   );
}
 
export default FeaturedTeamsHeader;
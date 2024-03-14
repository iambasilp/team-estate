import { useSelector } from "react-redux";
import ChartIFrame from "../admin.components/ChartIFrame";

function Home() {
   const { currentUser } = useSelector((state) => state.user);
   return (
      <div className="py-4 px-6">
         <h1 className="text-2xl">
            Welcome <span className="font-semibold">{currentUser.username}</span>!
         </h1>
         <h3 className="mt-4 text-xl font-semibold">User Details</h3>
         <ChartIFrame
            src={
               "https://charts.mongodb.com/charts-real-estate-clg-project-ygvkc/embed/charts?id=65f30e34-35e9-4f1e-895d-d999539c8e3e&maxDataAge=3600&theme=light&autoRefresh=true"
            }
         />

         <h3 className="mt-12 text-xl font-semibold">User Details</h3>
         <ChartIFrame
            src={
               "https://charts.mongodb.com/charts-real-estate-clg-project-ygvkc/embed/charts?id=65f319d6-2677-4eae-8f79-634e9c1fce16&maxDataAge=3600&theme=light&autoRefresh=true"
            }
         />
         <ChartIFrame
            marginTop={"4rem"}
            src={
               "https://charts.mongodb.com/charts-real-estate-clg-project-ygvkc/embed/charts?id=65f31d55-5f0c-4392-85a9-c715c60ed344&maxDataAge=3600&theme=light&autoRefresh=true"
            }
         />
      </div>
   );
}

export default Home;

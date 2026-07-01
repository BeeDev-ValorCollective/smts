import MeetThad from "../components/HomeComponents/MeetThad/MeetThad";

import useScrollToTop from "../customHooks/useScrollToTop";

export default function Home() {
    
    useScrollToTop();
    
    return(
        <main>
            <MeetThad />
        </main>
    );
};
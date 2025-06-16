import { useData } from "./BioProvider"

export const About = () => {
 const {MyAge} = useData();
return(
<div>
 <h1>My age is {MyAge}</h1>
</div>
);

}
export default About;


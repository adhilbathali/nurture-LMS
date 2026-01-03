import GradeBased from "./GradeBased";
import SubjectBased from "./SubjectBased";

export default function Index(){
    return(
        <section id="courses" className="bg-[#F7FAF8] pt-30 px-10 overflow-hidden">
            <GradeBased/>
            <SubjectBased/>
        </section>
    )
}
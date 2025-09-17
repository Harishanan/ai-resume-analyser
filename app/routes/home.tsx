import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {resumes} from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Get smart resume tips that take you closer to your dream role." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Application & Resume Ratings</h1>
        <h2>Review your submission and check AI-powered feedback</h2>
      </div>

      {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) =>(
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
      )}
    </section>

  </main>
}

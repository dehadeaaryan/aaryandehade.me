import Header from "@/components/header";
import Landing from "@/components/landing";
import About from "@/components/about";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import NextButton from "@/components/nextButton";
import Footer from "@/components/footer";

const Page = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex flex-col w-full">
                <Landing />
                <About />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <NextButton />
            <Footer />
        </div>
    );
}

export default Page;

import Header from "@/components/header";

import Footer from "@/components/footer";

const Page = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex-grow">
                <h2>Page</h2>
            </main>
            <Footer />
        </div>
    );
}

export default Page;

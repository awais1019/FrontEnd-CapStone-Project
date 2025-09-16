
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
}

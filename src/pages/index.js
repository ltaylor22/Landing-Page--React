import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return [
    <div className="container-flexbox">
    <Navbar />
    </div>,
    <div className="container-flexbox">
      <Jumbotron />
    </div>,
    <div class="container">
      <div className="row">
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
      </div>,
    <div className="container-flexbox">
      <Footer />
    </div>
    </div>
  ]
  };

import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SectionList from "./Components/Section/SectionList";

const App = () => {
  let logoNature =
    "https://st2.depositphotos.com/1364916/5341/v/950/depositphotos_53411049-stock-illustration-health-nature-logo-vector.jpg";
  let nature = [
    {
      description: "Ocean",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      description: "Forest",
      image:
        "https://images.unsplash.com/photo-1445855743215-296f71d4b49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      description: "Moon",
      image:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div>
      <Header logo={logoNature} nature={nature} />
      <SectionList nature={nature} />
      <Footer />
    </div>
  );
};

export default App;

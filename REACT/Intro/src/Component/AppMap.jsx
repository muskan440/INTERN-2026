import React from "react";
import Hw from "./Hw";

const App = () => {
  const jobs = [
    {
      id: 1,
      companyImage:
        "https://i.pinimg.com/1200x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
      companyName: "Meta",
      posteddate: "5 Days ago",
      jobProfile: "Frontend Developer",
      keywords: {
        keyword1: "Full Time",
        keyword2: "Junior Level",
      },
      payout: "$70/Hour",
      location: "Mumbai, India",
      applybtn:"https://www.facebook.com/login/?next=https%3A%2F%2Fbusiness.facebook.com%2F",
    },
    {
      id: 2,
      companyImage:
        "https://i.pinimg.com/736x/84/b0/2c/84b02cf3a881151fe0caaafa3b1b766f.jpg",
      companyName: "Google",
      posteddate: "5 Week ago",
      jobProfile: "Software Engineer",
      keywords: {
        keyword1: "Full Time",
        keyword2: "Mid Level",
      },
      payout: "$120/Hour",
      location: "Bangalore, India",
      applybtn:"https://www.google.com/account/about/",
    },
    {
      id: 3,
      companyImage:
        "https://i.pinimg.com/736x/32/4a/90/324a90ab3638842fc9dc738f9b65f198.jpg",
      companyName: "Amazon",
      posteddate: "8 Days ago",
      jobProfile: "Backend Developer",
      keywords: {
        keyword1: "Full Time",
        keyword2: "Junior Level",
      },
      payout: "$150/Hour ",
      location: "Hyderabad, India",
      applybtn:"https://www.google.com/search?gs_ssp=eJzj4tDP1TfITc9OV2A0YHRg8GJLzE2sys8DAELoBhw&q=amazon&oq=amazo&gs_lcrp=EgZjaHJvbWUqGwgBEC4YQxiDARjHARixAxjJAxjRAxiABBiKBTIICAAQRRgnGDsyGwgBEC4YQxiDARjHARixAxjJAxjRAxiABBiKBTIGCAIQRRg5MhIIAxAAGEMYgwEYsQMYgAQYigUyDQgEEAAYgwEYsQMYgAQyDwgFEAAYQxixAxiABBiKBTINCAYQABiSAxiABBiKBTIHCAcQABiPAjIHCAgQABiPAtIBCTQ3MDlqMGoxNagCDLACAfEFVlZdn9nDzPY&sourceid=chrome&source=chrome.rb&ie=UTF-8",
    },
    {
      id: 4,
      companyImage:
        "https://i.pinimg.com/736x/fb/66/c9/fb66c922b0ad029e61fdab87badd8e27.jpg",
      companyName: "Apple",
      posteddate: "10 Days ago",
      jobProfile: "UI/UX Designer",
      keywords: {
        keyword1: "Internship",
        keyword2: "Entry Level",
      },
      payout: "$85/Hour",
      location: "Pune, India",
      applybtn:"https://www.apple.com/in/",
    },
    {
      id: 5,
      companyImage:
        "https://i.pinimg.com/1200x/c6/18/ed/c618edb71c600432c13ebd6ef2a0c317.jpg",
      companyName: "Microsoft",
      jobProfile: "React Developer",
      posteddate: "5 Month ago",
      keywords: {
        keyword1: "Full Time",
        keyword2: "Senior Level",
      },
      payout: "$80/Hour",
      location: "Noida, India",
      applybtn:"https://www.microsoft.com/en-in",
    },
  ];

  return (
    <div className="App">
      {jobs.map((jobs) => (
        <Hw
          key={jobs.id}
          Cname={jobs.companyName}
          img={jobs.companyImage}
          profile={jobs.jobProfile}
          keyword1={jobs.keywords.keyword1}
          keyword2={jobs.keywords.keyword2}
          payout={jobs.payout}
          location={jobs.location}
          date={jobs.posteddate}
          Apply={jobs.applybtn}
        />
      ))}
    </div>
  );
};

export default App;
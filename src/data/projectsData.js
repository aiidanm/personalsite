import SoundPound from "../SoundPoundlogo.png";
import Nathan from "../NathanGMurray.png";
import Festeval from "../Festeval.png";

export const projectsData = {
  "Freelance Projects": [
    {
      title: "SoundPound Credit Union matcher",
      image: SoundPound,
      description: `This project was commisioned by the SoundPound group with a brief to create a tool that will match an entered postcode with one of their credit unions eligible for the Transport for greater Manchester bus pass. After working with the Soundpound team to find out exactly what they wanted in the brief and how they wanted the design to look. I made the decision to stick with a JSON file containing Postcodes / credit union key value pairs. The tool will then use the npm "postcode" plugin that will extract / verify entered text. Convert it to a correct postcode format, i then run this through the JSON file. I then use a seperate lookup table to match a Credit Unions name with its Logo, apply link and full Name. If any errors are found, then i will return an error. It was shared directly with payroll partners including Manchester NHS foundation trust who shared this on in an email to their 28,000 members. The tool has allowed the SoundPound group to direct customers towrads it, and then each credit union recieves the correct applications. So far the tool has seen over 3000 unique visitors. The tool includes full dynamically created tests for every postcode key value pair in the JSON file. Testing for spacing entry issues, case differences, postcodes in overlapping common bond areas and outside of any eligible common bond.`,
      tech: [
        "HTML",
        "CSS",
        "React",
        "Netlify Hosting",
        "Wordpress intergration",
        "Jest",
      ],
    },
    {
      title: "SoundPound Credit Union Tool Update",
      image: SoundPound,
      description:
        "After successfully completing the original project listed above, i was contacted again and commisoned by the SoundPound team to expand the original tool to incorporate matching a user with their Credit Union through their employer. While only a simple sounding change, this was a larger project that involved refactoring the app from its current form to a multiple page, routed web app. ",
      tech: [
        "HTML",
        "CSS",
        "React",
        "Netlify Hosting",
        "Wordpress intergration",
        "Jest",
      ],
    },
    {
      title: "Nathan Murray personal website",
      image: Nathan,
      description:
        "Professional personal website commisoned on behalf on my Brother. Used by clients to make contact with him for any potential business.",
      tech: [
        "HTML",
        "CSS",
        "React",
        "Netlify Hosting",
        "Mail Server hosting / Setup",
      ],
    },
  ],
  "Personal Code": [
    {
      title: "5-a-side app",
      image: "https://via.placeholder.com/200?text=Project+A",
      description: "Easily my largest project, this app was made to track players, goals, assists, wins and other football stats for my friends football games. This involved creating a SQL database with 6 tables and additional relational tables. The backend server contained SQL queries stretching across all of these using CASE and other very high level SQL queries. The App is still being worked on, and when possible a demo version will be available to view on here.",
      tech: ["React", "SQL", "Heroku", "Node.js"],
    },
    {
      title: "Festeval",
      image: Festeval,
      description:
        "This app allows you to link your spotify account, and find artists you have liked songs from / have in a playlist who are playing. It will then show you the days and times they are playing along with the stage. It will also helpfully highlight clashes you have in red.",
      tech: ["React", "Node.js", "Spotify API", "Webkit Cookies", "0Auth"],
    },
  ]
};

import profileImage from "../../assets/profile.png";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="md:container md:mx-auto p-4">
        <div className="flex justify-center items-center">
          <svg
            className="about-blob"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className="img-fluid profile-img"
                x="-125"
                y="-55"
                href={profileImage}
              />
            </g>
          </svg>
        </div>

        <div className="flex p-6">
          <div className="col">
            <h1 className="text-center">About Me</h1>
            <p className="fs-6 md:text-center text-gray-600">
              I am a software developer with 5 years of experience in the
              industry. I have a Bachelor's degree in Computer Engineering from
              Tribhuwan University and have worked on a variety of projects,
              ranging from web development to mobile app development. I am
              skilled in a number of programming languages, including
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">JavaScript</span>
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">c#</span>
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">Python</span>I am 
              also familiar with a variety of frameworks, such as
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">Angular</span>
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">React</span>
              <span className="rounded-full text-white bg-bieze text-sm m-1 p-1 px-2">Dot Net</span>.
              <br />
              <br />
              I am always looking to learn new technologies and keep my skills
              up-to-date. I am passionate about building innovative and
              user-friendly applications that solve real-world problems. I am
              also highly motivated to work in a team environment and enjoy
              collaborating with other developers and stakeholders.
              <br />
              <br />
              You can see my portfolio of past projects on my
              <a href="https://github.com/srijan-shrestha">Github</a>
              profile. You can also find me on
              <a href="https://www.linkedin.com/in/srijan-shrestha/">
                Linkedin
              </a>
              , where I keep my professional network updated. If you are
              interested in working together, please don't hesitate to reach out
              to me via email at
              <a className="m-2 text-sm underline underline-offset-2" href="mailto:srijans318@gmail.com">srijans318@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

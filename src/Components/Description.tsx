import { useEffect, useState } from "react";
import profile from '../assets/AboutMe.jpg';
// import Photo from "./Photo";



const Description = () => {
  const period = 300;
  const [l, setl] = useState(0);
  const [reducing, setreducing] = useState(false);
  const [text, setText] = useState('');
  const [time, settime] = useState(period);
  //   const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "IOS Developer", "React Developer"];


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, time);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = l % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = reducing? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (reducing) {
      settime(prevtime => prevtime * 0.8);
    }

    if (!reducing&& updatedText === fullText) {
      setreducing(true);
      //   setIndex(prevIndex => prevIndex - 1);
      settime(period);
    } else if (reducing && updatedText === '') {
      setreducing(false);
      setl(l + 1);
      //   setIndex(1);
      settime(period);
    } 
  }

  return (

    <div className="bg-white  rounded-lg">
      <div className="md:flex md:items-center">
        <div className="mb-4 md:mb-0 md:w-1/3  ">
          <img src={profile} alt="Image"  />
        </div>
        {/* <Photo/> */}
        <div className="pl-20">
        <section className="bg-white-50">
          <div className="mx-auto max-w-screen-xl px-4 py-4 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Hello Iam Vishwa Karnati.
                <strong className="font-extrabold p-50 text-red-700 sm:block"> Iam a {text} </strong>
              </h1>

              <p className="   pt-5 mt-4 sm:text-xl/relaxed">
              An Enthusiast who architects pixel-perfect iOS apps, crafts intuitive React web interfaces, and designs intelligent machine learning models to extract impactful insights from data
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-white-600 px-12 py-3 text-sm font-medium text-teal-600 shadow  sm:w-auto hover:text-black"
                  href="https://github.com/vishwak1002"
                >
                  Github
                </a>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="https://www.linkedin.com/in/vishwasai-karnati-7a93a3182/"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  )


}
export default Description
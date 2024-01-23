import pics from "../assets/pics.jpg";

function ThirdPage() {
  return (
    <div className="">
      <span>
        <img src={pics} />
      </span>

      <div className="relative bg-green-400 h-full animate-pulse animate-scaleChange bg-opacity-30 rounded-full self-center-start-15 -m-80">
        <div className="absolute inset-0 flex items-center mb-9 justify-center">
          <a
            href="#"
            className="inset-0 w-12 h-12 placeholder bg-green-500 rounded-full ring-4 ring-white grid place-items-center hover:bg-green-900 transition"
          >
            <span className="sr-only">Watch the video</span>
            <svg
              className="ml-1 w-4"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ThirdPage;

import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-red-400 to-red-500">
      <div
        style={{
          backgroundImage: "url(./images/bg-pattern-intro-desktop.svg)",
          backgroundSize: "cover",
          backgroundPosition: "65% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Header />

        {/* NEW SECTION */}
        {/* Here you will add the new section */}
        <section className="bg-gray-100 ">
          <h1 className=" text-center text-2xl  0 pt-28">
            Designed for the future
          </h1>

          <div className=" text-align: left; max-w-screen-sm mx-auto px-6 py-12">
            <h2 className=" text-xl  text-gray-800 pt-16 pb-6">
              Introducing an extensible editor
            </h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="text-xl  text-gray-800 pt-16 pb-6">
              Robust content management
            </h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
          {/* <div>
          <svg width="925" height="882" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient x1="0%" y1="27.881%" x2="100%" y2="72.119%" id="c">
                <stop stop-color="#FF8F71" offset="0%"/>
                <stop stop-color="#FF3E55" offset="100%"/>
            </linearGradient>
            <linearGradient x1="0%" y1="41.725%" x2="100%" y2="58.275%" id="e">
                <stop stop-color="#FF8F71" offset="0%"/>
                <stop stop-color="#FF3E55" offset="100%"/>
            </linearGradient>
            <filter x="-10.9%" y="-11.7%" width="121.8%" height="132.8%" filterUnits="objectBoundingBox" id="b">
                <feOffset dy="20" in="SourceAlpha" result="shadowOffsetOuter1"/>
                <feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                <feColorMatrix values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0" in="shadowBlurOuter1"/>
            </filter>
            <rect id="a" x="0" y="0" width="642" height="427" rx="15"/>
        </defs>
        <g transform="translate(40)" fill="none" fill-rule="evenodd">
            <rect fill="#2D2E40" opacity=".08" transform="matrix(1 0 0 -1 0 890)" x="145" y="144" width="600" height="602" rx="300"/>
            <rect stroke="#2D2E40" opacity=".5" transform="matrix(1 0 0 -1 0 882)" x="105.5" y="100.5" width="679" height="681" rx="339.5"/>
            <rect stroke="#2D2E40" opacity=".25" transform="matrix(1 0 0 -1 0 882)" x="5.5" y=".5" width="879" height="881" rx="439.5"/>
            <g transform="translate(0 242)">
                <mask id="d" fill="#fff"><use xlink:href="#a"/></mask>
                <g fill-rule="nonzero">
                    <use fill="#000" filter="url(#b)" xlink:href="#a"/>
                    <use fill="url(#c)" xlink:href="#a"/>
                </g>
                <path d="M3 125h636a3 3 0 013 3v296a3 3 0 01-3 3H3a3 3 0 01-3-3V128a3 3 0 013-3z" fill="#2D2E40" fill-rule="nonzero" mask="url(#d)"/>
                <rect fill="#FFF" fill-rule="nonzero" mask="url(#d)" x="90.523" y="47.709" width="135.785" height="137.165" rx="3"/>
                <ellipse fill="#2D2E40" mask="url(#d)" cx="158.416" cy="116.888" rx="39.306" ry="39.36"/>
                <rect fill="#FFF" fill-rule="nonzero" mask="url(#d)" x="248.939" y="47.709" width="302.538" height="325.617" rx="3"/>
            </g>
            <path d="M209 284c47.125-73.367 81.977-113.013 104.557-118.938 33.87-8.886 23.765 83.14 72.535 72.473 48.77-10.666 54.716-103.974 91.603-108.37 36.887-4.397 56.402 80.946 72.515 88.81 10.742 5.241 24.005-6.094 39.79-34.007" stroke="url(#e)" stroke-width="8" stroke-linecap="round" transform="translate(0 242)"/>
        </g>
    </svg>
          </div>
           */}
        </section>
      </div>
    </div>
  );
}

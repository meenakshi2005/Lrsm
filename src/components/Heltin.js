import { useEffect, useState } from "react";
import "../css/report.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";
import { chatpter_api } from "../api/api";

export default function Example() {
  const [chapters, setChapters] = useState([]);
  const [pageitem, setPageitem] = useState(0);
  let { state } = useLocation();

  console.log(state, "data from head");
  const changePagefn = (pagename) => {
    setPage(pagename);
  };
  console.log(pageitem);

  useEffect(() => {
    chapterapifun();
  }, []);

  const chapterapifun = async () => {
    const res = await chatpter_api(state?.e?.ORGSTRUCTUREID);
    console.log(res[0], "check chapter data");
    setChapters(res);
  };

  const [page, setPage] = useState("Chapter.htm");

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
      <div
        className="flex flex-1 flex-col "
        style={{
          backgroundColor: "ButtonFace",
          width: "80%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "500",
            // padding: "1px",
          }}
        >
          {/* HELTH INSURANCE CLAIMS */}
          {state?.e?.ORGSTRUCTURENAME}
          <hr
            style={{
              border: "0.5px solid gray",
              margin: "20px 0",
              width: "60%",
              marginTop: "-6px",
            }}
          />
        </h1>

        <p
          style={{
            paddingLeft: "2px",
            paddingTop: "20px",
          }}
        >
          Time Spent on this chapter{" "}
          <span className="report-title" style={{ color: "orange" }}>
            00:00:0000 / 00:00:0000
          </span>
        </p>

        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700"></p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                  //     <a
                  //   // href="./Chapter.htm"
                  //   // aria-current="page"
                  //   onClick={()=>changePagefn("Chapter.htm")}
                  //   className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // >

                  //   {e}
                  // </a>
                  <a
                    onClick={() => setPageitem(e)}
                    href="#"
                    className={
                      e !== pageitem
                        ? "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        : "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    }
                  >
                    {e}
                  </a>
                ))}

                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* <iframe
          src={"/HTML/CO501/POSCO1CH5P2.html"}
          title="Example Iframe"
          height="700"
          style={{ border: "none", marginTop: "20px" }}
        ></iframe> */}
        {
chapters?.map((e)=>(
            <iframe
            src={`/HTML/CO501/${e.CONTENTPATH}`}
            title="Example Iframe"
            height="700"
            style={{ border: 'none', marginTop: '20px' }}
          ></iframe>

          ))
        }
      </div>
    </div>
  );
}

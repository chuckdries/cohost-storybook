import { ReactNode } from "react";

interface PostProps {
  children: ReactNode;
}
const Post = ({
  children
}: PostProps) => {
  return (
    <article className="cohost-shadow-light dark:cohost-shadow-dark w-full overflow-x-auto rounded-lg bg-white lg:max-w-prose">
      <header className="flex w-full flex-row items-center justify-between rounded-t-lg bg-notWhite p-3">
        <div className="flex w-full flex-row items-center gap-2">
          <div className="flex flex-1 flex-row flex-wrap items-center gap-2 leading-none">
            <div className="flex-0 mask relative aspect-square h-8 w-8 lg:hidden">
              <img
                src="https://staging.cohostcdn.org/avatar/808-468d977b-f33c-472b-966d-52f2c2ce2c49-profile.jpg"
                className="mask mask-squircle h-full w-full object-cover"
                alt="chuck"
              />
            </div>
            <a
              rel="author"
              href="https://cohost.org/chuck"
              className="block max-w-full flex-shrink truncate font-atkinson font-bold text-notBlack hover:underline"
            >
              Chuck
            </a>
            <a
              href="https://cohost.org/chuck"
              className="block font-atkinson font-normal text-gray-600 hover:underline"
            >
              @chuck
            </a>
            <time
              // datetime="2022-06-30T21:10:28.174-07:00"
              className="block flex-none text-xs text-gray-500"
              title="Thu, Jun 30, 2022, 9:10 PM"
            >
              <a
                href="https://cohost.org/chuck/post/23133-div-style-margin"
                className="hover:underline"
              >
                2 days ago
              </a>
            </time>
          </div>
          <div className="relative h-6 w-6">
            <button
              className="absolute top-0 right-0"
              id="headlessui-menu-button-:ra:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-notBlack transition-transform "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <hr className="mx-3 border-gray-300" />
      <a id="post-23133" className="relative -top-28"></a>
      <div>
        <div className="px-3  relative overflow-hidden">
          <div className="prose my-4 break-words">
            { children }
          </div>
        </div>
        <div className="w-full max-w-full p-3">
          <div className="relative w-full overflow-y-hidden break-words leading-none text-gray-400 ">
            <div>
              <a
                className="mr-2 inline-block text-sm text-gray-400 hover:underline"
                href="https://cohost.org/rc/tagged/photography"
              >
                #photography
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-3 border-gray-300" />
      <footer className="w-full max-w-full rounded-b-lg bg-notWhite p-3">
        <div className="flex justify-between align-middle">
          <div className="w-max flex-none">
            <a
              href="https://cohost.org/chuck/post/23133-div-style-margin"
              className="text-sm leading-none text-gray-400 hover:underline"
            >
              12 comments
            </a>
          </div>
          <div className="flex justify-end gap-3 bg-notWhite">
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: "0px",
                display: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: "0px",
                display: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: "0px",
                display: "none",
              }}
            ></div>
            <button title="delete this post">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-notBlack"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
            <a
              href="https://cohost.org/chuck/post/23133-div-style-margin/edit"
              className="h-6 w-6 text-notBlack"
              title="edit this post"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </a>
            <a
              href="https://cohost.org/chuck/post/compose?shareOf=23133"
              title="share this post as chuck"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-notBlack"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </a>
            <button className="w-6 h-6 pointer relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 pointer absolute top-0 left-0 text-cherry invisible"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6 pointer absolute top-0 left-0 text-notBlack visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Post;

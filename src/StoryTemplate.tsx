import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import * as ReactDOMServer from "react-dom/server";

import AceEditor from "react-ace";
import prettier from "prettier/standalone";
import parserHTML from "prettier/parser-html";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

import Post, { MaskTypes } from "./Post";
import "./index.css";

export interface StoryTemplateProps {
  wrapWithPosts: boolean;
  showHTML: boolean;
  creatorHandle?: string;
  creatorDisplayName?: string;
  creatorProfilePicUrl?: string;
  creatorProfilePicMask?: MaskTypes;
  originalPostHref?: string;
}

const TakeUpSpacePost = () => (
  <div
    style={{
      resize: "vertical",
      padding: "1em",
      overflow: "auto",
      border: "1px solid black",
    }}
  >
    this is here to take up space!
  </div>
);

const StoryTemplate = ({
  children,
  wrapWithPosts,
  showHTML,
  creatorHandle,
  creatorDisplayName,
  creatorProfilePicUrl,
  creatorProfilePicMask,
  originalPostHref,
}: StoryTemplateProps & {
  children: ReactNode;
}) => {
  if (showHTML) {
    return (
      <div className="bg-notblack text-white">
        <div className="bg-foreground p-2">
          <p className="inline">
            This view is read-only! Clone the repo to your computer and edit
            this file in your editor to edit it. See the "Introduction" story
            for more details.{" "}
            <a
              className="underline ml-1"
              href="https://github.com/chuckdries/cohost-storybook"
            >
              https://github.com/chuckdries/cohost-storybook
            </a>
          </p>
        </div>
        <AceEditor
          readOnly
          maxLines={Infinity}
          width="100%"
          mode="html"
          wrapEnabled
          theme="dracula"
          tabSize={2}
          value={prettier.format(
            ReactDOMServer.renderToString(
              children as ReactElement<any, string | JSXElementConstructor<any>>
            ),
            {
              parser: "html",
              plugins: [parserHTML],
            }
          )}
        />
      </div>
    );
  }

  return (
    <div className="bg-notblack">
      <div className="container mx-auto py-12">
        <header className="cohost-shadow-light dark:cohost-shadow-dark fixed top-0 right-0 left-0 z-10 h-16 bg-foreground text-text">
          <div className="container mx-auto flex h-full flex-row items-center justify-between px-2 lg:p-0">
            <a
              href="https://cohost.org/"
              className="text-text hover:text-accent"
            >
              <svg
                className="hidden h-8 lg:block"
                role="img"
                aria-label="cohost"
                viewBox="0 0 506 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M142.814 106.403C131.705 113.206 118.897 118.552 104.39 122.439C88.2779 126.756 73.0919 128.487 58.8317 127.631C44.5716 126.775 32.4222 123.055 22.3834 116.471C12.3446 109.887 5.57634 100.068 2.07868 87.0142C-1.43905 73.886 -0.492012 61.9799 4.9198 51.2958C10.3316 40.6118 19.0083 31.3714 30.95 23.5747C42.8917 15.7779 56.9185 9.72092 73.0304 5.40379C89.0677 1.1066 104.193 -0.627685 118.406 0.200922C127.955 0.757684 136.568 2.6028 144.246 5.73626C147.995 7.26657 151.521 9.10414 154.824 11.249C164.89 17.7858 171.672 27.581 175.17 40.6346C178.667 53.6882 177.697 65.5807 172.258 76.312C171.498 77.8112 170.675 79.2823 169.789 80.7261C169.163 77.9074 167.906 75.4497 166.018 73.353C165.091 72.3236 164.061 71.3784 162.926 70.5172C160.603 68.7538 157.845 67.3429 154.652 66.2845C149.898 64.7092 144.602 63.9216 138.763 63.9216C132.896 63.9216 127.58 64.7024 122.813 66.2641C118.046 67.8259 114.257 70.1752 111.446 73.3122C108.635 76.4492 107.23 80.4078 107.23 85.188C107.23 89.9411 108.635 93.8928 111.446 97.0434C114.257 100.194 118.046 102.564 122.813 104.153C127.58 105.741 132.896 106.536 138.763 106.536C140.143 106.536 141.493 106.492 142.814 106.403ZM91.9944 97.9397C90.8808 99.1348 88.9185 100.404 86.1074 101.749C83.2963 103.093 79.9081 104.227 75.9427 105.151C71.9773 106.074 67.7132 106.536 63.1502 106.536C59.1577 106.536 55.2466 106.149 51.417 105.375C47.5875 104.601 44.1245 103.372 41.0283 101.688C37.932 100.004 35.4672 97.8039 33.6339 95.0879C31.8006 92.3719 30.8839 89.0719 30.8839 85.188C30.8839 81.2498 31.8006 77.9227 33.6339 75.2066C35.4672 72.4906 37.932 70.3042 41.0283 68.6475C44.1245 66.9907 47.5875 65.7888 51.417 65.0419C55.2466 64.295 59.1577 63.9216 63.1502 63.9216C67.7403 63.9216 71.9773 64.329 75.8612 65.1438C79.7451 65.9586 83.079 67.0246 85.8629 68.3419C88.6469 69.6592 90.6635 71.0647 91.9129 72.5585L81.4834 79.4028C79.9624 77.7461 77.6538 76.4221 74.5575 75.4307C71.4613 74.4394 67.6996 73.9437 63.2725 73.9437C61.0997 73.9437 58.9065 74.1135 56.6929 74.4529C54.4793 74.7925 52.4491 75.3696 50.6022 76.1844C48.7554 76.9992 47.2683 78.1399 46.1412 79.6066C45.014 81.0732 44.4504 82.9337 44.4504 85.188C44.4504 87.4151 45.014 89.2553 46.1412 90.7083C47.2683 92.1614 48.7554 93.3157 50.6022 94.1712C52.4491 95.0268 54.4793 95.6311 56.6929 95.9842C58.9065 96.3373 61.0997 96.5138 63.2725 96.5138C67.6181 96.5138 71.3866 95.9706 74.5779 94.8842C77.7692 93.7978 80.0167 92.5484 81.3204 91.1361L91.9944 97.9397ZM138.763 96.3508C144.439 96.3508 148.839 95.3323 151.963 93.2953C155.086 91.2583 156.648 88.5559 156.648 85.188C156.648 81.7386 155.079 79.0294 151.942 77.0603C148.805 75.0912 144.412 74.1066 138.763 74.1066C133.086 74.1066 128.666 75.0912 125.502 77.0603C122.338 79.0294 120.756 81.7386 120.756 85.188C120.756 88.6102 122.338 91.3262 125.502 93.3361C128.666 95.3459 133.086 96.3508 138.763 96.3508Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M194.473 106.424V42.5023H207.737V72.5055C210.187 70.215 213.403 68.4904 217.385 67.3319C221.366 66.1733 225.888 65.594 230.948 65.594C238.592 65.594 244.285 67.2054 248.027 70.4281C251.769 73.6508 253.64 78.871 253.64 86.0889V106.424H240.297V87.2474C240.297 84.078 239.824 81.6543 238.878 79.9764C237.933 78.2984 236.415 77.1465 234.324 76.5206C232.233 75.8947 229.457 75.5818 225.994 75.5818C222.984 75.5818 220.135 75.9413 217.445 76.6604C214.755 77.3796 212.524 78.4183 210.753 79.7766C208.982 81.135 207.976 82.7596 207.737 84.6506V106.424H194.473V106.424Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M394.498 106.615C387.518 106.615 381.312 106.167 375.88 105.27C370.448 104.374 366.36 103.22 363.617 101.808L373.313 93.9039C374.943 94.8273 377.707 95.649 381.604 96.3687C385.502 97.0884 389.895 97.4484 394.784 97.4484C400.352 97.4484 404.69 97.0816 407.8 96.3483C410.91 95.615 412.465 94.6101 412.465 93.3335C412.465 92.573 411.766 91.962 410.367 91.5002C408.968 91.0385 406.7 90.6379 403.563 90.2984C400.426 89.9589 396.237 89.6262 390.995 89.3003C382.466 88.7299 375.941 87.4398 371.419 85.43C366.897 83.4201 364.636 80.3781 364.636 76.3041C364.636 74.1041 365.512 72.2233 367.264 70.6616C369.015 69.0998 371.378 67.8301 374.352 66.8524C377.326 65.8746 380.681 65.1548 384.415 64.6931C388.15 64.2314 391.986 64.0005 395.924 64.0005C404.1 64.0005 410.455 64.503 414.991 65.5079C419.527 66.5128 422.256 67.3005 423.18 67.8709L414.217 76.7523C413.809 76.4535 412.961 76.1072 411.67 75.7133C410.38 75.3196 408.819 74.9325 406.985 74.5523C405.152 74.172 403.21 73.8529 401.159 73.5949C399.109 73.3369 397.119 73.2078 395.191 73.2078C392.04 73.2078 389.168 73.3233 386.574 73.5541C383.981 73.785 381.923 74.1381 380.402 74.6134C378.881 75.0887 378.121 75.7202 378.121 76.5078C378.121 77.5399 379.486 78.2936 382.215 78.7689C384.945 79.2442 389.637 79.6991 396.291 80.1337C399.713 80.3781 403.169 80.738 406.659 81.2133C410.15 81.6886 413.341 82.3812 416.233 83.2911C419.126 84.2009 421.448 85.4163 423.2 86.9373C424.952 88.4583 425.828 90.3595 425.828 92.641C425.828 95.194 425.006 97.3532 423.363 99.1187C421.72 100.884 419.445 102.324 416.539 103.437C413.633 104.551 410.292 105.359 406.517 105.861C402.742 106.364 398.735 106.615 394.498 106.615Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M449.364 76.7974V67.4755H469.77V53.3752H482.617V67.4755H506V76.7974H482.617V98.0654H501.3V106.643H469.77V76.7974H449.364Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M308.663 106.615C302.797 106.615 297.48 105.82 292.713 104.232C287.947 102.643 284.158 100.273 281.347 97.1224C278.536 93.9718 277.13 90.02 277.13 85.267C277.13 80.4868 278.536 76.5282 281.347 73.3912C284.158 70.2542 287.947 67.9048 292.713 66.3431C297.48 64.7814 302.797 64.0005 308.663 64.0005C314.503 64.0005 319.799 64.7882 324.552 66.3635C329.305 67.9387 333.094 70.2949 335.918 73.4319C338.743 76.5689 340.155 80.5139 340.155 85.267C340.155 90.02 338.743 93.9718 335.918 97.1224C333.094 100.273 329.305 102.643 324.552 104.232C319.799 105.82 314.503 106.615 308.663 106.615ZM308.663 96.4298C314.34 96.4298 318.74 95.4113 321.863 93.3743C324.986 91.3373 326.548 88.6348 326.548 85.267C326.548 81.8176 324.98 79.1084 321.843 77.1393C318.706 75.1701 314.312 74.1856 308.663 74.1856C302.987 74.1856 298.566 75.1701 295.402 77.1393C292.238 79.1084 290.656 81.8176 290.656 85.267C290.656 88.6892 292.238 91.4052 295.402 93.415C298.566 95.4249 302.987 96.4298 308.663 96.4298Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 416 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-8 lg:hidden"
                role="img"
                aria-label="cohost"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M335.13 249.687c-26.067 15.965-56.123 28.509-90.166 37.631-37.809 10.131-73.445 14.192-106.908 12.183-33.463-2.008-61.9733-10.738-85.5305-26.188-23.5573-15.45-39.4399-38.491-47.64762-69.123-8.2548-30.807-6.03245-58.746 6.66702-83.818 12.6995-25.0714 33.0606-46.755 61.0832-65.0511 28.0229-18.296 60.9379-32.5095 98.7469-42.6402C209.008 2.59678 244.501-1.47294 277.854.471489 300.262 1.778 320.475 6.10779 338.49 13.4609c8.799 3.591 17.073 7.9031 24.824 12.9363 23.621 15.3393 39.536 38.325 47.744 68.957 8.208 30.6318 5.93 58.5388-6.834 83.7218-1.783 3.518-3.714 6.97-5.793 10.358-1.468-6.614-4.418-12.382-8.849-17.302-2.175-2.415-4.593-4.634-7.255-6.655-5.451-4.138-11.924-7.448-19.418-9.932-11.153-3.697-23.582-5.545-37.285-5.545-13.766 0-26.242 1.832-37.428 5.497-11.185 3.665-20.076 9.178-26.673 16.539-6.597 7.362-9.895 16.651-9.895 27.868 0 11.154 3.298 20.427 9.895 27.821 6.597 7.393 15.488 12.954 26.673 16.682 11.186 3.729 23.662 5.593 37.428 5.593 3.24 0 6.408-.104 9.506-.313Zm-119.254-19.859c-2.613 2.804-7.218 5.784-13.814 8.939-6.597 3.155-14.548 5.816-23.853 7.982-9.305 2.167-19.311 3.251-30.019 3.251-9.369 0-18.547-.908-27.533-2.725-8.987-1.816-17.113-4.7-24.379-8.652-7.2658-3.951-13.0497-9.114-17.3519-15.487-4.302-6.374-6.4531-14.118-6.4531-23.232 0-9.241 2.1511-17.049 6.4531-23.422 4.3022-6.374 10.0861-11.504 17.3519-15.392 7.266-3.888 15.392-6.708 24.379-8.461 8.986-1.753 18.164-2.629 27.533-2.629 10.771 0 20.714.956 29.828 2.868s16.937 4.414 23.47 7.505c6.533 3.091 11.265 6.389 14.197 9.895l-24.474 16.061c-3.569-3.888-8.987-6.995-16.252-9.321-7.266-2.327-16.093-3.49-26.482-3.49-5.099 0-10.246.399-15.44 1.195-5.194.797-9.958 2.151-14.292 4.063s-7.824 4.589-10.469 8.031c-2.645 3.442-3.967 7.807-3.967 13.097 0 5.227 1.322 9.545 3.967 12.954 2.645 3.41 6.135 6.119 10.469 8.127 4.334 2.007 9.098 3.425 14.292 4.254 5.194.829 10.341 1.243 15.44 1.243 10.197 0 19.041-1.275 26.529-3.824 7.489-2.55 12.763-5.482 15.823-8.796l25.047 15.966Zm109.748-3.729c13.321 0 23.646-2.39 30.976-7.17 7.329-4.78 10.994-11.121 10.994-19.025 0-8.094-3.681-14.451-11.042-19.072-7.362-4.621-17.671-6.931-30.928-6.931-13.32 0-23.693 2.31-31.118 6.931-7.425 4.621-11.138 10.978-11.138 19.072 0 8.031 3.713 14.404 11.138 19.121 7.425 4.716 17.798 7.074 31.118 7.074Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <button className="inline-block transition-transform lg:hidden rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <nav
              className="hidden cohost-shadow-light dark:cohost-shadow-dark absolute top-16 right-0 left-0
            flex-col flex-wrap items-end gap-4 rounded-b-lg bg-foreground px-3
            pb-2 lg:relative lg:top-0
            lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:px-0
            lg:pb-0 lg:!shadow-none dark:lg:!shadow-none"
            >
              <a
                href=""
                className="leading-none align-middle py-2 px-4 no-select font-atkinson font-bold rounded-full border-2 border-notBlack hover:bg-notBlack text-notBlack focus:outline-notBlack focus:ring-notBlack bg-notWhite hover:text-notWhite"
              >
                post
              </a>
              <button>sign out</button>
            </nav>
          </div>
        </header>
        {/* items-center and my-16 and gap-4 added by me (I don't remember where I copy-pasted this from) */}
        <div className="col-span-1 flex flex-col gap-4 lg:col-span-2 items-center my-16">
          {wrapWithPosts && (
            <Post
              creatorDisplayName="Chuck"
              creatorHandle="chuck"
              creatorProfilePicUrl="https://staging.cohostcdn.org/avatar/808-468d977b-f33c-472b-966d-52f2c2ce2c49-profile.jpg"
              creatorProfilePicMask="mask-squircle"
              originalPostHref="#"
            >
              <TakeUpSpacePost />
            </Post>
          )}
          <Post
            creatorHandle={creatorHandle || "chuck"}
            creatorDisplayName={creatorDisplayName || "Chuck"}
            creatorProfilePicUrl={
              creatorProfilePicUrl ||
              "https://staging.cohostcdn.org/avatar/808-468d977b-f33c-472b-966d-52f2c2ce2c49-profile.jpg"
            }
            creatorProfilePicMask={creatorProfilePicMask || ('mask-squircle' as 'mask-squircle')}
            originalPostHref={originalPostHref || "#"}
          >
            {children}
          </Post>
          {wrapWithPosts && (
            <Post
              creatorDisplayName="Chuck"
              creatorHandle="chuck"
              creatorProfilePicUrl="https://staging.cohostcdn.org/avatar/808-468d977b-f33c-472b-966d-52f2c2ce2c49-profile.jpg"
              creatorProfilePicMask="mask-squircle"
              originalPostHref="#"
            >
              <TakeUpSpacePost />
            </Post>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryTemplate;

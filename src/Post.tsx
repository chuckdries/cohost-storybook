import { ReactNode } from "react";
import {
  TrashIcon,
  DotsHorizontalIcon,
  ShieldExclamationIcon,
  PencilAltIcon,
  RefreshIcon,
  HeartIcon,
} from "@heroicons/react/outline";

export type MaskTypes = 'mask-squircle' | 'mask-circle' | 'mask-roundrect';

interface PostProps {
  children: ReactNode;
  creatorHandle: string;
  creatorDisplayName: string;
  creatorProfilePicUrl: string;
  creatorProfilePicMask: MaskTypes;
  originalPostHref: string;
}
const Post = ({
  children,
  creatorHandle,
  creatorDisplayName,
  creatorProfilePicUrl,
  creatorProfilePicMask,
  originalPostHref,
}: PostProps) => {
  return (
    <div className="grid lg:grid-cols-[4rem_1fr] gap-x-6 gap-y-2 w-full">
      <div className="flex-0 mask relative aspect-square h-16 w-16 hidden lg:block">
        <img
          src={creatorProfilePicUrl}
          className={`mask ${creatorProfilePicMask} h-full w-full object-cover`}
          alt={creatorDisplayName}
        />
      </div>
      <article className="cohost-shadow-light dark:cohost-shadow-dark w-full overflow-x-auto rounded-lg bg-white lg:max-w-prose">
        <header className="flex w-full flex-row items-center justify-between rounded-t-lg bg-notWhite p-3">
          <div className="flex w-full flex-row items-center gap-2">
            <div className="flex flex-1 flex-row flex-wrap items-center gap-2 leading-none">
              <div className="flex-0 mask relative aspect-square h-8 w-8 lg:hidden">
                <img
                  src={creatorProfilePicUrl}
                  className={`mask ${creatorProfilePicMask} h-full w-full object-cover`}
                  alt={creatorDisplayName}
                />
              </div>
              <a
                rel="author"
                href={`https://cohost.org/${creatorHandle}`}
                className="block max-w-full flex-shrink truncate font-atkinson font-bold text-notBlack hover:underline"
              >
                {creatorDisplayName}
              </a>
              <a
                href={`https://cohost.org/${creatorHandle}`}
                className="block font-atkinson font-normal text-gray-600 hover:underline"
              >
                @{creatorHandle}
              </a>
              <time
                // datetime="2022-06-30T21:10:28.174-07:00"
                className="block flex-none text-xs text-gray-500"
                title="Thu, Jun 30, 2022, 9:10 PM"
              >
                <a
                  href={originalPostHref}
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
                <DotsHorizontalIcon className="h-6 w-6 text-notBlack" />
              </button>
            </div>
          </div>
        </header>
        <hr className="mx-3 border-gray-300" />
        <a id="post-23133" className="relative -top-28"></a>
        <div>
          <div className="px-3  relative overflow-hidden">
            <div className="prose my-4 break-words">{children}</div>
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
                href={originalPostHref}
                className="text-sm leading-none text-gray-400 hover:underline"
              >
                N comments
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
                <TrashIcon className="h-6 w-6 text-notBlack" />
              </button>
              <a
                href="#"
                className="h-6 w-6 text-notBlack"
                title="edit this post"
              >
                <PencilAltIcon />
              </a>
              <a
                href="#"
                title="share this post"
              >
                <RefreshIcon className="h-6 w-6 text-notBlack" />
              </a>
              <button className="w-6 h-6 pointer relative">
                <HeartIcon className="h-6 w-6 text-notBlack" />
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Post;

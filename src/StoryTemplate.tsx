import {
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  RefObject,
  useRef,
} from "react";
import AceEditor from "react-ace";
import prettier from "prettier/standalone";
import parserHTML from "prettier/parser-html";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

import Post from "./Post";
import "./index.css";

export interface StoryTemplateProps {
  wrapWithPosts: boolean;
  showHTML: boolean;
}

const StoryTemplate = ({
  children: _children,
  wrapWithPosts,
  showHTML,
}: StoryTemplateProps & {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) => {
  const postRef = useRef() as RefObject<HTMLDivElement>;
  if (showHTML) {
    return (
      <div className="bg-notblack text-white">
        {(!postRef.current || postRef.current?.outerHTML.length == 0) && (
          <p className="p-2">
            if this is blank, flip the "show HTML" switch off then on again
          </p>
        )}
        <AceEditor
          readOnly
          maxLines={Infinity}
          width="100%"
          mode="html"
          wrapEnabled
          theme="dracula"
          tabSize={2}
          value={prettier.format(postRef.current?.outerHTML ?? "", {
            parser: "html",
            plugins: [parserHTML],
          })}
        />
      </div>
    );
  }

  const children = cloneElement(_children, { ref: postRef });
  return (
    <div className="min-h-full flex flex-col bg-notblack">
      <div className="container mx-auto py-12">
        {/* items-center added by me */}
        <div className="col-span-1 flex flex-col gap-12 lg:col-span-2 items-center">
          {wrapWithPosts && (
            <Post>
              <div
                style={{
                  resize: "vertical",
                  overflow: "auto",
                  border: "1px solid black",
                }}
              >
                this is here to take up space!
              </div>
            </Post>
          )}
          <Post>{children}</Post>
          {wrapWithPosts && (
            <Post>
              <div
                style={{
                  resize: "vertical",
                  overflow: "auto",
                  border: "1px solid black",
                }}
              >
                this is here to take up space!
              </div>
            </Post>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryTemplate;

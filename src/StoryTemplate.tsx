import { ReactNode } from "react";
import Post from "./Post";
import "./index.css";

export interface StoryTemplateProps {
  wrapWithPosts: boolean;
}

const StoryTemplate = ({
  children,
  wrapWithPosts,
}: StoryTemplateProps & { children: ReactNode }) => (
  <div className="min-h-full flex flex-col bg-notblack">
    <div className="container mx-auto py-12">
      <div className="col-span-1 flex flex-col gap-12 lg:col-span-2 items-center">
        {/* items-center added by me */}
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

export default StoryTemplate;

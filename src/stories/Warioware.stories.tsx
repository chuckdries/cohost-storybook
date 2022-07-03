// story added by @chuck, modified by @chuck
// original post by @mog: https://cohost.org/mog/post/15769-details-summary-s
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    {/* ----EDIT BELOW HERE---- */}
    <details>
      <summary
        style={{
          cursor: "pointer",
          width: "240px",
          height: "160px",
          padding: "15px",
          borderRadius: "5px",
          border: "1px solid black",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          listStyle: "none",
          color: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          click here to play WarioWare
          <br />
          (click to catch the mug)
          <br />
          broken on firefox
        </div>
      </summary>
      <div>
        <details>
          <summary
            style={{
              width: "240px",
              height: "160px",
              position: "absolute",
              left: "0.75rem",
              top: "-1rem",
              cursor: "pointer",
              userSelect: "none",
              listStyle: "none",
              display: "block",
            }}
          >
            <img
              src="https://staging.cohostcdn.org/attachment/9bac068f-0963-49ab-b8f9-83be9d65be37/failure.gif"
              style={{ width: "240px", height: "160px" }}
            />
          </summary>
          <div
            style={{
              display: "block",
              cursor: "pointer",
              position: "absolute",
              left: "0.75rem",
              top: "1rem",
              width: "240px",
              height: "160px",
              backgroundColor: "transparent",
              zIndex: "1",
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              left: "calc(1rem + 240px)",
              top: "-0.5rem",
              fontWeight: "bold",
            }}
          >
            too early/late!
          </p>
        </details>
        <details>
          <summary
            style={{
              display: "block",
              cursor: "pointer",
              position: "absolute",
              left: "0.75rem",
              top: "calc(-480px + 1rem)",
              width: "240px",
              height: "calc(640px)",
              opacity: "0.5",
              background: "transparent",
              animation: "1.5s linear 1.5s 1 normal none running bounce",
              transform: "translateY(-25%)",
              userSelect: "none",
            }}
          ></summary>
          <img
            src="https://staging.cohostcdn.org/attachment/ab4e80ae-b3f7-4044-a996-a561bb4b959c/success.gif"
            style={{
              width: "240px",
              height: "160px",
              position: "absolute",
              left: "0.75rem",
              top: "-1rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: "calc(1rem + 240px)",
              top: "-0.5rem",
              fontWeight: "bold",
            }}
          >
            right on!
          </p>
        </details>
        <div
          style={{
            position: "absolute",
            left: "0.75rem",
            top: "0px",
            width: "240px",
            height: "1rem",
            background: "white",
            userSelect: "none",
          }}
        ></div>
      </div>
    </details>
    {/* ----EDIT ABOVE HERE---- */}
  </StoryTemplate>
);

export default {
  title: "Posts/Warioware",
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: false,
    },
    showHTML: {
      name: "Show HTML",
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

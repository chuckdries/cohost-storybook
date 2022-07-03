import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CSSProperties } from "react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const aspectRatio = "1";
const border = "3px solid #000";
const color = "#aaa";

const cardStyle: CSSProperties = {
  aspectRatio,
  flexShrink: 0,
  width: "100%",
};

const flexContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageCardStyle: CSSProperties = {
  ...cardStyle,
  ...flexContainer,
  padding: "2em",
};

const imageStyle: CSSProperties = {
  objectFit: "contain",
  border,
};

const linkStyle = {
  color,
}

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    <div
      style={{
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex",
        flexWrap: "nowrap",
        gap: "1em",
      }}
    >
      <div
        id="front-cover"
        style={{
          ...cardStyle,
          ...flexContainer,
          background:
            "url('https://staging.cohostcdn.org/attachment/630ec554-2a19-4e6d-bd1d-c21f9ada1b90/DSC00373-2.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          border,
        }}
      >
        <h1 style={{ color }}>Beach Blues</h1>
      </div>
      <div style={{ ...imageCardStyle }}>
        <img
          src="https://staging.cohostcdn.org/attachment/a2e1ad15-52d0-41f2-8be5-7e64f0664e20/DSC00345.jpg"
          style={{ ...imageStyle }}
        />
      </div>
      <div style={{ ...imageCardStyle }}>
        <img
          src="https://staging.cohostcdn.org/attachment/4c1f91e5-aa5f-4bcd-8e00-1e0cc341c774/DSC00394.jpg"
          style={{ ...imageStyle }}
        />
      </div>
      <div style={{ ...imageCardStyle }}>
        <img
          src="https://staging.cohostcdn.org/attachment/33b45c24-af2d-492f-bd42-e8538c1ded63/DSC00310.jpg"
          style={{ ...imageStyle }}
        />
      </div>
      <div
        style={{
          ...cardStyle,
          border,
          backgroundColor: "#faf7f3",
        }}
      >
      </div>
      <div
        id="back-cover"
        style={{
          ...cardStyle,
          ...flexContainer,
          border,
          color,
          backgroundColor: "#17182b",
        }}
      >
        <div>
          <p>
            <a style={linkStyle} href="https://cohost.org/chuck">
              @chuck
            </a>
          </p>
          <p>
            wallpaper downloads available on <a style={linkStyle} href="https://chuckdries.com">
              chuckdries.com
            </a>
          </p>
          <p>
            special thanks to{" "}
            <a style={linkStyle} href="https://cohost.org/ror">
              @ror
            </a>{" "}
            for pioneering the format
          </p>
          <p>
            This post was built with the{" "}
            <a style={linkStyle} href="https://cohost-storybook.netlify.app/">
              cohost storybook
            </a>
          </p>
        </div>
      </div>
    </div>
  </StoryTemplate>
);

export default {
  title: "Posts/Carousel 1 (Beach Blues)",
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

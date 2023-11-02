// story added by @chuck, modified by @chuck
// original post: https://cohost.org/ror/post/22694-div-style-ove & https://cohost.org/ror/post/23575-div-id-book-style
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CSSProperties, ReactNode } from "react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const aspectRatio = "3/2";
const border = "3px solid #000";
const color = "#aaa";

const cardStyle: CSSProperties = {
  aspectRatio,
  flexShrink: 0,
  width: "100%",
  position: "relative",
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
  boxShadow: `rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em`,
  // border,
};

const linkStyle = {
  color,
};

const ImgSlide = ({ src, children }: { src: string; children?: ReactNode }) => (
  <a href={src} style={{ ...imageCardStyle }}>
    {children}
    <img src={src} style={{ ...imageStyle }} />
  </a>
);

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    <div
      style={{
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      {/* <div
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
      </div> */}
      <ImgSlide src="https://staging.cohostcdn.org/attachment/c5c5ecb9-82c1-41f8-adb6-829b4aee97ea/000020210031.jpg">
        {/* <h1 style={{ fontSize: '80px', color: 'white', position: 'absolute'}}>HOPSCOTCH</h1> */}
        <span
          style={{
            position: "absolute",
            bottom: "1em",
            fontStyle: "italic",
            opacity: 0.5,
          }}
        >
          scroll&rarr;
        </span>
      </ImgSlide>
      <ImgSlide src="https://staging.cohostcdn.org/attachment/ad6a341e-709b-483a-8223-515cd1902b25/000020210030.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/ad766566-2a7e-46cb-831a-9d3e266bbafd/000020210018.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/4d89a9b7-0009-4844-a227-c633aaa6a401/000020210027.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/aeb58557-ba03-47ed-ba99-cccfb16b778a/000020210019.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/b2d7b44b-7d71-43b1-abb9-91a9554b7d2b/000020210035.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/eea34377-3166-449c-b40b-e93f3350434f/000020210028.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/738683b9-6329-42de-8858-d6f2b3738ddd/000020210026.jpg" />
      <ImgSlide src="https://staging.cohostcdn.org/attachment/0b18900d-9903-4e6f-8bea-650dbe266a44/000020210024.jpg" />
      {/* <div
        style={{
          ...imageCardStyle,
          width: "calc(200% - 4em)",
          aspectRatio: "3/1",
        }}
      >
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
      ></div> */}
      {/* <div
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
            wallpaper downloads available on{" "}
            <a style={linkStyle} href="https://chuckdries.com">
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
      </div> */}
    </div>
  </StoryTemplate>
);

export default {
  title: "Posts/Carousel",
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

export const VariableWidth = Template.bind({});
VariableWidth.args = {};

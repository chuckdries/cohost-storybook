// early iteration of a post by https://cohost.org/ror

import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Carousel = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    <div
      id="book"
      style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}
    >
      <div
        id="front-cover"
        style={{
          display: "inline-flex",
          verticalAlign: "top",
          width: "100%",
          marginTop: "2em",
          aspectRatio: "0.81625",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid #000",
          backgroundColor: "rgba(170,195,190,255)",
        }}
      >
        <div>
          <b>Tiny Photozine</b>
          <p>Issue 2</p>
        </div>
      </div>
      <div id="image-1" style={{ display: "inline-block" }}>
        <img
          src="https://cohost.org/api/v1/attachments/7464384d-6bb2-49fe-8b99-bea9a599b34c"
          style={{ border: "3px solid #000" }}
        />
      </div>
      <div
        style={{
          display: "inline-block",
          verticalAlign: "top",
          width: "100%",
          aspectRatio: "0.81625",
          marginTop: "2em",
          border: "3px solid #000",
          backgroundColor: "#faf7f3",
        }}
      ></div>
      <div id="image-2" style={{ display: "inline-block" }}>
        <img
          src="https://cohost.org/api/v1/attachments/d4cb8863-b702-454e-ab2f-b6decdffce22"
          style={{ border: "3px solid #000" }}
        />
      </div>
      <div id="image-3" style={{ display: "inline-block" }}>
        <img
          src="https://cohost.org/api/v1/attachments/d4bd5195-5d68-4370-9707-e61a4fb4529c"
          style={{ border: "3px solid #000" }}
        />
      </div>
      <div
        style={{
          display: "inline-block",
          verticalAlign: "top",
          width: "100%",
          aspectRatio: "0.81625",
          marginTop: "2em",
          border: "3px solid #000",
          backgroundColor: "#faf7f3",
        }}
      ></div>
      <div
        id="back-cover"
        style={{
          display: "inline-flex",
          verticalAlign: "top",
          width: "100%",
          aspectRatio: "0.81625",
          marginTop: "2em",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid #000",
          backgroundColor: "rgba(170,195,190,255)",
        }}
      >
        <div>
          <b>
            <a href="https://cohost.org/ror">@ror</a>
          </b>
          <br />
          <br />
          <i>
            <a href="https://kitpatella.com">kitpatella.com</a>
          </i>
        </div>
      </div>
    </div>
  </StoryTemplate>
);

export default {
  title: "Posts/Carousel 1 (@ror's photozine 2)",
  component: Carousel,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {}


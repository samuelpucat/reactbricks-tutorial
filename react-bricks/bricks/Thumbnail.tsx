// Thumbnail.tsx
import React from "react";
import { types, Text, RichText, Image } from "react-bricks/frontend";

interface ThumbnailProps {
  hasShadow: boolean;
  bgColor: types.IColor;
}

const Thumbnail: types.Brick<ThumbnailProps> = ({
  hasShadow,
  bgColor,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`my-6 p-6 text-center border rounded-lg ${
        hasShadow ? "shadow-xl" : ""
      } ${bgColor?.className}`}
    >
      <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="mb-6"
        renderWrapper={({ children, width, height }) => (
          <div className="wrapper">{children}</div>
        )}
      />

      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        )}
        placeholder="Type a title..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
      />

      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
        ]}
      />
    </div>
  );
};

Thumbnail.schema = {
  name: "thumbnail",
  label: "Thumbnail",
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: [
      {
        type: "paragraph",
        children: [
          {
            text: "Title",
          },
        ],
      },
    ],
    description: [
      {
        type: "paragraph",
        children: [
          {
            text: "Description",
          },
        ],
      },
    ],
    image: {
      fallbackSrc:
        "https://images.reactbricks.com/original/d7585dec-9f2a-4866-8554-b1c180c99097.png",
      fallbackSrcSet:
        "https://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-400.png 400w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-300.png 300w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-200.png 200w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-100.png 100w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-50.png 50w",
      fallbackType: "image/png",
      src: "https://images.reactbricks.com/original/d7585dec-9f2a-4866-8554-b1c180c99097.webp",
      placeholderSrc:
        "https://images.reactbricks.com/placeholder/d7585dec-9f2a-4866-8554-b1c180c99097.jpg",
      srcSet:
        "https://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-400.webp 400w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-300.webp 300w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-200.webp 200w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-100.webp 100w,\nhttps://images.reactbricks.com/src_set/d7585dec-9f2a-4866-8554-b1c180c99097-50.webp 50w",
      width: 1138,
      height: 302,
      alt: "Fallback alt tag",
      seoName: "",
    },
    hasShadow: true,
    bgColor: { color: "#ffffff", className: "bg-white" },
  }),
  sideEditProps: [
    {
      name: "hasShadow",
      label: "Shadow",
      type: types.SideEditPropType.Boolean,
    },
    {
      name: "bgColor",
      label: "Background",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: "White",
            value: { color: "#ffffff", className: "bg-white" },
          },
          {
            label: "Light blue",
            value: { color: "#eff6ff", className: "bg-blue-50" },
          },
        ],
      },
    },
  ],
};

export default Thumbnail;

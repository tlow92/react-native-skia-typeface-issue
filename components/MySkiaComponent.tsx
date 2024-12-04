import { Canvas, Paragraph, Skia, useFonts } from "@shopify/react-native-skia";
import React from "react";

type MySkiaComponentProps = {};

const MySkiaComponent = ({}: MySkiaComponentProps) => {
  const fonts = useFonts({
    "Inter-Regular": [require("@tamagui/font-inter/otf/Inter-Regular.otf")],
  });
  if (!fonts) return;

  const textStyle = {
    fontSize: 24,
    color: Skia.Color("black"),
    fontFamilies: ["Inter-Regular"],
  };
  const paragraph = Skia.ParagraphBuilder.Make({}, fonts)
    .pushStyle(textStyle)
    .addText("Skia rendered example text")
    .build();
  return (
    <Canvas>
      <Paragraph
        width={Math.ceil(paragraph.getLongestLine())}
        paragraph={paragraph}
        x={0}
        y={0}
      />
    </Canvas>
  );
};

export default MySkiaComponent;

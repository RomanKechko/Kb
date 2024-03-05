"use client";
import { FC, useEffect, useRef } from "react";
import style from "./DocumentComponent.module.css";

interface IDocumentComponent {
  image: string;
}

const DocumentComponent: FC /* <IDocumentComponent> */ = (/* props */) => {
  /*   const { image } = props; */
  const viewer = useRef<HTMLDivElement>(null);
  const pdf =
    "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf";
  useEffect(() => {
    const loadWebViewer = async () => {
      const WebViewer = (await import("@pdftron/webviewer")).default;
      if (viewer.current) {
        WebViewer(
          {
            path: "/webviewer/lib",
            initialDoc: /* `${image}` */ "/doc/Word.docx",
          },
          viewer.current
        ).then((instance) => {
          instance.UI.setToolbarGroup("toolbarGroup-Insert");
          instance.UI.disableElements(["toolbarGroup-Insert"]);
        });
      }
    };
    loadWebViewer();
  }, []);

  return (
    <div className={style.myComponent}>
      <div className={style.webviewer} ref={viewer}></div>
    </div>
  );
};
export default DocumentComponent;

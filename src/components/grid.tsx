"use client";

import GridLayout, { type ReactGridLayoutProps } from "react-grid-layout";

import "react-grid-layout/css/styles.css";

type GridItemProps = {
  component: React.ReactNode;
  className?: string;
  dataGrid: {
    // These are all in grid units, not pixels
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;

    // If true, equal to `isDraggable: false, isResizable: false`.
    isStatic?: boolean;
    // If false, will not be draggable. Overrides `isStatic`.
    isDraggable?: boolean;
    // If false, will not be resizable. Overrides `static`.
    isResizable?: boolean;
    // By default, a handle is only shown on the bottom-right (southeast) corner.
    // As of RGL >= 1.4.0, resizing on any corner works just fine!
    resizeHandles?:
      | Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">
      | null
      | undefined;
    // If true and draggable, item will be moved only within grid.
    isBounded?: boolean;
  };
};

const Grid = ({
  items,
  layoutProps,
}: {
  items: GridItemProps[];
  layoutProps?: ReactGridLayoutProps;
}) => {
  return (
    <GridLayout
      className="layout w-52"
      cols={12}
      rowHeight={30}
      width={1200}
      {...layoutProps}
    >
      {items.map((item: GridItemProps, index: number) => (
        <div key={index} data-grid={item.dataGrid}>
          {item.component}
        </div>
      ))}
    </GridLayout>
  );
};

export { Grid };

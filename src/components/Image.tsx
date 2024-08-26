import React from "react";
import NextImage from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageProps {
  src: string | StaticImport;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  role?: string;
  onClick?: () => void;
}
export const Image = (props: ImageProps) => {
  const { src, alt, priority, width, height, sizes, role, onClick } = props;
  return (
    <div className={`relative image-comp ${props.className}`} onClick={onClick}>
      <NextImage
        sizes={sizes}
        src={src}
        role={role}
        alt={alt || ""}
        priority={priority}
        width={width}
        height={height}
        fill={!width && !height ? true : false}
      />
    </div>
  );
};

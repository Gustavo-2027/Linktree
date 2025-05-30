import { ReactNode } from "react";

interface SocialProps {
  url: string;
  children: ReactNode;
}

const Social = ({ url, children }: SocialProps) => {
  return (
    <a href={url} target="_blank" rel={"noopener noreferrer"}>
      {children}
    </a>
  );
};

export default Social;

import type { ReactElement } from "react";
import { LinkButton } from "#/components/link-button";

export function LinkSection(): ReactElement {
  const buttonStyle = {
    background: "grey",
    color: "white"
  };

  return (
    <div className="flex flex-wrap gap-2">
      <LinkButton href="https://github.com/NextThread" target="_blank" style={buttonStyle}>
        GitHub
      </LinkButton>
      <LinkButton href="https://www.linkedin.com/in/anurag31oct" target="_blank" style={buttonStyle}>
        LinkedIn
      </LinkButton>
      {/* <LinkButton href="https://www.malt.fr/profile/camilledugas" target="_blank" style={buttonStyle}>
        Malt
      </LinkButton> */}
      <LinkButton href="mailto:contact@anuragr135@gmail.com" target="_blank" style={buttonStyle}>
        Email
      </LinkButton>
    </div>
  );
}
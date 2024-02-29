import { useActiveContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { links } from "./data";

export function useSectionInView({
  threshold,
  activeSectionName,
}: {
  threshold: number;
  activeSectionName: (typeof links)[number]["name"];
}) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, lastActiveSectionTime } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - lastActiveSectionTime.getTime() > 1000) {
      setActiveSection(activeSectionName);
    }
  }, [inView]);

  return {
    ref,
    inView
  };
}

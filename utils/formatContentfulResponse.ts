import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from "moment";

export function formatContentfulResponse(response: any) {
  const {
    profilePhoto,
    description,
    aboutSectionData,
    projects = [],
    skills,
    expriences,
    resume,
    socials,
  } = response?.[0]?.fields;

  return {
    profilePhotoUrl: "https:" + profilePhoto?.fields?.file?.url,
    description: documentToReactComponents(description),
    about: documentToReactComponents(aboutSectionData),
    projects: projects.map((project: any) => {
      return {
        title: documentToReactComponents(project.fields.title),
        description: documentToReactComponents(project.fields.description),
        tags: project.fields.tags.map((tag: any) =>
          documentToReactComponents(tag.fields.title)
        ),
        imageUrl: "https:" + project.fields.photos.fields.file.url,
      };
    }),
    skills: skills.map((skill: any) =>
      documentToReactComponents(skill?.fields?.title)
    ),
    experiences: expriences.map((experience: any) => ({
      title: experience?.fields?.company,
      location: experience?.fields?.workLocation,
      description: documentToReactComponents(experience?.fields?.description),
      icon: "https:" + experience?.fields?.icon?.fields?.file?.url,
      date: `${moment(experience?.fields?.startDate).format(
        "DD-MM-YYYY"
      )} - ${moment(experience?.fields?.endDate).format("DD-MM-YYYY")}`,
    })),
    resume: "https:" + resume?.fields?.file?.url,
    socials: socials.reduce((acc: any, social: any) => {
      return {
        ...acc,
        ...social?.fields,
      };
    }, {}),
  };
}

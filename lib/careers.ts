// @ts-expect-error since this is a yaml file, it doesn't have a type
import careersYaml from "@/data/careers.yaml";
import { Career } from "@/models/career";

export const Careers = careersYaml as Career[];

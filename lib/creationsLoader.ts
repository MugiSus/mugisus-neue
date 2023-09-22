// @ts-expect-error since this is a yaml file, it doesn't have a type
import creationsYaml from "@/data/creations.yaml";
import { Creation } from "@/models/creations";

export const Creations = creationsYaml as Creation[];

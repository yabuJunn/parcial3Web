import { PoemType } from "../../types/poems";

export interface poemsSliceTypes {
    allPoems: Array<PoemType>,
    detailPoemm: PoemType | undefined
}
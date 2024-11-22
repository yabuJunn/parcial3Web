import { PoemType } from "../types/poems";

export const getAllPoems = async () => {
  const response = await fetch('https://poetrydb.org/poemcount/20')
  const responseJson: Array<PoemType> = await response.json()
  return responseJson
}

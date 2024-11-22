import { createContext } from "react";

export interface FormContextType {
        title: string,
        author: string,
        category: string,
        lines: Array<string>
}

export const FormContext = createContext<FormContextType>({
        title: "",
        author: "",
        category: "",
        lines: []
})
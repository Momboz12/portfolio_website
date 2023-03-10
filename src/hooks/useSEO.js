import { useEffect } from "react";

export default function useSEO({title}) {

    useEffect(() => {

        if(title){
            document.title = `${title} · Claudio D. Operti`
        };

        //componentdidmount: execute the function and update title for the original
        return () => document.title = 'Claudio D. Operti · Full-Stack Developer';
    },[title]);

}
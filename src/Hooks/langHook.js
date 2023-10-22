import { useState, useEffect } from "react";
import json from "../Data/resume.json"

const useLang = (lang) => {
    const [data, setData] = useState(json["eng"])

    useEffect(() => {
        setData(json[lang]);
    }, [data, lang]);

    return [data];
}
 
export default useLang;
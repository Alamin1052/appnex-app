import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


const useApps = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios('/AppsData.json')
            .then(data => setApps(data.data))
            .catch((err) => toast.error("Error loading app data:", err))
            .finally(() => setLoading(false))
    }, [])
    return { apps, loading }

}
export default useApps
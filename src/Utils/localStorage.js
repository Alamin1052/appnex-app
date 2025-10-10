import toast from "react-hot-toast"

export const loadInstallation = () => {
    try {
        const data = localStorage.getItem('installation')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const updateList = app => {
    const installation = loadInstallation()

    try {
        const isDuplicate = installation.some(a => a.id === app.id)
        if (isDuplicate) return toast.error('Already Installed')
        const updatedInstallationlist = [...installation, app]
        localStorage.setItem('installation', JSON.stringify(updatedInstallationlist))
        toast.success('App Install successful')
    } catch (err) {
        console.log(err)
    }
}

export const removeFromInstallation = id => {
    const installation = loadInstallation()
    try {
        const updatedInstallationlist = installation.filter(p => p.id !== id)
        localStorage.setItem('installation', JSON.stringify(updatedInstallationlist))
    } catch (err) {
        console.log(err)
    }
}
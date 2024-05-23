interface DataObject {
	[key: string]: any
}

export const createFormDataFromObject = (obj: DataObject) => {
	const formData = new FormData()

	for (const key in obj) {
		if (!obj.hasOwnProperty(key)) continue

		if (typeof obj[key] === "object" && !(obj[key] instanceof File)) {
			formData.append(key, JSON.stringify(obj[key]))
			continue
		}

		formData.append(key, obj[key])
	}

	return formData
}

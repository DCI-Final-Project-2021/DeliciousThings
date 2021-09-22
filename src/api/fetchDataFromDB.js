export default {
    fetchDataFromDataBase: async function (url) {
        try {
            return await fetch(url)
                .then((response) => response.json())
                .then((jsonData) => jsonData.result)
        } catch (error) {
            console.log(error);
        }
    },

}
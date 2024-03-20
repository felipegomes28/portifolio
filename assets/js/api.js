
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/felipegomes28/portifolio/main/data/profile.json?token=GHSAT0AAAAAACPRCGKJZYYKHRWI72GASDMAZP24NYA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

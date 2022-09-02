export async function getData() {
  try {
    const url = "https://api.airtable.com/v0/appA1Sp77Uj5ZL9pG/sea?api_key=keyJ4NAnNssOD6noi";
    // const url = `https://api.chucknorris.io/jokes/random`;
    return await (await fetch(url)).json();
  } catch (err) {
    console.log("Error - getData() ", err);
    throw err;
  }
}

let getUserData=() =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: 30 });
      }, 2000);
    });
  }

  async function displayUserData() {
    try {
      console.log("Fetching user data...");
      const data = await getUserData();
      console.log("User Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  displayUserData();
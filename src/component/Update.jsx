import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodedData = useLoaderData();
  console.log(lodedData);

  //    ? form er function
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    // ? fetch
    fetch(`http://localhost:5000/users/${lodedData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated SuccessFully");
        }
      });
  };
  return (
    <div>
      <h3>Update Information {lodedData.name}</h3>
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" defaultValue={lodedData?.name} />
          <br />
          <input type="email" name="email" defaultValue={lodedData?.email} />
          <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default Update;

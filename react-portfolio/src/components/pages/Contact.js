import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
    <form>
      <div className="mb-3 col-3 g-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      </div>

      <div className="mb-3 col-3 g-4">
        <label for="exampleInputPassword1" className="form-label">E-mail Address</label>
        <input type="password" className="form-control" id="exampleInputPassword1"></input>
      </div>

      <div className="mb-3 col-6">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
}
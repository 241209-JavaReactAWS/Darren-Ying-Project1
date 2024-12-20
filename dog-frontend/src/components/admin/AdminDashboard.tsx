// for this component we are running into problem with class. its in css
// if we want style use className
import"./Admin.css"

function AdminDashboard() {
  return (
    <div>
          <main>
              <h3>Adopt A Dog Today!</h3>

              <section className="admin-panel">

                  <div className="admin-actions">
                      <button className="create-dog-btn">Create New Dog</button>
                  </div>

                  <table className="dog-table">
                      <thead>
                          <tr>
                              <th>Dog Tag</th>
                              <th>Name</th>
                              <th>Breed</th>
                              <th>Adoption Status</th>
                              <th>Gender</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Max</td>
                              <td>Bulldog</td>
                              <td>Adopted</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>

                          <tr>
                              <td>2</td>
                              <td>Charlie</td>
                              <td>Beagle</td>
                              <td>Available</td>
                              <td>Male</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>

                          <tr>
                              <td>3</td>
                              <td>Lucy</td>
                              <td>Poodle</td>
                              <td>Available</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>

                          <tr>
                              <td>4</td>
                              <td>Daisy</td>
                              <td>Cocker Spaniel</td>
                              <td>Adopted</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>

                          <tr>
                              <td>5</td>
                              <td>Molly</td>
                              <td>Labrador</td>
                              <td>Available</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>

                          <tr>
                              <td>6</td>
                              <td>Rockey</td>
                              <td>Rottweiler</td>
                              <td>Available</td>
                              <td>Male</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>7</td>
                              <td>Bella</td>
                              <td>Boxer</td>
                              <td>Adopted</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>8</td>
                              <td>Bailey</td>
                              <td>Dalmatian</td>
                              <td>Available</td>
                              <td>Male</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>9</td>
                              <td>Coco</td>
                              <td>Chihuahua</td>
                              <td>Available</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>10</td>
                              <td>Lola</td>
                              <td>Shiba Inu</td>
                              <td>Adopted</td>
                              <td>Male</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>11</td>
                              <td>Milo</td>
                              <td>French Bulldog</td>
                              <td>Available</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>12</td>
                              <td>Toby</td>
                              <td>Golden Retriever</td>
                              <td>Adopted</td>
                              <td>Male</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                          <tr>
                              <td>13</td>
                              <td>Sassy</td>
                              <td>German Shepherd</td>
                              <td>Available</td>
                              <td>Female</td>
                              <td>
                                  <select className="adoption-status">
                                      <option value="Available">Available</option>
                                      <option value="Adopted">Adopted</option>
                                  </select>
                              </td>
                              <td>
                                  <button className="delete-btn">Delete</button>
                              </td>
                              <td>
                                  <button className="update-btn">Update</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </section>
          </main>
      
    </div>
  )
}

export default AdminDashboard
